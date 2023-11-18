import React from 'react';
import axios from "axios";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function ProductList (props) {

    const [rows, setRows] = React.useState([]);
    
    React.useEffect( () => {
      axios.get("https://20fsqcalc6.execute-api.us-east-1.amazonaws.com/listar-produtos")
        .then(
          r => {
              //console.log('response', r.data.response);
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
              <TableCell>Produto</TableCell>
              <TableCell align="right">Preço</TableCell>
              <TableCell align="right">Categoria</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell align="right">R$ {row.price}</TableCell>
                <TableCell align="right">{row.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    );
}

export default ProductList;