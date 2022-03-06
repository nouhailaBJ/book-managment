import React from 'react'
import Restaurant from '../components/Restaurants/Restaurant'
import Title from '../components/Title'
import "./Restaurants.scss"
function Restaurants() {
	return (
		<section className="section-padding error-page pattern-bgs gray ">
			<div className="container">
				<div className="row">
						<div className="col-md-9 col-xs-12 col-sm-12">
							<div className="row">
								<Title title="Restaurants" desc="The result of you research" />
								<div className="book-section">
											<Restaurant />
											<Restaurant />
											<Restaurant />
											<Restaurant />
											<Restaurant />
											<Restaurant />
								</div>
							</div>
						</div>
						<div className="col-md-3 col-xs-12 col-sm-12">
							<div className="blog-sidebar">
									<div className="widget">
										<div className="widget-heading">
												<h4 className="panel-title"><a>Categories</a></h4>
										</div>
										<div className="categories">
												<ul>
													<li> <a href=""> Fes<span>(121)</span> </a> </li>
													<li> <a href=""> Marrakech <span>(121)</span> </a> </li>
												</ul>
										</div>
									</div>
							</div>
						</div>
				</div>
			</div>
	</section>
	)
}

export default Restaurants