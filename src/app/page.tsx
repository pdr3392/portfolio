'use client';

/* eslint-disable comma-dangle */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import dynamic from 'next/dynamic';
import { usePortfolioOrRantState } from './hooks/usePortfolioOrRant';
import Spinner from './components/Spinner';

const DynamicPortfolio = dynamic(() => import('./layouts/Portfolio'), {
  ssr: false,
});

const DynamicRant = dynamic(() => import('./layouts/Rant'), {
  ssr: false,
});

export default function Home(): React.ReactElement {
  const [pageWidth, setpageWidth] = React.useState(
    window ? window.innerWidth : 0
  );
  const { portfolioOrRant } = usePortfolioOrRantState();

  // eslint-disable-next-line consistent-return
  React.useEffect(() => {
    console.log('Developed by Pedro Correia using Nextjs and Tailwindcss');
    console.log(
      'In case you ever need to contact me, feel free to reach out at phrcorreia3392@gmail.com'
    );

    if (window) {
      const handleResize = (): void => {
        setpageWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  if (!pageWidth || pageWidth < 1) {
    return (
      <div className='min-h-[100vh] min-w-[100vw] max-h-[100vh] max-w-[100vw] bg-bg flex absolute top-0 left-0 items-center justify-center'>
        <Spinner />
      </div>
    );
  }

  if (portfolioOrRant === 'portfolio') {
    return <DynamicPortfolio />;
  }

  return <DynamicRant />;
}
