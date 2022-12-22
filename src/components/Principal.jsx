import React, { useState, useEffect } from "react";
import "../styles/main.scss";
import FormularioBD from './FormularioBD';
import Editar from "./Editar";
import axios from "axios";

const baseURL = "http://localhost:1337/api/sibes";

function Principal() {

	const [items, setItems] = useState([]);
	const [datos, estableceDatos] = useState(0);
	useEffect(() => {
		axios
			.get(baseURL)
			.then(function (response) {
				setItems(response.data.data)
			})
			.catch(err => {
				alert(err.message);
			});
	}, []);

	const [vFormulario, setVFormulario] = useState(true);
	if (datos >= 1) {
		return (
			<div>
				<div className="cabecera">
					<h1 className="wp-heading-inline">Base de datos</h1>
				</div>
				<div className="botoncito3"><button className="button action" onClick={() => window.location.reload()}>Regresar</button></div>
				<Editar id={datos} />
			</div>
		)
	}
	else {
		if (vFormulario == true) {
			return (
				<div className="principal">
					<div className="cabecera">
						<h1 className="wp-heading-inline">Base de datos</h1>
					</div>
					<div className="botoncito"><button className="button action" onClick={() => setVFormulario(false)}>Subir</button></div>
					<div className="MostrarBD">
						<table className="wp-list-table widefat fixed striped table-view-list posts">
							<thead>
								<tr>
									<th scope="col" id="tags" className="manage-column column-author">id</th>
									<th scope="col" id="tags" className="manage-column column-tags">Titulo</th>
									<th scope="col" id="tags" className="manage-column column-author">Url Imagen</th>
									<th scope="col" id="tags" className="manage-column column-categories">Url Articulo</th>
									<th scope="col" id="tags" className="manage-column column-tags">Proxy</th>
									<th scope="col" id="tags" className="manage-column column-tags">Tipo</th>
									<th scope="col" id="tags" className="manage-column column-tags">Categoria</th>
									<th scope="col" id="tags" className="manage-column column-tags">Descripcion</th>
									<th scope="col" id="tags" className="manage-column column-tags">Filtro Atoz</th>
									<th scope="col" id="tags" className="manage-column column-tags">Filtro Extras</th>
									<th scope="col" id="tags" className="manage-column column-tags">Editar</th>

								</tr>
							</thead>

							<tbody id="the-list">
								{
									items.map((item) => {
										return <tr key={item.id}>
											<td scope="col" id="id" className="manage-column column-author">{item.id}</td>
											<td>
												<p className="row-title">{item.attributes.titulo}</p>
											</td>
											<td>
												<p className="row-title">{item.attributes.imagen_url}</p>
											</td>
											<td>
												<p className="row-title">{item.attributes.base_url}</p>
											</td>
											<td>
												{item.attributes.proxy == true ?
													<p className="row-title">True</p>
													: <p className="row-title">False</p>}
											</td>
											<td>
												<p className="row-title">{item.attributes.tipo}</p>
											</td>
											<td>
												<p className="row-title">{item.attributes.categoria}</p>
											</td>
											<td>
												<p className="row-title">{item.attributes.descripcion}</p>
											</td>
											<td>
												<p className="row-title">{item.attributes.filtros_atoz}</p>
											</td>
											<td>
												<p className="row-title">{item.attributes.filtros_extras}</p>
											</td>
											<td>
												<div className="Hijo">
													<button className="button action" onClick={() => estableceDatos(item.id)}>Editar</button>
												</div>

											</td>

										</tr>
									})

								}

							</tbody>
						</table>
					</div>
				</div>
			);
		}
		else {
			return (
				<div className="principal">
					<div className="cabecera">
						<h1 className="wp-heading-inline">Base de datos</h1>
					</div>
					<div className="botoncito 2"><button className="button action" onClick={() => window.location.reload()}>Regresar</button></div>
					<FormularioBD />
				</div>
			);
		}
	}
}
export default Principal;