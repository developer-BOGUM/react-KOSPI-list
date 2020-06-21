import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import StockDelete from './StockDelete';

class Stock extends React.Component {
    render() {
        return (
               <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.now}</TableCell>
                <TableCell>{this.props.fluctuat}</TableCell>
                <TableCell><StockDelete stateRefresh={this.props.stateRefresh} id={this.props.id}/></TableCell>
               </TableRow>
        );
    }
}

export default Stock;