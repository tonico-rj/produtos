import { Button, Card, CardContent, TextField } from '@mui/material';
import axios from 'axios';
import React from 'react';

function CategoryRegister(props) {
    
    const [name, setName] = React.useState("")
    
    function registerCategory() {
        axios.post('https://20fsqcalc6.execute-api.us-east-1.amazonaws.com/cadastro-categoria', {
            "name" : name,
        })
        .then( r => {
            alert("Categoria cadastrada com sucesso!");
            setName("");
        })
    }
    
    return (  
        <Card>
            <CardContent>
                <div>
                    {props.texto}
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{width:'70%', marginTop: '10px'}}>
                    <TextField value={name} onChange={(e=>{setName(e.target.value)})} fullWidth id="outlined-basic" label="Nome" variant="outlined" />
                    </div>
                    <div style={{width:'70%', display: 'flex', marginTop: '10px', justifyContent: 'right'}}>
                    <Button variant="contained" onClick={() => { registerCategory()}}>Salvar</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default CategoryRegister;