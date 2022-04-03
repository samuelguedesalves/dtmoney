import React, { useState } from 'react';
import { GlobalStyles } from './styles/global';

import { NewTransactionModal } from './components/NewTransactionModal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { TransactionsProvider } from './hooks/useTransactions';

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
    <TransactionsProvider>
      <Header
        onOpenNewTransactionalModal={handleOpenNewTransactionalModal}
      />
      <Dashboard />

      <NewTransactionModal
        onRequestClose={handleCloseNewTransactionalModal}
        isOpen={isNewTransactionalModalOpen}
      />

      <GlobalStyles />
    </TransactionsProvider>
  );
}

export default App;
