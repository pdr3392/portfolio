/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import { create } from 'zustand';

interface State {
  isBurgerMenuOpened: boolean;
  setIsBurgerMenuOpened: (isBurgerMenuOpened: boolean) => void;
}

const useBurgerMenu = create<State>((set) => ({
  isBurgerMenuOpened: false,
  setIsBurgerMenuOpened: (isBurgerMenuOpened) => set({ isBurgerMenuOpened }),
}));

export const useBurgerMenuState = (): { isBurgerMenuOpened: boolean; setIsBurgerMenuOpened: (isBurgerMenuOpened: boolean) => void } => {
  const { isBurgerMenuOpened, setIsBurgerMenuOpened } = useBurgerMenu();
  return {
    isBurgerMenuOpened,
    setIsBurgerMenuOpened,
  };
};
