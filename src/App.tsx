import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyles } from './styles/global';



const App: React.FC = () => {
  const [
    isNewTransactionalModalOpen,
    setIsNewTransactionalModalOpen
  ] = useState(false);

  function handleOpenNewTransactionalModal() {
    setIsNewTransactionalModalOpen(true);
  }

  function handleCloseNewTransactionalModal() {
    setIsNewTransactionalModalOpen(false);
  }

  return (
    <>
      <Header
        onOpenNewTransactionalModal={handleOpenNewTransactionalModal}
      />
      <Dashboard />

      <NewTransactionModal
        onRequestClose={handleCloseNewTransactionalModal}
        isOpen={isNewTransactionalModalOpen}
      />

      <GlobalStyles />
    </>
  );
}

export default App;
