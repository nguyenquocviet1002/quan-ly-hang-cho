import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="form">
            <img width="250" height="150" src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="" />
            <LoginForm></LoginForm>
            <p className="formLink">
                <Link to="/register">Create new account</Link>
            </p>
        </div>
    )
}

export default Login;