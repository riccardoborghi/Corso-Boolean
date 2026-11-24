import { useEffect, useState } from "react";

function ProductsPage() {
    // Stato per salvare l'array completo dei prodotti restituito dall'API
    const [products, setProducts] = useState([]);
    // Stato per gestire il caricamento iniziale
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Richiesta singola all'endpoint che restituisce tutti i prodotti
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                // Salva l'intero array nello state e termina il caricamento
                setProducts(data);
                setLoading(false);
            });
    }, []); // Array vuoto: esegue la fetch una sola volta al montaggio

    return (
        <section>
            <h1>Prodotti</h1>

            {/* Stato intermedio di caricamento */}
            {loading ? (
                <p>Caricamento...</p>
            ) : (
                <div className="products-grid">
                    {/* Itera su tutti gli elementi restituiti dall'API */}
                    {products.map((product) => (
                        <article key={product.id} className="product-card">
                            <img src={product.image} alt={product.title} />
                            <h2>{product.title}</h2>
                            <p>{product.price} €</p>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}

export default ProductsPage;