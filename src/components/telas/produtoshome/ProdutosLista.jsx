import { useContext } from "react";
import { Row, Col, Card } from "react-bootstrap";
import ProdutosHomeContext from "./ProdutosHomeContext";
import { formatoMoeda } from "../../comuns/Uteis";

function ProdutosLista() {

    const { produtos, exibirDetalhesProduto } = useContext(ProdutosHomeContext);

    return (
        <Row>
            {produtos.length > 0 && (
                produtos.map(objeto => (
                    <Col sm={3} key={objeto.id}>
                        <Card className="mb-3 text-center">
                            <Card.Header>{objeto.nome}</Card.Header>
                            <Card.Body>
                                <Card.Title>{objeto.nome}</Card.Title>
                                <Card.Text>{objeto.descricao}</Card.Text>
                                <Card.Text>
                                    <small className="text-muted">Preço: {formatoMoeda(objeto.valor)}</small>
                                </Card.Text>
                                <Card.Text>
                                    <small className="text-muted">Categoria: {objeto.categoria_nome}</small>
                                </Card.Text>
                                <Card.Text>
                                    <small className="text-muted">Estoque: {objeto.quantidade_estoque}</small>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                <button type="button" className="btn" onClick={() => exibirDetalhesProduto(objeto)}>Avaliações do produto</button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))
            )}
        </Row>
    );
}

export default ProdutosLista;