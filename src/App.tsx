import React from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { GetRequest } from './components/GetRequest/GetRequest';
import { WideSection } from './components/WideSection/WideSection';
import { PostRequest } from './components/PostRequest/PostRequest';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main_content">
        <WideSection />
        <GetRequest />
        <PostRequest />
      </main>
    </>
  );
};
