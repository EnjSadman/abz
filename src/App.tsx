import React from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { WideSection } from './components/WideSection/WideSection';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <WideSection />
      </main>
    </>
  );
};
