import React from "react";
import "../styles/main.scss";

function FormularioBD() {
	const baseURL = "http://localhost:1337/api/sibes/";
	function postData() {
		var mboolean = document.getElementById("proxy").value;

		if (mboolean == "1") {
			var bool_5 = Boolean(true);
		}
		else {
			var bool_5 = Boolean(false);
		}

		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
			"data": {
				"titulo": document.getElementById('titulo').value,
				"imagen_url": document.getElementById('imagen_url').value,
				"base_url": document.getElementById('base_url').value,
				"proxy": bool_5,
				"tipo": document.getElementById('tipo').value,
				"categoria": document.getElementById('categoria').value,
				"descripcion": document.getElementById('descripcion').value,
				"filtros_atoz": document.getElementById('filtros_atoz').value,
				"filtros_extras": document.getElementById('filtros_extras').value,
			}
		});

		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};

		fetch(baseURL, requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));
	}

	return (
		<div className="FormularioBD">
			<div className="BaseDatos">
				<form className="Formulita">
					<br />
					<h1 className="encabezado">Formulario</h1>

					<div className="labels">
						<label className="form-label">Titulo</label>
					</div>
					<div className="input-1">
						<input type="text" className="form-control" placeholder="Titulo" id="title" name="titulo" required />
					</div>
					<div className="labels">
						<label className="form-label">Url Imagen</label>
					</div>
					<div className="input-1">
						<input type="text" className="form-control" placeholder="Url Imagen" id="imagen_url" name="imagen_url" required />
					</div>
					<div className="labels">
						<label className="form-label">Url Articulo</label>
					</div>
					<div className="input-1">
						<input type="text" className="form-control" placeholder="Url Articulo" id="base_url" name="base_url" required />
					</div>
					<div className="labels">
						<label className="form-label">Proxy</label>
					</div>
					<div className="input-1">
						<select id="proxy" name="proxy" className="form-select" defaultValue={'DEFAULT'} >
							<option value="DEFAULT" disabled>Elige una opcion ...</option>
							<option value="2">False</option>
							<option value="1">True</option>
						</select>
					</div>
					<div className="labels">
						<label className="form-label">Tipo</label>
					</div>
					<div className="input-1">
						<input type="text" className="form-control" placeholder="Tipo" id="tipo" name="tipo" required />
					</div>
					<div className="labels">
						<label className="form-label">Categoria</label>
					</div>
					<div className="input-1">
						<input type="text" className="form-control" placeholder="Categoria" id="categoria" name="categoria" required />
					</div>
					<div className="labels">
						<label className="form-label">Descripcion</label>
					</div>
					<div className="input-1">
						<textarea className="form-control" placeholder="Descripcion" type="text" id="descripcion" name="descripcion"></textarea>
					</div>
					<div className="labels">
						<label className="form-label">Filtros Atoz</label>
					</div>
					<div className="input-1">
						<input type="text" className="form-control" placeholder="Filtros Atoz" id="filtros_atoz" name="filtros_atoz" required />
					</div>
					<div className="labels">
						<label className="form-label">Filtros Extras</label>
					</div>
					<div className="input-1">
						<input type="text" className="form-control" placeholder="Filtros Extras" id="filtros_extras" name="filtros_extras" required />
					</div>
					<div className="botonUno">
						<button className="button action" onClick={postData}>
							Subir
						</button>
					</div>
					<br />
				</form>
			</div>
		</div>
	)
}
export default FormularioBD;