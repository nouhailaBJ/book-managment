import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Restaurant from '../components/Restaurants/Restaurant'
import Title from '../components/Title'
import "./Restaurants.scss"
function Restaurants({title}) {
	const restaurants = useSelector((state) => state.restaurantReducer)
	const cities = useSelector((state) => state.cityReducer)

	return (
		<section className="section-padding error-page pattern-bgs gray ">
			<div className="container">
				<div className="row">
						<div className="col-md-9 col-xs-12 col-sm-12">
							<div className="row">
								<Title title={title} desc="The result of you research" />
								<div className="book-section">
									{restaurants.length > 0 && (restaurants.map((restaurant, index) =>  <Restaurant restaurant={restaurant} key={index}/> ))}
									{!restaurants.length && (<h4>There is no Restaurants In this research</h4>)}
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
													{cities.map((city, index) => (<li> <Link to={`/category/${city._id}`}> {city.name }<span></span> </Link> </li>))}
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