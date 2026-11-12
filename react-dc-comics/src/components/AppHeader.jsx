import dcLogo from "../assets/img/dc-logo.png";
import styles from './AppHeader.module.css';

function AppHeader() {

    const linksObjects = [
        { id: 1, text: 'Characters', url: '#' },
        { id: 2, text: 'Comics', url: '#prodotti' },
        { id: 3, text: 'Movies', url: '#about' },
        { id: 4, text: 'TV', url: '#about' },
        { id: 5, text: 'Games', url: '#about' },
        { id: 6, text: 'Collectibles', url: '#about' },
        { id: 7, text: 'Videos', url: '#about' },
        { id: 8, text: 'Fans', url: '#about' },
        { id: 9, text: 'News', url: '#about' },
        { id: 10, text: 'Shop', url: '#about' },
    ];

    const links = linksObjects.map(elemento => {
        return <li key={elemento.id}><a href={elemento.url}>{elemento.text}</a></li>
    });
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={dcLogo} alt="DC Logo" />
            </div>
            <nav className={styles.navBar}>
                <ul>
                    {links}
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;