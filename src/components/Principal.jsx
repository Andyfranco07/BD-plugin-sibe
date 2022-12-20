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
				<div className="botoncito"><button className="button action" onClick={() => window.location.reload()}>Regresar</button></div>
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
									<th scope="col" id="id" className="manage-column column-author">id</th>
									<th scope="col" id="title" className="manage-column column-title column-primary sortable desc">
										<a href=""><span>Título</span><span className="sorting-indicator"></span></a>
									</th>
									<th scope="col" id="URL" className="manage-column column-author">URL</th>
									<th scope="col" id="URLImagen" className="manage-column column-categories">URLImagen</th>
									<th scope="col" id="tags" className="manage-column column-tags">Descripcion</th>
									<th scope="col" id="date" className="manage-column column-date sortable asc">
										<a href="">
											<span>Fecha</span>
											<span className="sorting-indicator"></span></a>
									</th>
								</tr>
							</thead>

							<tbody id="the-list">
								{
									items.map((item) => {
										return <tr key={item.id}>
											<td scope="col" id="id" className="manage-column column-author">{item.id}</td>
											<td>
												<a className="row-title" href={item.attributes.urlArticulo} aria-label={item.attributes.title}>{item.attributes.title}</a>
											</td>
											<td>
												<a className="row-title">{item.attributes.urlArticulo}</a>
											</td>
											<td>
												<a className="row-title">{item.attributes.urlImagen}</a>
											</td>
											<td>
												<a className="row-title">{item.attributes.descripcion}</a>
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
					<div className="botoncito"><button className="button action" onClick={() => window.location.reload()}>Regresar</button></div>
					<FormularioBD />

				</div>
			);
		}
	}
}
export default Principal;