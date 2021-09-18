import React from 'react'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'

import "../css/eachUserList.css"

const IndividualSearchListUsers:React.FC<any> = ({user}) => {
    const history=useHistory()
    const dispatch=useDispatch()

    const handelGoToProfile=()=>{
        history.push(`/profile/${user._id}`)
        dispatch({type:"CLOSE_SEARCH_MODAL"})
        dispatch({type:"RESET_SEARCH"})

    }
    return (
        <div onClick={handelGoToProfile} className="each_user" >
            {user.username}
        </div>
    )
}

export default IndividualSearchListUsers
