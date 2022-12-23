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
		titulo: '',
		imagen_url: '',
		base_url: '',
		proxy: '',
		tipo: '',
		categoria: '',
		descripcion: '',
		filtros_atoz: '',
		filtros_extras: '',
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
				{
					items.map((item) => {
						if (item.id == datos.id) {
							return (
								<div key={item.id}>
									<form className="Formulita">
										<br />
										<h1 className="encabezado">Editar</h1>
										<input type="hidden" className="form-control" id="id_base" defaultValue={item.id} />
										<div className="labels">
											<label className="form-label">Titulo</label>
										</div>
										<div className="input-1">
											<input type="text" className="form-control" id="titulo" name="titulo" onChange={handleChange} defaultValue={item.attributes.titulo} />
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
											<input type="text" className="form-control" id="base_url" name="base_url" onChange={handleChange} defaultValue={item.attributes.base_url} />
										</div>
										<div className="labels">
											<label className="form-label">Proxy</label>
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
												<select className="form-select" aria-label="Default select example">
													<option value="2">False</option>
													<option id="proxy" name="proxy" value="1">True</option>
												</select>
											</div>
										}
										<div className="labels">
											<label className="form-label">Tipo</label>
										</div>
										<div className="input-1">
											<input type="text" className="form-control" id="tipo" name="tipo" onChange={handleChange} defaultValue={item.attributes.tipo} />
										</div>
										<div className="labels">
											<label className="form-label">Categoria</label>
										</div>
										<div className="input-1">
											<input type="text" className="form-control" id="categoria" name="categoria" onChange={handleChange} defaultValue={item.attributes.categoria} />
										</div>
										<div className="labels">
											<label className="form-label">Descripcion</label>
										</div>
										<div className="input-1">
											<textarea className="form-control" placeholder="Descripcion" type="text" id="descripcion" name="descripcion" onChange={handleChange} defaultValue={item.attributes.descripcion}></textarea>
										</div>
										<div className="labels">
											<label className="form-label">Filtros Atoz</label>
										</div>
										<div className="input-1">
											<input type="text" className="form-control" placeholder="Filtros Atoz" id="filtros_atoz" name="filtros_atoz" onChange={handleChange} defaultValue={item.attributes.filtros_atoz} />
										</div>
										<div className="labels">
											<label className="form-label">Filtros Extras</label>
										</div>
										<div className="input-1">
											<input type="text" className="form-control" placeholder="Filtros Extras" id="filtros_extras" name="filtros_extras" onChange={handleChange} defaultValue={item.attributes.filtros_extras} />
										</div>
										<div className="botonUno">
											<button className="button action" onClick={putData}>
												Actualizar
											</button>
										</div>
										<br />
									</form>

								</div>
							)
						}
					})}
			</div>
		</div>
	)
}
export default Editar;