import { useContext } from 'react'
import Alerta from '../../comuns/Alert';
import ProdutosHomeContext from "./ProdutosHomeContext";
import CampoEntrada from '../../comuns/CampoEntrada';
import CampoSelect from '../../comuns/CampoSelect';
import CampoEntradaTextArea from '../../comuns/CampoEntradaTextArea';
import Dialogo from '../../comuns/Dialogo';
import { Col } from 'react-bootstrap';

function FormAvaliacao() {

    const { avaliacao, alerta, cadastrarAvaliacao, handleChange, exibirFormAvaliacao, setExibirFormAvaliacao } = useContext(ProdutosHomeContext);

    return (
        <Dialogo id="modalAvaliacao" titulo="Nova Avaliação"
            idform="formulario" acaoCadastrar={cadastrarAvaliacao}
            exibirForm={exibirFormAvaliacao} setExibirForm={setExibirFormAvaliacao}>
            <Alerta alerta={alerta} />
            <Col xs={12} md={12}>
                <CampoEntrada value={avaliacao.autor}
                    id="txtAutor" name="autor" label="Autor"
                    tipo="text" onchange={handleChange}
                    msgvalido="Autor OK" msginvalido="Informe o autor"
                    requerido={true} readonly={false}
                    maxCaracteres={40} />
            </Col>
            <Col xs={12} md={12}>
                <CampoEntrada value={avaliacao.email}
                    id="txtEmail" name="email" label="Email"
                    tipo="email" onchange={handleChange}
                    msgvalido="Email OK" msginvalido="Informe o email"
                    requerido={true} readonly={false}
                    maxCaracteres={40} />
            </Col>
            <Col xs={12} md={12}>
                <CampoEntradaTextArea value={avaliacao.texto}
                    id="txtTextor" name="texto" label="Texto"
                    tipo="text" onchange={handleChange}
                    msgvalido="Texto OK" msginvalido="Informe o texto"
                    requerido={true} readonly={false}
                    maxCaracteres={200} />
            </Col>
            <Col xs={12} md={12}>
                <CampoSelect value={avaliacao.nota}
                    id="txtNota" name="nota" label="Nota"
                    onchange={handleChange}
                    msgvalido="Nota OK" msginvalido="Informe a nota"
                    requerido={true}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </CampoSelect>
            </Col>

        </Dialogo>


    )
}

export default FormAvaliacao;