'use client';

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import dynamic from 'next/dynamic';
import { usePortfolioOrRantState } from './hooks/usePortfolioOrRant';

const DynamicPortfolio = dynamic(() => import('./layouts/Portfolio'), {
  ssr: false,
});

const DynamicRant = dynamic(() => import('./layouts/Rant'), {
  ssr: false,
});

export default function Home(): React.ReactElement {
  const { portfolioOrRant } = usePortfolioOrRantState();

  if (portfolioOrRant === 'portfolio') {
    return <DynamicPortfolio />;
  }

  return <DynamicRant />;
}
