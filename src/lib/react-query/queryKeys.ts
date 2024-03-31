export enum QUERY_KEYS {
  // AUTH KEYS
  CREATE_USER_ACCOUNT = "createUserAccount",

  // BASIC REQUESTS
  GET_USER_ACCOUNT_ID = "getUserAccountId",
  GET_CONVERSATION_TO_UPDATE = "getConversationToUpdate",

  // USER KEYS
  GET_CURRENT_USER = "getCurrentUser",
  GET_USERS = "getUsers",
  GET_USER_BY_ID = "getUserById",

  // POST KEYS
  GET_POSTS = "getPosts",
  CHECKED_POSTS = "checkedPost",
  LIKED_POSTS_LIST = "likedPostList",
  GET_INFINITE_POSTS = "getInfinitePosts",
  GET_INFINITE_USERS = "getInfiniteUsers",
  GET_INFINITE_SAVED = "getInfiniteSaved",
  GET_RECENT_POSTS = "getRecentPosts",
  GET_SAVED = "getRecentPosts",
  GET_POST_BY_ID = "getPostById",
  GET_USER_POSTS = "getUserPosts",
  GET_FILE_PREVIEW = "getFilePreview",

  // SAVED POST
  GET_SAVED_POST = "getSavedPost",
  GET_SAVED_POST_ID = "getSavedPostId",

  //  SEARCH KEYS
  SEARCH_POSTS = "getSearchPosts",
  SEARCH_UserS = "getSearchUsers",

  //  CHATS KEYS
  LOAD_OWNER_CONVO = "loadOwnerConvoID",
  LOAD_CHATS = "getChats",
  LOAD_CONVERSATIONS = "getConversations",
  LOAD_CONVERSATIONS_WITH_DETAILS = "getConversationsWithDetails",
  CHECK_CONVO_EXPIRED = "checkConvoExpired",

  // PLANS
  USER_PLANS = "userPlans",
  USER_PLANS_List = "userPlanList",
  USER_INTERACTED = " planInteracted",
  USER_INTERACTION_LIST = " planInteractions",
  USER_FRIEND_REQUEST_LIST = " friendRequestList",
  USER_YOUR_REQUEST_LIST = "yourRequestList",
  USER_INTERACTION_PAYMENT = "userInteractionPayment",
  USER_PENDING_FRIEND_REQUEST_LIST = " pendingFriendRequestList",
  USER_PENDING_FRIEND_REQUEST_ACCEPTED_YOU_LIST = " pendingFriendRequestListAcceptedYou",
  USER_PENDING_FRIEND_REQUEST_LIST_HISTORY = " pendingFriendRequestListHistory",
  USER_PENDING_FRIEND_REQUEST_ACCEPTED_YOU_LIST_HISTORY = " pendingFriendRequestListAcceptedYouHistory",

  // CONVERSATION RECEIPT
  CONVERSATION_RECEIPT_CONTAINER = "conversationReceiptContainer",
  CONVERSATION_CHATS_RECEPT = "conversationChats",

  // REVIEWS
  CREATE_REVIEW = "createReview",
  USER_REVIEW_LIST = "userReviewList",
}
