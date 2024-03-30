import { getCurrentUser } from "@/lib/appwrite/api";
import { account } from "@/lib/appwrite/appwriteConfig";
import { IPlanNumber, IUser } from "@/types";
import { router } from "expo-router";
import React, { createContext, useContext, useEffect, useState } from "react";
export const INITIAL_USER: IUser = {
  id: "",
  accountId: "",
  name: "",
  username: "",
  email: "",
  phoneNumber: 0,
  imageUrl: "",
  bio: "",
  sentVerifiedReq: true,
  verified: true,
};

interface AuthContextType {
  user: IUser;
  isLoading: boolean;
  isAuthenticated: boolean;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  checkAuthUser: () => Promise<boolean>;
  planCount: IPlanNumber;
  setPlanCount: React.Dispatch<React.SetStateAction<IPlanNumber>>;
}

const INITIAL_STATE: AuthContextType = {
  user: INITIAL_USER,
  isLoading: false,
  isAuthenticated: false,
  setUser: () => {}, // Initially set as empty function
  setIsAuthenticated: () => {}, // Initially set as empty function
  checkAuthUser: async () => false as boolean,
  planCount: {
    totalPlan: 0,
    limitedPlan: 0,
  },
  setPlanCount: () => {},
};

const AuthContext = createContext<AuthContextType>(INITIAL_STATE);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<IUser>(INITIAL_USER);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check plan count

  const [planCount, setPlanCount] = useState<IPlanNumber>({
    totalPlan: 0,
    limitedPlan: 0,
  });

  const checkAuthUser = async () => {
    setIsLoading(true);
    try {
      const currentAccount = await getCurrentUser();

      if (currentAccount) {
        setUser({
          id: currentAccount.$id,
          accountId: currentAccount.accountId,
          name: currentAccount.name,
          username: currentAccount.username,
          email: currentAccount.email,
          phoneNumber: currentAccount.phoneNumber,
          imageUrl: currentAccount.imageUrl,
          bio: currentAccount.bio,
          sentVerifiedReq: currentAccount.sentVerifiedReq,
          verified: currentAccount.verified,
        });

        setPlanCount({
          totalPlan: currentAccount.totalPlan,
          limitedPlan: currentAccount.limitedPlan,
        });

        setIsAuthenticated(true);

        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      console.log("eto ata");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    account
      .get()
      .then(() => checkAuthUser())
      .catch(() => router.navigate("/sign-in"));
  }, []);

  useEffect(() => {
    if (!isAuthenticated && !isLoading && !user) router.replace("/sign-in");
  }, [!isAuthenticated]);

  const value = {
    user,
    setUser,
    isLoading,
    isAuthenticated,
    setIsAuthenticated,
    checkAuthUser,
    planCount,
    setPlanCount,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useUserContext = () => useContext(AuthContext);
