import styles from './styles.module.scss';
import logoImg from '../../assets/logo.svg';

interface HeaderProps {
  openModal: () => void;
}

export function Header({ openModal }: HeaderProps) {
  return (
    <div className={styles.container}>
      <header>
        <img src={logoImg} alt="dtmoney logo" />
        <button
          type="button"
          className={styles.newTransactionBtn}
          onClick={openModal}
        >
          Nova Transação
        </button>
      </header>
    </div>
  );
}
