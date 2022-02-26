import React from 'react'
import Title from '../Title'

function EditProfile() {
	return (
		<div className="col-md-12 col-xs-12 col-sm-12 mt-5">
			<div className="profile-edit">
				<Title title="Update your Information" desc="Change your information from here" />
				<div className="clearfix"></div>
				<form>
					<div className="row">
						<div className="col-md-6 col-sm-6 col-xs-12">
							<label>Your Name </label>
							<input type="text" className="form-control margin-bottom-20" />
						</div>
						<div className="col-md-6 col-sm-6 col-xs-12">
							<label>Contact Number <span className="color-red">*</span></label>
							<input type="text" className="form-control margin-bottom-20"/>
						</div>
						<div className="col-md-12 col-sm-12 col-xs-12">
							<label>Your Avatar <span className="color-red">*</span></label>
							<input type="file" className="form-control margin-bottom-20 file-avatar" />
						</div>
						<div className="col-md-12 col-sm-12 col-xs-12">
							<label>Bio <span className="color-red">*</span></label>
							<textarea className="form-control margin-bottom-20" rows="3"></textarea>
						</div>
					</div>
					<div className="clearfix"></div>
					<div className="row">
						<div className="col-md-12">
							<button type="submit" className="btn btn-theme btn-sm">Update My Info</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default EditProfile