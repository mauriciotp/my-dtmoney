import { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/incomes.svg';
import outcomeImg from '../../assets/outcomes.svg';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { api } from '../../services/api';
import styles from './styles.module.scss';

interface TransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function TransactionModal({
  isOpen,
  onRequestClose,
}: TransactionModalProps) {
  const { createNewTransaction } = useContext(TransactionsContext);
  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createNewTransaction({
      type,
      title,
      amount,
      category,
    });

    setType('deposit');
    setTitle('');
    setAmount(0);
    setCategory('');
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modalOverlay"
      className="modalContent"
    >
      <form onSubmit={handleCreateNewTransaction}>
        <h1 className={styles.title}>Cadastrar transação</h1>
        <button className="modalCloseBtn" onClick={onRequestClose}>
          <img src={closeImg} alt="Fechar Modal" />
        </button>
        <input
          type="text"
          placeholder="Nome"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={({ target }) => setAmount(Number(target.value))}
        />
        <div className={styles.transactionTypes}>
          <div
            className={type === 'deposit' ? styles.depositBg : ''}
            onClick={() => setType('deposit')}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </div>
          <div
            className={type === 'withdraw' ? styles.withdrawBg : ''}
            onClick={() => setType('withdraw')}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </div>
        </div>
        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={({ target }) => setCategory(target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </Modal>
  );
}
