import RegisForm from "./RegisForm";
import { Link } from "react-router-dom";

function Regis() {
    return (
        <div className="form">
            <img width="250" height="150" src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="" />
            <RegisForm></RegisForm>
            <p className="formLink">
                <Link to="/login">Login</Link>
            </p>
        </div>
    )
}

export default Regis;