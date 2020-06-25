import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';
import { 
    Paper, 
    makeStyles,
    TableContainer, 
    TableCell, 
    Table,
    TableHead,
    TableRow,
    TableBody 
} from "@material-ui/core";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    }
});

// const columns = [
//     { id: 'name', label: 'Name', minWidth: 170 },
//     { id: 'surname', label: 'Surname', minWidth: 100 },
//     { id: 'team', label: 'Team Name', minWidth: 100 }
// ];

// function createData(name, surname, team) {
//     return { name, surname, team };
// }

// const rows = [
//     createData('Tshepo', 'Mohlatlole', 'Team 1')
// ];

function Players(props) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="players table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Surname</TableCell>
                        <TableCell>Team Name</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {props.children}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Players;