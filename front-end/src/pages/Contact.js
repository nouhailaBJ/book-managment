import React from "react";
import Form from "../components/contact/Form";
import Information from "../components/contact/Information";
import Title from "../components/Title";

function Contact() {
	return (
		<section className="section-padding gray">
			<Title title="Contact us" desc="If you have any question don't hesitate to ask Us"/>
			<div className="container">
				<div className="row">
					<div className="col-md-7 col-md-offset-1">
						<div className="form-grid">
							<Form />
						</div>
					</div>
					<div className="col-md-4 ">
						<Information />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
