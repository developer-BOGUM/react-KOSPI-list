import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import StockDelete from './StockDelete';
import FluctuatColor from './FluctuatColor';

class Stock extends React.Component {
    render() {
        return (
               <TableRow>
                <TableCell align="center" colSpan="1">{this.props.id}</TableCell>
                <TableCell align="left" colSpan="2">{this.props.name}</TableCell>
                <TableCell align="right" colSpan="1">{this.props.now}</TableCell>
                <FluctuatColor fluctuat={this.props.fluctuat}/>
                <TableCell align="center" colSpan="1"><StockDelete stateRefresh={this.props.stateRefresh} id={this.props.id}/></TableCell>
               </TableRow>
        );
    }
}

export default Stock;