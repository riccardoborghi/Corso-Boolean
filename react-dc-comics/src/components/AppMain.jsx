import comicsArray from "../data/comics";
import ComicCard from "./ComicCard";


function AppMain() {
    return (
        <main>
            <div className="container">
                <h2>Il mio Catalogo</h2>
                <div className="comics-grid">
                    {comicsArray.map((comic) => (
                        <ComicCard
                            key={comic.id}
                            thumb={comic.thumb}
                            title={comic.title}
                        /* price={comic.price} */
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
export default AppMain;