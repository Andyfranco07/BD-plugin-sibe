import React, { useState} from 'react';
import "../styles/main.scss";
import FormularioBD from './FormularioBD';
import MostrarBD from "./MostrarBD";
import Cabecera from './Cabecera';



function Principal() {
	const [vFormulario, setVFormulario] = useState(true);
	if (vFormulario == true) {
		return (
			<div className="principal">
				<Cabecera/>
				<div className="botoncito"><button className="button action" onClick={()=>setVFormulario(false)}>Subir</button></div>
				<MostrarBD />
				
			</div>
			
		);
	}
	else {
		return (
			<div className="principal">
				<Cabecera />
				<div className="botoncito"><button className="button action" onClick={(FormularioBD)=>setVFormulario(true)}>Regresar</button></div>
				<FormularioBD/>
				
			</div>
			
		);
	}
}




export default Principal;