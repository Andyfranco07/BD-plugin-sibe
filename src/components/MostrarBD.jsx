import React, { useState, useEffect } from "react";
import "../styles/main.scss";

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
							<td id="cb" className="manage-column column-cb check-column">
								<label className="screen-reader-text" >
									Seleccionar todo</label><input id="cb-select-all-1" type="checkbox" />
							</td>
							<th scope="col" id="title" className="manage-column column-title column-primary sortable desc">
								<a href="http://localhost/wordpress/wp-admin/edit.php?orderby=title&amp;order=asc"><span>Título</span><span className="sorting-indicator"></span></a>
							</th>
							<th scope="col" id="author" className="manage-column column-author">Autor</th>
							<th scope="col" id="categories" className="manage-column column-categories">Categorías</th>
							<th scope="col" id="tags" className="manage-column column-tags">Etiquetas</th>
							<th scope="col" id="comments" className="manage-column column-comments num sortable desc">
								<a href="http://localhost/wordpress/wp-admin/edit.php?orderby=comment_count&amp;order=asc">
									<span>
										<span className="vers comment-grey-bubble" title="Comentarios" aria-hidden="true"></span>
										<span className="screen-reader-text">Comentarios</span></span>
									<span className="sorting-indicator"></span>
								</a></th>
							<th scope="col" id="date" className="manage-column column-date sortable asc">
								<a href="http://localhost/wordpress/wp-admin/edit.php?orderby=date&amp;order=desc">
									<span>Fecha</span>
									<span className="sorting-indicator"></span></a>
							</th>
						</tr>
					</thead>

					<tbody id="the-list">
						{
							items.map((item) => {
								return <tr>
									
									<td>
										<a class="row-title" key={item.id} href={item.attributes.urlArticulo} aria-label="«Página de ejemplo» (Editar)">{item.attributes.title}</a>
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