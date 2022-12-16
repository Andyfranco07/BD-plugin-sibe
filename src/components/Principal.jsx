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
				
				<MostrarBD />
				
			</div>
			
		);
	}
	else {
		return (
			<div className="principal">
				<Cabecera />
				<button className="button action" onClick={()=>setVFormulario(true)}>Regresar</button>
				<FormularioBD/>
				
			</div>
			
		);
	}
}




export default Principal;