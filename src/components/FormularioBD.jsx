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
				"title": document.getElementById('title').value,
				"urlArticulo": document.getElementById('urlArticulo').value,
				"proxy": bool_5

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
						<input type="text" className="form-control" id="title" required />
					</div>
					<div className="labels">
						<label className="form-label">URL</label>
					</div>
					<div className="input-1">
						<input type="text" className="form-control" id="urlArticulo" required />
					</div>
					<div className="input-1">
						<select id="proxy" name="proxy" className="form-select" defaultValue={'DEFAULT'} >
							<option value="DEFAULT" disabled>Elige una opcion ...</option>
							<option  value="2">False</option>
							<option  value="1">True</option>
						</select>
					</div>
				</form>
				<button className="button action" onClick={postData}>
					Subir
				</button>
			</div>
		</div>
	)
}
export default FormularioBD;