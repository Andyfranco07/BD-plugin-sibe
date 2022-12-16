import React from "react";
import "../styles/main.scss";

function FormularioBD() {
	return (
		<div className="FormularioBD">
			<div className="BaseDatos">
				<h1 className="wp-heading-inline">Formulario</h1>
				<form>
					<div className="labels">
						<label for="exampleInputEmail1" className="form-label">Titulo</label>
					</div>
					<div className="input-1">
						<input type="text" className="form-control" id="TituloArticulo" />
					</div>
					<div className="labels">
						<label for="exampleInputEmail1" className="form-label">URL</label>
					</div>
					<div className="input-1">
						<input type="text" className="form-control" id="URLArticulo" />
					</div>
					<div className="labels">
						<label for="Seccion" className="form-label">Tipo:</label>
					</div>
					<select className="form-select"  aria-label="Default select example">
						<option selected>Selecciona un tipo</option>
						<option value="1">Base de Datos</option>
						<option value="2">Revista</option>
					</select>
					<div className="labels">
						<label for="SeccionCategoria" className="form-label">Categoria</label>
					</div>
					<select className="form-select" aria-label="Default select example">
						<option selected>Selecciona una categoria</option>
						<option value="1">Libre</option>
						<option value="2">Suscrito</option>
					</select>
					<div className="labels">
						<label for="exampleInputEmail1" className="form-label">URL Imagen</label>
					</div>
					<div className="input-1">
						<input type="text" className="form-control" id="URLArticulo" />
					</div>
					<div className="labels">
						<label for="SeccionCategoria" className="form-label">Proxy</label>
					</div>
					<div className="form-check form-switch">
						<input className="form-check-input" type="checkbox" role="switch" id="checkProxy" />
						<label className="form-check-label" for="flexSwitchCheckDefault">Activar</label>
					</div>
					<div className="labels">
						<label for="exampleInputEmail1" className="form-label">Descripcion:</label>

					</div>
					<div className="form-floating">
						<textarea className="form-control" placeholder="Descripcion de Revistas/Base de Datos" id="floatingTextarea"></textarea>
					</div>
					<button type="submit" className="button action">Subir</button>
				</form>
			</div>
		</div>
	)
}
export default FormularioBD;