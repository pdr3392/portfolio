/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import { create } from 'zustand';

type PortfolioOrRant = 'portfolio' | 'rant';

interface State {
  portfolioOrRant: PortfolioOrRant;
  setPortfolioOrRant: (portfolioOrRant: PortfolioOrRant) => void;
}

const usePortfolioOrRant = create<State>((set) => ({
  portfolioOrRant: 'portfolio',
  setPortfolioOrRant: (portfolioOrRant) => set({ portfolioOrRant }),
}));

export const usePortfolioOrRantState = (): { portfolioOrRant: PortfolioOrRant; setPortfolioOrRant: (portfolioOrRant: PortfolioOrRant) => void } => {
  const { portfolioOrRant, setPortfolioOrRant } = usePortfolioOrRant();
  return {
    portfolioOrRant,
    setPortfolioOrRant,
  };
};
