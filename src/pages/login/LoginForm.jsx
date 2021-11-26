import React, {useState} from "react";
import { Form, Grid, Image, Segment } from 'semantic-ui-react';

import { PRIMARY_DARK_COLOR, PRIMARY_COLOR, SECUNDARY_COLOR } from "../../values/Colors";

const LoginForm = () => {
    const [login, setLogin] = useState({email:"",password:""});
    const [loading, setLoading] = useState(false);

    const [mensagem, setMensagem] = useState("");

    const [openError, setOpenError] = useState(false);

 

    return (
        <>
                   <Form loading={loading} >
                    <Form.Field>
                        <Form.Input icon="user" iconPosition="left" placeholder="Usuário" onChange={(e)=>setLogin({...login,email:e.target.value})} value={login.email}/>
                    </Form.Field>
                    <Form.Field>
                        <Form.Input icon="lock" iconPosition="left" placeholder="Senha" type="password"  onChange={(e)=>setLogin({...login,password:e.target.value})} value={login.password}/>
                    </Form.Field>
                    <Form.Button
                    style={{background:PRIMARY_DARK_COLOR,color:"white"}}
                    content="Entrar"
                    textAlign="center"
                    fluid
                    />
                   </Form>
        </>
    );
}

export default LoginForm;