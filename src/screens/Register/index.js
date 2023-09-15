import RegisForm from "./RegisForm";
import { Link } from "react-router-dom";

function Regis() {
    return (
        <div className="form">
            <div className="form__logo">
                <img width="250" height="150" src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="" />
            </div>
            <RegisForm></RegisForm>
            <p className="formLink">
                <Link to="/login">Have already an account? Login here</Link>
            </p>
        </div>
    )
}

export default Regis;