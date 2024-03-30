export type INavLink = {
  icon: React.ReactNode | any;
  route: string;
  label: string;
};

export type IUpdateUser = {
  userId: string;
  name: string;
  bio: string;
  imageId: string;
  imageUrl: URL | string;
  file: File[];
};

// export type IContextType = {
//   user: IUser;
//   isLoading: boolean;
//   isAuthenticated: boolean;
//   setUser: void;
//   setIsAuthenticated: void;
//   checkAuthUser: Promise<boolean>;
// };

export type INewPost = {
  userId: string;
  caption: string;
  file: File[];
  location?: string;
  tags?: string;
  accountId: string;
};

export type IUpdatePost = {
  postId: string;
  caption: string;
  imageId?: string;
  imageUrl?: URL;
  usedDp?: boolean;
  file: File[];
  location?: string;
  tags?: string;
};

export type IDeletePost = {
  postId: string;
  imageId: string;
  imageUrl?: URL;
};

export type IUser = {
  id: string;
  accountId: string;
  name: string;
  username: string;
  email: string;
  phoneNumber: number;
  imageUrl: string;
  bio: string;
  sentVerifiedReq: boolean;
  verified: boolean;
};

export type IPlanNumber = {
  totalPlan: number;
  limitedPlan: number;
};

export type INewUser = {
  name: string;
  email: string;
  username: string;
  password: string;
};

export type IUserInformation = {
  phoneNumber?: string;
  bio: string;
  userId: string;
  gender: string;
  lookingFor: string;
  hobby: string;
  education?: string;
  birthDate?: Date;
};

export type IPlanInfos = {
  userId: string;
  title: string;
  desc: string;
  time: string;
  price: number;
  creator: string;
  terms: string;
  file: File[];
  totalPlan: number;
};

export type IPlanInteraction = {
  planTitle?: string;
  planId?: string;
  price: number;
  whoSendReq?: string;
  creator: string;
  paid: boolean;
  paymentId: string;
  referenceNumber: string;
  checkoutUrl: string;
  webhookId: string;
  creatorAccountId: string;
  clientAccountId: string;
};

export type ICheckIfInteracted = {
  userId: string;
  planId: string;
};

// MESSAGE BLOCKS

export type ISendMessage = {
  userId: string;
  message?: string;
  conversation?: string | null;
  imageUrl?: URL;
  imageId?: string;
  chatId?: string;
  name?: string;
  mixId?: string;
};

export type IDeleteChatImage = {
  chatId: string;
  imageId: string;
};

export type ICreateConvo = {
  creator1: string;
  creator2: string;
  userId1: string;
  userId2: string;
};

export type ICheckConvo = {
  chatId: string;
  imageId: string;
  isItReceipt: string;
};

export type IAttemptToVerify = {
  idFront: File[];
  idBack: File[];
  photo: File[];
  address: string;
  userId: string;
};

export type INewReviewPost = {
  interactionId: string;
  userId: string;
  ownerId: string;
  userAccountId: string;
  caption: string;
  file: File[];
  location?: string;
  stars?: number;
  planId: string;
};

//

// Verifying

export type IVerifyUsers = {
  userId: string;
  verifyingId: string;
  img?: string[];
};

// // Infinite List
// export interface UniqueItemProps<T> {
//   data: T[][];
//   setUniqueItems: React.Dispatch<React.SetStateAction<T[]>>;
//   extractId: (item: T) => string | number;
// }

// Reviews

export type ICreateComment = {
  reviewId?: string;
  creator: string;
  creatorAccountId: string;
  creatorId: string;
  body: string;
};

export type I2Id = {
  id: string;
  id2: string;
  creatorId?: string;
  clientId?: string;
};

// Friending system

export type IAddFriends = {
  creator: string;
  client: string;
  creatorListOfFriends: string[];
  clientListOfFriends: string[];
};
