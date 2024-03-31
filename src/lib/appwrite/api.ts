import { Query } from "appwrite";
import { router } from "expo-router";
import { account, appwriteConfig, databases } from "./appwriteConfig";

export async function getCurrentUser() {
  try {
    const currentAccount = await account
      .get()
      .catch(() => router.navigate("/sign-in"));

    if (!currentAccount) throw Error;
    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", currentAccount.$id), Query.select(["$id", "*"])]
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
  }
}

export async function SignInAccount(user: { email: string; password: string }) {
  try {
    const session = await account.createEmailSession(user.email, user.password);

    if (!session) throw Error;

    return session;
  } catch (error) {
    console.log(error);
  }
}

export async function signOutAccount() {
  try {
    const session = account.deleteSession("current");
    return session;
  } catch (error) {
    console.log(error);
  }
}

// POSTS

export async function getRecentInfinitePosts({
  pageParam,
}: {
  pageParam: number;
}) {
  const queries: any[] = [
    Query.orderDesc("$createdAt"),
    Query.limit(10),
    Query.isNotNull("creator"),
    Query.select(["$createdAt", "$id", "*", "creator.*"]),
  ];

  if (pageParam) {
    queries.push(Query.cursorAfter(pageParam.toString()));
  }

  try {
    const posts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.postCollectionId,
      queries
    );

    if (!posts) throw Error;

    return posts;
  } catch (error) {
    console.log(error);
  }
}
