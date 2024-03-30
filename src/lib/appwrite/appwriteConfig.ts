import { Account, Avatars, Client, Databases } from "appwrite";

export const appwriteConfig = {
  // OTHER INTERFACE

  projectIdL: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  url: process.env.EXPO_PUBLIC_APPWRITE_URL,
  databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
  storageId: process.env.EXPO_PUBLIC_APPWRITE_STORAGE_ID,
  userCollectionId: process.env.EXPO_PUBLIC_APPWRITE_USER_COLLECTION_ID,
  postCollectionId: process.env.EXPO_PUBLIC_APPWRITE_POST_COLLECTION_ID,
  likedPostCollectionId:
    process.env.EXPO_PUBLIC_APPWRITE_LIKED_POST_COLLECTION_ID,
  savesCollectionId: process.env.EXPO_PUBLIC_APPWRITE_SAVES_COLLECTION_ID,

  // PLANS

  plansCollectionId: process.env.EXPO_PUBLIC_APPWRITE_PLANS_COLLECTION_ID,
  planInteractionCollectionId:
    process.env.EXPO_PUBLIC_APPWRITE_PLAN_INTERACTION_COLLECTION_ID,
  convoReceiptCollectionId:
    process.env.EXPO_PUBLIC_APPWRITE_CONVERSATION_RECEIPT_COLLECTION_ID,
  chatReceiptCollectionId:
    process.env.EXPO_PUBLIC_APPWRITE_CHATS_RECEIPT_COLLECTION_ID,

  // CHAT FEATURE

  messagesStorageId: process.env.EXPO_PUBLIC_APPWRITE_MESSAGES_STORAGE_ID,
  convoCollectionId: process.env.EXPO_PUBLIC_APPWRITE_CONVO_COLLECTION_ID,
  chatsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_CHATS_COLLECTION_ID,
  whoOwnConvoCollectionId:
    process.env.EXPO_PUBLIC_APPWRITE_WHO_OWN_CONVO_COLLECTION_ID,

  // VERIFYING

  verifyingStorageId: process.env.EXPO_PUBLIC_APPWRITE_VERIFYING_STORAGE_ID,
  verifyingCollectionId:
    process.env.EXPO_PUBLIC_APPWRITE_VERIFYING_COLLECTION_ID,

  // REVIEWS

  reviewsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID,
  likedReviewsCollectionId:
    process.env.EXPO_PUBLIC_APPWRITE_LIKED_REVIEWS_COLLECTION_ID,
  reviewCommentsCollectionId:
    process.env.EXPO_PUBLIC_APPWRITE_COMMENTS_COLLECTION_ID,

  // FRIEND LIST

  friendListCollectionId:
    process.env.EXPO_PUBLIC_APPWRITE_FRIEND_LIST_COLLECTION_ID,
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url).setProject(appwriteConfig.projectIdL);

export const databases = new Databases(client);
export const avatars = new Avatars(client);
export const account = new Account(client);
