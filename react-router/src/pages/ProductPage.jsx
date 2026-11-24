import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

function ProductPage() {
    // Legge il parametro dinamico :id dalla rotta /prodotti/:id
    const { id } = useParams();

    // Stato per il singolo prodotto (null finché non arriva o se non trovato)
    const [product, setProduct] = useState(null);
    // Stato di caricamento iniziale
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Riporta loading a true quando cambia l'id nell'URL
        setLoading(true);

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                // Se la risposta HTTP non è ok (es. 404), restituisce null
                if (!response.ok) {
                    return null;
                }
                // Fake Store API su ID inesistenti può rispondere 200 con body vuoto o non JSON
                return response.text().then((text) => (text ? JSON.parse(text) : null));
            })
            .then((data) => {
                // Salva l'oggetto prodotto (oppure null se assente) e spegne loading
                setProduct(data);
                setLoading(false);
            })
            .catch(() => {
                // In caso di errore di rete evita di lasciare la pagina appesa sul caricamento
                setProduct(null);
                setLoading(false);
            });
    }, [id]); // Riesegue la fetch ogni volta che cambia :id

    // 1. Stato intermedio di caricamento
    if (loading) {
        return <p>Caricamento prodotto...</p>;
    }

    // 2. Caso prodotto non trovato o ID non valido
    if (!product || !product.id) {
        return (
            <section>
                <p>Prodotto non trovato.</p>
                <Link to="/prodotti">Torna ai prodotti</Link>
            </section>
        );
    }

    // 3. Vista del singolo prodotto
    return (
        <section className="product-detail">
            <Link to="/prodotti">Torna ai prodotti</Link>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
            <p>
                <strong>Categoria:</strong> {product.category}
            </p>
            <p>
                <strong>Prezzo:</strong> {product.price} €
            </p>
            <p>{product.description}</p>
        </section>
    );
}

export default ProductPage;