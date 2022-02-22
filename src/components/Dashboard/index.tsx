import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';
import styles from './styles.module.scss';

export function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <Summary />
      <TransactionsTable />
    </div>
  );
}
