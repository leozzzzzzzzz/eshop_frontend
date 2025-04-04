import { useState, useEffect, use } from "react";
import CategoriaContext from "./CategoriaContext"
import { getCategoriaPorCodigoAPI, getCategoriasAPI, cadastraCategoriaAPI, deleteCategoriaPorCodigoAPI} from "../../../services/CategoriaServico"
import Tabela from "./Tabela";

function Categoria() {
    const [alerta, setAlerta] = useState({"status" : "", message : ""})
    const [listaObj, setListaObj] = useState([])

    const recuperaCategorias = async () => {
        setListaObj(await getCategoriasAPI())
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

    return (
        <CategoriaContext.Provider value = {
            {
                alerta, listaObj, remover
            }
        }> 
            <Tabela/>
        </CategoriaContext.Provider>
    )

}

export default Categoria