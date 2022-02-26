import React from 'react'
import Book from '../components/Books/Book'
import Title from '../components/Title'
import "./Books.scss"
function Books() {
	return (
		<section className="section-padding error-page pattern-bgs gray ">
			<div className="container">
				<div className="row">
						<div className="col-md-8 col-xs-12 col-sm-12">
							<div className="row">
								<Title title="Our Books" desc="The result of you research" />
								<div className="book-section">
											<Book />
											<Book />
											<Book />
											<Book />
											<Book />
											<Book />
											<Book />
											<Book />
								</div>
							</div>
						</div>
						<div className="col-md-4 col-xs-12 col-sm-12">
							<div className="blog-sidebar">
									<div className="widget">
										<div className="widget-heading">
												<h4 className="panel-title"><a>Categories</a></h4>
										</div>
										<div className="categories">
												<ul>
													<li> <a href=""> Computer and IT <span>(121)</span> </a> </li>
													<li> <a href=""> Animal <span>(54)</span> </a> </li>
													<li> <a href=""> Electronics<span>(313)</span> </a> </li>
													<li> <a href=""> Real Estate<span>(23)</span> </a> </li>
													<li> <a href=""> Mobile / Laptop <span>(142)</span> </a> </li>
													<li> <a href=""> Car / Bike <span>(120)</span> </a> </li>
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

export default Books