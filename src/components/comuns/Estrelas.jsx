function Estrelas({ nota }) {
    const estrelas = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= nota) {
            estrelas.push(<i className="bi bi-star-fill text-warning" key={i}></i>);
        } else {
            estrelas.push(<i className="bi bi-star text-secondary" key={i}></i>);
        }
    }

    return <>{estrelas}</>;
}

export default Estrelas;