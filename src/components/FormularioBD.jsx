import React from "react";
import "../styles/main.scss";

function FormularioBD() {
	const baseURL = "http://localhost:1337/api/sibes";
	function postData() {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
			"data": {
				"title": document.getElementById('title').value,
				"urlArticulo":document.getElementById('urlArticulo').value,

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
				<h1 className="wp-heading-inline">Formulario</h1>
				<form>
					<div className="labels">
						<label className="form-label">Titulo</label>
					</div>
					<div className="input-1">
						<input type="text" className="form-control" id="title" />
					</div>
					<div className="labels">
						<label className="form-label">URL</label>
					</div>
					<div className="input-1">
						<input type="text" className="form-control" id="urlArticulo" />
					</div>
				</form>
				<button className="btn btn-primary" onClick={postData}>
						Actualizar
					</button>
			</div>
		</div>
	)
}
export default FormularioBD;