'use client';

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import { usePortfolioOrRantState } from './hooks/usePortfolioOrRant';
import Portfolio from './layouts/Portfolio';
import Rant from './layouts/Rant';

export default function Home(): React.ReactElement {
  const { portfolioOrRant } = usePortfolioOrRantState();

  if (portfolioOrRant === 'portfolio') {
    return <Portfolio />;
  }

  return <Rant />;
}
