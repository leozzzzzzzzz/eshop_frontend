import { useState, useEffect, use } from "react";
import CategoriaContext from "./CategoriaContext"
import { getCategoriaPorCodigoAPI, getCategoriasAPI, cadastraCategoriaAPI, deleteCategoriaPorCodigoAPI} from "../../../services/CategoriaServico"
import Tabela from "./Tabela";
import Formulario from "./Formulario";
import Carregando from '../../comuns/Carregando';

function Categoria() {
    const [alerta, setAlerta] = useState({"status" : "", message : ""})
    const [listaObj, setListaObj] = useState([])
    const [carregando, setCarregando] = useState(true);

    const recuperaCategorias = async () => {
        setCarregando(true);
        setListaObj(await getCategoriasAPI());
        setCarregando(false);
    }

    const remover = async codigo => {
        if(window.confirm("Deseja remover este objeto?")){
            let retornoAPI = await deleteCategoriaPorCodigoAPI(codigo)
            setAlerta({status : retornoAPI.status, message : retornoAPI.message})
            recuperaCategorias()
        }
    }

    useEffect(() => {
        recuperaCategorias()
    },[])

    const [editar, setEditar] = useState(false);
	
    const [exibirForm, setExibirForm] = useState(false);
	
    const [objeto, setObjeto] = useState({
        codigo: "", nome: "", descricao: "", sigla: ""
    })    

    const novoObjeto = () => {
        setEditar(false);
        setAlerta({ status: "", message: "" });
        setObjeto({
            codigo: 0,
            nome: ""
        });
		setExibirForm(true);
    }

    const editarObjeto = async codigo => {
        setObjeto(await getCategoriaPorCodigoAPI(codigo))
        setEditar(true);
        setAlerta({ status: "", message: "" });
		setExibirForm(true);
    }

    const acaoCadastrar = async e => {
        e.preventDefault();
        const metodo = editar ? "PUT" : "POST";
        try {
            let retornoAPI = await cadastraCategoriaAPI(objeto, metodo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            setObjeto(retornoAPI.objeto);
            if (!editar) {
                setEditar(true);
            }
        } catch (err) {
            console.error(err.message);
        }
        recuperaCategorias();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    return (
        <CategoriaContext.Provider value = {
            {
                alerta, listaObj, remover, objeto, editarObjeto,
                acaoCadastrar, handleChange, novoObjeto, exibirForm, setExibirForm
            }
        }> 
            <Carregando carregando={carregando}>
                <Tabela/>
            </Carregando>
            
            <Formulario/>
        </CategoriaContext.Provider>
    )

}

export default Categoria