import styles from './styles.module.scss';
import incomeImg from '../../assets/incomes.svg';
import outcomeImg from '../../assets/outcomes.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { useContext } from 'react';

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const { deposits, withdraws, total } = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'withdraw') {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      } else {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );
  return (
    <div className={styles.summary}>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="incomes" />
        </header>
        <strong>
          {' '}
          {new Intl.NumberFormat('pt-BR', {
            currency: 'BRL',
            style: 'currency',
          }).format(deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="outcomes" />
        </header>
        <strong>
          {'-'}
          {new Intl.NumberFormat('pt-BR', {
            currency: 'BRL',
            style: 'currency',
          }).format(withdraws)}
        </strong>
      </div>

      <div className={styles.total}>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            currency: 'BRL',
            style: 'currency',
          }).format(total)}
        </strong>
      </div>
    </div>
  );
}
