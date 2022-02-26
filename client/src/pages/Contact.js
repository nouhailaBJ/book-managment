import React from "react";
import Title from "../components/Title";

function Contact() {
	return (
		<section className="section-padding gray">
			<Title title="Contact us" desc="If you have any question don't hesitate to ask Us"/>
			<div className="container">
				<div className="row">
					<div className="col-md-7 col-md-offset-1">
						<div className="form-grid">
							<form>
								<div className="form-group mt-2">
									<label>Subject</label>
									<input
										placeholder="Your Subject"
										className="form-control"
										type="text"
									/>
								</div>
								<div className="form-group  mt-4">
									<label>Email</label>
									<input
										placeholder="Your Email"
										className="form-control"
										type="email"
									/>
								</div>
								<div className="form-group  mt-4">
									<label>Message</label>
									<textarea
										placeholder="Your Message"
										className="form-control"
									></textarea>
								</div>
								<button className="btn btn-theme btn-lg btn-block  mt-4">
									Send your message
								</button>
							</form>
						</div>
					</div>
					<div className="col-md-4 ">
						<div className="contactInfo  mt-4">
							<div className="singleContadds">
								<i className="fa fa-map-marker"></i>
								<p>Model Town Link Road Lahore, 60 Street. Pakistan 54770</p>
							</div>
							<div className="singleContadds phone">
								<i className="fa fa-phone"></i>
								<p>
									0123 456 78 90 - <span>(Office)</span>
								</p>
								<p>
								0123 456 78 90 - <span>(Mobile)</span>
								</p>
							</div>
							<div className="singleContadds">
								<i className="fa fa-envelope"></i>
								<p>
									contact@scriptsbundle.com
								</p>
								<p>
									contact@scriptsbundle.com
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
