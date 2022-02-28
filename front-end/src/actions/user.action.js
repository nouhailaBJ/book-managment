import axios from "axios"

export const GET_USER = 'GET_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_AVATAR = 'UPDATE_AVATAR'

export const getUser = (uid) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/user/${uid}`)
            dispatch({ type: GET_USER, payload: res.data })
        } catch (err) {
            return console.log(err)
        }
    }
}

export const updateUser = (uid, data) => {
    return async (dispatch) => {
        try {
            const res = await axios.put(`${process.env.REACT_APP_API_URL}/user/edit/${uid}`, data)
            dispatch({ type: UPDATE_USER, payload: data})
        } catch (err) {
            return console.log(err)
        }
    }
}

export const uploadPicture = (data, id) => {
    return async (dispatch) => {
      try {
            const res = await axios
                .post(`${process.env.REACT_APP_API_URL}/user/upload`, data)
            const res_1 = await axios
                .get(`${process.env.REACT_APP_API_URL}/user/${id}`)
            dispatch({ type: UPDATE_AVATAR, payload: res_1.data.avatar })
        } catch (err) {
            return console.log(err)
        }
    };
  };