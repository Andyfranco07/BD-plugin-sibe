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
	var baseURL2 = "http://localhost:1337/api/sibes/";
	const [formValue, setformValue] = useState({
		title: '',
		imagen_url: '',
		proxy: ''
	});

	function putData() {

		var mboolean = document.getElementById("proxy").value;

		if (mboolean == "1") {
			var bool_5 = Boolean(true);
		}
		else {
			var bool_5 = Boolean(false);
		}

		let id = document.getElementById('id_base').value
		baseURL2 += id;

		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
			"data": {
				"title": document.getElementById('title').value,
				"imagen_url": document.getElementById('imagen_url').value,

				"proxy": bool_5
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

	const handleChange = (event) => {
		setformValue({
			...formValue,
			[event.target.name]: event.target.value
		});
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
										<input type="hidden" className="form-control" id="id_base" defaultValue={item.id} />
										<div className="labels">
											<label className="form-label">Titulo</label>
										</div>
										<div className="input-1">
											<input type="text" className="form-control" id="title" name="title" onChange={handleChange} defaultValue={item.attributes.title} />
										</div>
										<div className="labels">
											<label className="form-label">Url Imagen</label>
										</div>
										<div className="input-1">
											<input type="text" className="form-control" id="imagen_url" name="imagen_url" onChange={handleChange} defaultValue={item.attributes.imagen_url} />
										</div>
										<div className="labels">
											<label className="form-label">Url Articulo</label>
										</div>
										<div className="input-1">
											<input type="text" className="form-control" id="urlImagen" name="urlImagen" onChange={handleChange} defaultValue={item.attributes.urlImagen} />
										</div>
										{item.attributes.proxy == true ?
											<div className="input-1">
												<select className="form-select" aria-label="Default select example">
													<option value="1">True</option>
													<option id="proxy" name="proxy" value="2">False</option>
												</select>
											</div>
											:
											<div className="input-1">
												<select  className="form-select" aria-label="Default select example">
													<option value="2">False</option>
													<option id="proxy" name="proxy" value="1">True</option>
												</select>
											</div>
										}
									</form>
									
									<button className="button action" onClick={putData}>
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