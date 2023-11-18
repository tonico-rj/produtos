import { Button, Card, CardContent, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import React from 'react';

function ProductRegister(props) {

    const [name, setName] = React.useState("")
    const [price, setPrice] = React.useState("")
    const [category, setCategory] = React.useState("")
    const [categories, setCategories] = React.useState([])
    
    React.useEffect( () => {
        axios.get("https://20fsqcalc6.execute-api.us-east-1.amazonaws.com/listar-categorias")
        .then(
          r => {
              setCategories( r.data.response);
          }
        )
      ;
    }, []);

    function registerProduct() {
        axios.post('https://20fsqcalc6.execute-api.us-east-1.amazonaws.com/cadastro-produto', {
            "name" : name,
            "price" : price,
            "category" : category
        })
        .then( r => {
            alert("Produto cadastrado com sucesso!");

            setName("");
            setPrice("");
            setCategory("");
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
                    <div style={{width:'70%', marginTop: '10px'}}>
                    <TextField value={price} onChange={(e=>{setPrice(e.target.value)})} fullWidth id="outlined-basic" label="Preço" variant="outlined" />
                    </div>
                    <div style={{width:'70%', marginTop: '10px'}}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            label="Categoria"
                            onChange={(e) => {setCategory(e.target.value)}}
                        >
                            {
                                categories.map( c => {
                                    return <MenuItem value={c.id} key={c.id}>{c.name}</MenuItem>        
                                })
                            }
                        </Select>
                    </FormControl>

                    </div>
                    <div style={{width:'70%', display: 'flex', marginTop: '10px', justifyContent: 'right'}}>
                    <Button variant="contained" onClick={() => { registerProduct()}}>Salvar</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default ProductRegister;