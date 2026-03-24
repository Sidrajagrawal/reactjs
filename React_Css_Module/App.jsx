import styles from './App.module.css'
console.log(styles);


function App() {
    return (
        <div className={styles.AppContainer}>
            <div className={styles.NavMain}>
                <div className={styles.NavLogo}>
                    <span>Logo</span>
                </div>
                <div>
                    <ul className={styles.NavUl}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Get started</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default App;