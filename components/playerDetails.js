import { TableRow, TableCell } from "@material-ui/core";

export default function PlayerDetails(props){
    return (
        <>
            <TableRow>
                <TableCell>{props.name}</TableCell>
                <TableCell>{props.surname}</TableCell>
                <TableCell>{props.team}</TableCell>
            </TableRow>
        </>
    )
}