import React, { useState, useEffect } from "react";
import "../styles/main.scss";
import FormularioBD from './FormularioBD';

function MostrarBD() {
	const [isLoaded, setIsLoaded] = useState(true);
	const [items, setItems] = useState([]);
	useEffect(() => {

		fetch("http://localhost:1337/api/sibes")
			.then((response) => response.json())
			.then((data) => {
				console.log("datos", data.data);
				if (data.data) setItems(data.data);
				setIsLoaded(false);
			})
			.catch(error => console.log("error", error))

	}, []);

	if (isLoaded == true) {
		return (
			<div className="mostrar-cargando">
				<h1>Cargando...</h1>
			</div>
		);
	} else {

		return (
			<div className="MostrarBD">
				<table className="wp-list-table widefat fixed striped table-view-list posts">
					<thead>
						<tr>
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
									<td>
										<a className="row-title"  href={item.attributes.urlArticulo} aria-label={item.attributes.title}>{item.attributes.title}</a>
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
										<button type="button" className="button action" onClick={()=>{item.id}}>Editar</button>
									</td>

								</tr>
							})

						}

					</tbody>


				</table>

			</div>
		)
	}

}
export default MostrarBD;