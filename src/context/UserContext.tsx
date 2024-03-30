import { Models } from "appwrite";
import { createContext, useContext, useState } from "react";

interface UserContextProps {
  togglePagePagination: "Posts" | "Reviews";
  setTogglePagePagination: React.Dispatch<
    React.SetStateAction<"Posts" | "Reviews">
  >;
  conversations: Models.Document | undefined;
  setConversations: React.Dispatch<
    React.SetStateAction<Models.Document | undefined>
  >;
}

const UserContext = createContext<UserContextProps>({
  togglePagePagination: "Posts",
  setTogglePagePagination: () => {},
  conversations: undefined,
  setConversations: () => {},
});

export const UserProvider = ({ children }: { children: JSX.Element }) => {
  const [togglePagePagination, setTogglePagePagination] = useState<
    "Posts" | "Reviews"
  >("Posts");

  // MESSAGE

  const [conversations, setConversations] = useState<Models.Document>();

  const value = {
    togglePagePagination,
    setTogglePagePagination,
    conversations,
    setConversations,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserSettingContext = () => useContext(UserContext);
