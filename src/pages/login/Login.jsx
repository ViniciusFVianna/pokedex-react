import React, {useState} from "react";
import { Form, Grid, Image, Segment } from 'semantic-ui-react';

import { PRIMARY_DARK_COLOR, PRIMARY_COLOR, SECUNDARY_COLOR } from "../../values/Colors";
import LoginForm from "./LoginForm";

const Login = () => {
    const [login, setLogin] = useState({email:"",password:""});
    const [loading, setLoading] = useState(false);

    const [mensagem, setMensagem] = useState("");

    const [openError, setOpenError] = useState(false);

 

    return (
        <>
        <div style={{background:PRIMARY_COLOR, width:'100vw',height:'100vh',textAlign:"center",paddingTop:"30vh"}}>

        <Image centered src={`${process.env.PUBLIC_URL}/images/pokedex.png`} style={{width:"450px"}}/>
        <br/>
    <br/>
    <Grid stackable>
    <Grid.Row>
        <Grid.Column computer={6} mobile={16} tablet={16}>
               &nbsp; 
        </Grid.Column>
        <Grid.Column computer={4} mobile={16} tablet={16}>
               <Segment padded>
                  <LoginForm />
                   
               </Segment>
        </Grid.Column>
        <Grid.Column computer={6} mobile={16} tablet={16}>
               &nbsp; 
        </Grid.Column>
    </Grid.Row>
    </Grid>

        </div>
        </>
    );
}

export default Login;