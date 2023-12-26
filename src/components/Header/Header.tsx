import styles from './Header.module.css';
import todoRocket from '../../assets/rocket.svg';
function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={todoRocket} alt="logo" />
                to<span>do</span>
            </div>
        </header>
    );
}

export default Header;