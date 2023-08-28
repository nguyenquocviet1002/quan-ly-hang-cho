import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";


function LoginForm() {
    return (
        <form>
            <Input default label="Email" name="email"></Input>
            <Input default label="Password" name="password" type="password"></Input>
            <Button submitLogin>Đăng nhập</Button>
        </form>
    )
}

export default LoginForm;