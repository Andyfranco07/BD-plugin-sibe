import React, { useState, useEffect } from 'react'
import "../styles/main.scss";

const Editar = (datos) => {
	var raw = JSON.stringify({
		"data": {
			"id": 2,
			"attributes": {
				"title": "Avesitas",
				"urlArticulo": "https://www.youtube.com/watch?v=mCdA4bJAGGk",
				"urlImagen": "https://media.revistagq.com/photos/5ca5f6a77a3aec0df5496c59/master/w_1600%2Cc_limit/bob_esponja_9564.png",
				"descripcion": "probando 1234",
				"proxy": true,
				"createdAt": "2022-12-13T19:22:11.436Z",
				"updatedAt": "2022-12-16T21:46:46.540Z",
				"publishedAt": "2022-12-13T19:46:23.315Z"
			}
		},
		"meta": {}
	});

	var requestOptions = {
		method: 'PUT',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};

	const url = "http://localhost:1337/api/sibes"
	const [items, setItems] = useState([]);
	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				console.log("datos", data.data);
				if (data.data) setItems(data.data);
			})
			.catch(error => console.log("error", error))

	}, []);

	peticionPut = () => {
		fetch(url + datos.id, {
			method: 'PUT',
			body: formData
		})
			.then(response => response.json())
			.catch(error => console.error('Error:', error))
			.then(response => console.log('Success:', response));
	}
	const {form}=this.state;

	return (
		<div className="FormularioBD">

			<div className="BaseDatos">
				<h1 className="wp-heading-inline">Editar</h1>
				{
					items.map((item) => {
						if (item.id == datos.id) {
							return (
								<div>
									<form key={item.id}>
										<div className="labels">
											<label for="exampleInputEmail1" className="form-label">Titulo: {item.attributes.title}</label>
										</div>
										<div className="input-1">
											<input className="form-control" type="text" name="title" id="title" onChange={this.handleChange} value={from? formData.title : ''} />
											<input type="text" className="form-control" id="title" />
										</div>
									</form>
									<button className="btn btn-primary" onClick={() => this.peticionPut()}>
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