import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { TransactionModal } from './components/TransactionModal';
import { TransactionsProvider } from './contexts/TransactionsContext';
import './styles/Global.scss';

function App() {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

  function handleCloseTransactionModal() {
    setIsTransactionModalOpen(false);
  }

  function handleOpenTransactionModal() {
    setIsTransactionModalOpen(true);
  }

  return (
    <TransactionsProvider>
      <Header openModal={handleOpenTransactionModal} />
      <Dashboard />
      <TransactionModal
        isOpen={isTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />
    </TransactionsProvider>
  );
}

export default App;
