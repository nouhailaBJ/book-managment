import React, { useContext, useEffect, useState } from 'react'
import Title from '../Title'
import {useDispatch} from "react-redux"
import { updateUser, uploadPicture } from '../../actions/user.action'
import {useSelector} from "react-redux"

function EditProfile({userData}) {
	const [user, setUser] = useState({name: "", number: "", bio: ""})
	const [file, setFile] = useState();
	const dispatch = useDispatch()
	const handleInputChange = event => {
		const { name, value } = event.target;
		setUser({ ...user, [name]: value });
	};
	const EditProfile = (e) => {
		e.preventDefault()
		console.log(user)
		dispatch(updateUser(userData._id, user))
		if (file){
			const data = new FormData();
			data.append("name", userData.name)
			data.append("userId", userData._id)
			data.append("avatar", file)
			dispatch(uploadPicture(data, userData._id))
		}
	}
	useEffect(() => {
		setUser(userData)
	}, [userData])
	return (
		<div className="col-md-12 col-xs-12 col-sm-12 mt-5">
			<div className="profile-edit">
				<Title title="Update your Information" desc="Change your information from here" />
				<div className="clearfix"></div>
				<div >
					<div className="row">
						<div className="col-md-6 col-sm-6 col-xs-12">
							<label>Your Name </label>
							<input type="text" className="form-control margin-bottom-20" name="name" value={user.name} onChange={handleInputChange} />
						</div>
						<div className="col-md-6 col-sm-6 col-xs-12">
							<label>Contact Number <span className="color-red">*</span></label>
							<input type="number" className="form-control margin-bottom-20" name="number" value={user.number} onChange={handleInputChange}/>
						</div>
						<div className="col-md-12 col-sm-12 col-xs-12">
							<label>Your Avatar <span className="color-red">*</span></label>
							<input type="file" className="form-control margin-bottom-20 file-avatar" id="avatar" name="avatar" accept=".jpg, .jpeg, .png" onChange={(e) => setFile(e.target.files[0])}/>
						</div>
						<div className="col-md-12 col-sm-12 col-xs-12">
							<label>Bio <span className="color-red">*</span></label>
							<textarea className="form-control margin-bottom-20" rows="3" name="bio" defaultValue={user.bio} onChange={handleInputChange}></textarea>
						</div>
					</div>
					<div className="clearfix"></div>
					<div className="row">
						<div className="col-md-12">
							<button onClick={EditProfile} className="btn btn-theme btn-sm">Update My Info</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EditProfile