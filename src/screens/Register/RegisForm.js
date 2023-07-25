import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";


function RegisForm() {
    return (
        <form>
            <Input default label="Email" name="email"></Input>
            <Input default label="Password" name="password" type="password"></Input>
            <Input default label="Confirm Password" name="password" type="password"></Input>
            <Button submit>Đăng ký</Button>
        </form>
    )
}

export default RegisForm;