import React from 'react';
import axios from "axios";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function CategoryList(props) {

    const [rows, setRows] = React.useState([]);
    
    React.useEffect( () => {
      axios.get("https://20fsqcalc6.execute-api.us-east-1.amazonaws.com/listar-categorias")
        .then(
          r => {
              setRows(r.data.response);
          }
        )
      ;
    }, []);

    return ( 
        <div>
            {props.texto}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Categoria</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                    <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">{row.id}</TableCell>
                        <TableCell>{row.name}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
        </div>
     )
    ;
}

export default CategoryList
