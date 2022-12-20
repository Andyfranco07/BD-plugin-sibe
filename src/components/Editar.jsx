import React, { useState, useEffect } from 'react'
import "../styles/main.scss";


const Editar = (datos) => {
	const baseURL = "http://localhost:1337/api/sibes/";
	const [items, setItems] = useState([]);
	useEffect(() => {
		fetch(baseURL)
			.then((response) => response.json())
			.then((data) => {
				console.log("datos", data.data);
				if (data.data) setItems(data.data);
			})
			.catch(error => console.log("error", error))

	}, []);
	let baseURL2 = "http://localhost:1337/api/sibes/";

	function putData() {

		let id = document.getElementById('id_base').value
		baseURL2 += id;

		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
			"data": {
				"title": document.getElementById('title').value
			}
		});

		var requestOptions = {
			method: 'PUT',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};

		fetch(baseURL2, requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));
	}
	return (
		<div className="FormularioBD">
			<div className="BaseDatos">
				<h1 className="wp-heading-inline">Editar</h1>
				{
					items.map((item) => {
						if (item.id == datos.id) {
							return (
								<div key={item.id}>
									<form >
										<input type="hidden" className="form-control" id="id_base" value={item.id} />
										<div className="labels">
											<label className="form-label">Titulo:</label>
										</div>
										<div className="input-1">
											<input type="text" className="form-control" id="title" value={item.attributes.title} />
										</div>
										<div className="input-1">
											<input type="text" className="form-control" id="urlArticulo" value={item.attributes.urlArticulo} />
										</div>
										<div className="input-1">
											<input type="text" className="form-control" id="urlImagen" value={item.attributes.urlImagen} />
										</div>
									</form>
									<button className="btn btn-primary" onClick={putData}>
										Actualizar
									</button>
								</div>
							)

						}
					})}
			</div>
		</div>
	)
}
export default Editar;