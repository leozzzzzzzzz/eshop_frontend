import { useContext } from "react"
import ProdutoContext from "./ProdutoContext"
import Alert from "../../comuns/Alert"
import { Table, Button } from "react-bootstrap"

function Tabela() {
    const { alerta, listaObj, remover, novoObjeto, editarObjeto } = useContext(ProdutoContext)

    return (
        <div style = {{padding:'20px'}}>
            <h1>Produtos</h1>
            <Alert alerta={alerta}/>
            <Button variant="primary" onClick={()=>novoObjeto()}> <i class="bi bi-file-earmark-plus"></i> Novo</Button>
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
                            <th>
                                Descrição
                            </th>
                            <th>
                                Estoque
                            </th>
                            <th>
                                Valor
                            </th>
                            <th>
                                Data de cadastro
                            </th>
                            <th>
                                Categoria
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listaObj.map((objeto) => (
                                <tr key={objeto.codigo}>
                                    <td align="center">
                                        <Button variant="info" onClick={() => editarObjeto(objeto.codigo)}>
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
                                    <td>
                                        {objeto.descricao}
                                    </td>
                                    <td>
                                        {objeto.quantidade_estoque}
                                    </td>
                                    <td>
                                        {objeto.valor}  
                                    </td>
                                    <td>
                                        {objeto.data_cadastro}
                                    </td>   
                                    <td>
                                        {objeto.categoria_nome}
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