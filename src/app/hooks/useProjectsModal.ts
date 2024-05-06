/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import { create } from 'zustand';

export type ModalData = {
  projectName: string;
  projectData: string;
  projectLabels: string[];
};

interface State {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  modalData: ModalData;
  setModalData: (data: Partial<ModalData>) => void;
}

const useModalState = create<State>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  modalData: {
    projectName: '',
    projectData: '',
    projectLabels: [],
  },
  setModalData: (data) => set((state) => ({ modalData: { ...state.modalData, ...data } })),
}));

export const useModal = (): { isOpen: boolean; setIsOpen: (isOpen: boolean) => void; modalData: ModalData; setModalData: (modalData: ModalData) => void } => {
  const {
    isOpen, setIsOpen, modalData, setModalData,
  } = useModalState();

  return {
    isOpen,
    setIsOpen,
    modalData,
    setModalData,
  };
};
