import React from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { GetRequest } from './components/Request/GetRequest';
import { WideSection } from './components/WideSection/WideSection';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main_content">
        <WideSection />
        <GetRequest />
      </main>
    </>
  );
};
