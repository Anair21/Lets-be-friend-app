// ScrollContext.tsx
import React, { createContext, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface ScrollContextState {
  [pageLink: string]: number;
}

interface ScrollContextType {
  updateScrollPosition: (pageLink: string, position: number) => void;
  getScrollPosition: (pageLink: string) => number;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error(
      "useScrollContext must be used within a ScrollContextProvider"
    );
  }
  return context;
};

export const ScrollContextProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [scrollPositions, setScrollPositions] =
    React.useState<ScrollContextState>({});
  const { pathname } = useLocation();

  // Function to update scroll position and cleanup on unmount
  const handleScrollPosition = () => {
    window.scrollTo(0, scrollPositions[pathname] || 0);
    return () => {
      setScrollPositions((prev) => ({
        ...prev,
        [pathname]: window.scrollY,
      }));
    };
  };

  useEffect(handleScrollPosition, [pathname]); // Run on pathname change

  const updateScrollPosition = (pageLink: string, position: number) => {
    setScrollPositions((prev) => ({
      ...prev,
      [pageLink]: position,
    }));
  };

  const getScrollPosition = (pageLink: string) => {
    return scrollPositions[pageLink] || 0;
  };

  return (
    <ScrollContext.Provider value={{ updateScrollPosition, getScrollPosition }}>
      {children}
    </ScrollContext.Provider>
  );
};
