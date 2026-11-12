import comicsArray from "../data/comics";
import ComicCard from "./ComicCard";
import styles from "./AppMain.module.css";

function AppMain() {
    return (
        <main className={styles.mainSection}>
            <div className={styles.container}>
                <h2>Il mio Catalogo</h2>
                <div className={styles.cardsGrid}>
                    {comicsArray.map((comic) => (
                        <ComicCard
                            key={comic.id}
                            thumb={comic.thumb}
                            title={comic.series}
                        /* price={comic.price} */
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}

export default AppMain;