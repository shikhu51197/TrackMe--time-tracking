import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

function SubscribtionLogic({ children }) {
    const subToken = useSelector((state) => state.auth.SubToken)
    console.log(subToken, "token use selector")

    const location = useLocation();

    const from = {
        pathname: location.pathname,
    };
    if (subToken == 1000) {
        return children
    }
    else {
        return <Navigate to={'/sidebar/subscribtion'} state={from} replace />
    }
}

export default SubscribtionLogic