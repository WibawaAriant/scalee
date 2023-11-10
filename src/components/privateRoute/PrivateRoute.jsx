import { Navigate } from "react-router-dom"
import PropTypes from "prop-types"

const isUserAuthenticated = () => {
  return localStorage.getItem("token") !== null
}

const PrivateRoute = ({ children }) => {
  return isUserAuthenticated() ? <>{children} </> : <Navigate to={"/"} />
}

PrivateRoute.propTypes = {
  children: PropTypes.node,
}

export default PrivateRoute
