import { useState, useEffect} from "react";
import ProdutoContext from "./ProdutoContext"
import { getProdutoPorCodigoAPI, getProdutosAPI, cadastraProdutoAPI, deleteProdutoPorCodigoAPI} from "../../../services/ProdutoServico"
import Tabela from "./Tabela";
import Formulario from "./Formulario";
import Carregando from '../../comuns/Carregando';
import { getCategoriasAPI } from "../../../services/CategoriaServico";

function Produto() {
    const [alerta, setAlerta] = useState({"status" : "", message : ""})
    const [listaObj, setListaObj] = useState([])
    const [carregando, setCarregando] = useState(true);

    const [listaCateg, setListaCateg] = useState([])

    const recuperaProdutos = async () => {
        setCarregando(true);
        setListaObj(await getProdutosAPI());
        setCarregando(false);
    }

    const recuperaCategorias = async () => {
        setListaCateg(await getCategoriasAPI());
    }


    const remover = async codigo => {
        if(window.confirm("Deseja remover este objeto?")){
            let retornoAPI = await deleteProdutoPorCodigoAPI(codigo)
            setAlerta({status : retornoAPI.status, message : retornoAPI.message})
            recuperaProdutos()
        }
    }

    useEffect(() => {
        recuperaProdutos()
        recuperaCategorias()
    },[])

    const [editar, setEditar] = useState(false);
	
    const [exibirForm, setExibirForm] = useState(false);
	
    const [objeto, setObjeto] = useState({
        codigo: "", nome: "", descricao: "", quantidade_estoque: "", valor: "", ativo: "", data_cadastro: new Date().toISOString().slice(0,10), categoria: ""
    })    

    const novoObjeto = () => {
        setEditar(false);
        setAlerta({ status: "", message: "" });
        setObjeto({
            codigo: 0,
            nome: "",
            descricao: "",
            quantidade_estoque: "",
            valor: "",
            ativo: "",
            data_cadastro: new Date().toISOString().slice(0, 10),
            categoria: ""
        });
		setExibirForm(true);
    }

    const editarObjeto = async codigo => {
        setObjeto(await getProdutoPorCodigoAPI(codigo))
        setEditar(true);
        setAlerta({ status: "", message: "" });
		setExibirForm(true);
    }

    const acaoCadastrar = async e => {
        e.preventDefault();
        const metodo = editar ? "PUT" : "POST";
        try {
            let retornoAPI = await cadastraProdutoAPI(objeto, metodo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            setObjeto(retornoAPI.objeto);
            if (!editar) {
                setEditar(true);
            }
        } catch (err) {
            console.error(err.message);
        }
        recuperaProdutos();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    return (
        <ProdutoContext.Provider value = {
            {
                alerta, listaObj, remover, objeto, editarObjeto,
                acaoCadastrar, handleChange, novoObjeto, exibirForm, setExibirForm, listaCateg
            }
        }> 
            <Carregando carregando={carregando}>
                <Tabela/>
            </Carregando>
            
            <Formulario/>
        </ProdutoContext.Provider>
    )

}

export default Produto