import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import styles from './styles.module.scss';

export function TransactionsTable() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td
                className={
                  transaction.type === 'withdraw'
                    ? styles.withdraw
                    : styles.deposit
                }
              >
                {transaction.type === 'withdraw' ? '-' : ''}
                {new Intl.NumberFormat('pt-BR', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
