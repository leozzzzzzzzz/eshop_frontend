import { useContext } from "react"
import CategoriaContext from "./CategoriaContext"
import Alert from "../../comuns/Alert"
import { Table, Button } from "react-bootstrap"

function Tabela() {
    const { alerta, listaObj, remover } = useContext(CategoriaContext)

    return (
        <div style = {{padding:'20px'}}>
            <h1>Categorias</h1>
            <Alert alerta={alerta}/>
            <Button variant="primary"> <i class="bi bi-file-earmark-plus"></i> Novo</Button>
            {listaObj.length === 0 && <h1>Nenhum registro encontrado</h1>}
            {
                listaObj.length >  0 && 
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th style={{textAlign : 'center'}}>
                                Ações
                            </th>
                            <th>
                                Código
                            </th>
                            <th>
                                Nome
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listaObj.map((objeto) => (
                                <tr key={objeto.codigo}>
                                    <td align="center">
                                        <Button variant="info">
                                            <i class="bi bi-pencil-square"></i> Editar
                                        </Button>
                                        <Button variant="danger" onClick={() => remover(objeto.codigo)}> 
                                            <i class="bi bi-trash-fill"></i> Excluir 
                                        </Button>
                                    </td>
                                    <td>
                                        {objeto.codigo}
                                    </td>
                                    <td>
                                        {objeto.nome}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            }
        </div>
    )
}

export default Tabela