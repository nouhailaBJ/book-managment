import React from "react";
import Information from "../components/Profile/Information";
import HeaderUser from "../components/Profile/HeaderUser";
import EditProfile from "../components/Profile/EditProfile";
import {useSelector} from "react-redux"

function Profile({editibale}) {
 const userData = useSelector((state) => state.userReducer)
  return (
    <section className="section-padding gray">
      <div className="container">
        <div className="row">
					<HeaderUser editibale={editibale} userData={userData} />
					{editibale ?
					(
						<EditProfile userData={userData} />
					)
					: (
						<Information userData={userData} />
					)
					}
					
        </div>
      </div>
    </section>
  );
}

export default Profile;
