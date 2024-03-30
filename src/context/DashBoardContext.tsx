import { Models } from "appwrite";
import { createContext, useContext, useState } from "react";

interface IDashBoardContext {
  listOfPlans: Models.Document[];
  setListOfPlans: React.Dispatch<React.SetStateAction<Models.Document[]>>;
  selectedPlan: Models.Document | undefined;
  setSelectedPlan: React.Dispatch<
    React.SetStateAction<Models.Document | undefined>
  >;
  openModal: Models.Document | null | undefined;
  setOpenModal: React.Dispatch<
    React.SetStateAction<Models.Document | null | undefined>
  >;
}

const DashBoardContext = createContext<IDashBoardContext>(
  {} as IDashBoardContext
);

export const DashBoardProvider = ({ children }: any) => {
  const [listOfPlans, setListOfPlans] = useState<Models.Document[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<
    Models.Document | undefined
  >();

  const [openModal, setOpenModal] = useState<Models.Document | null>();

  const state = {
    selectedPlan,
    setSelectedPlan,
    openModal,
    setOpenModal,
    listOfPlans,
    setListOfPlans,
  };

  return (
    <DashBoardContext.Provider value={state}>
      {children}
    </DashBoardContext.Provider>
  );
};

export const useDashBoard = () => useContext(DashBoardContext);
