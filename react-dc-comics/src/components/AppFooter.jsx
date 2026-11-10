
function AppFooter() {

    const pastificioLinksObj = [
        { label: "Il Pastificio", href: "#" },
        { label: "Grano", href: "#" },
    ];

    const productsLinksObj = [
        { label: "Le classiche", href: "#" },
        { label: "Le Integrali", href: "#" },
    ];

    const pastificioLinks = pastificioLinksObj.map((link, index) => (
        <li key={index}>
            <a href={link.href}>{link.label}</a>
        </li>
    ));

    const productsLinks = productsLinksObj.map((link, index) => (
        <li key={index}>
            <a href={link.href}>{link.label}</a>
        </li>
    ));

    return (
        <footer className="container">
            <nav className="footer-nav">
                <div className="footer-col">
                </div>
                <div className="footer-col">
                    <div>
                        <h4>Pastificio</h4>
                        <ul>{pastificioLinks}</ul>
                    </div>
                </div>
                <div className="footer-col">
                    <div>
                        <h4>Prodotti</h4>
                        <ul>{productsLinks}</ul>
                    </div>
                </div>
            </nav>
        </footer>
    )
}

export default AppFooter;