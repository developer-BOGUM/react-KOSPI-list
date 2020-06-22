import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import FluctuatColor from './FluctuatColor';
import MyStockAdd from './MyStockAdd';

class Stock extends React.Component {
    render() {
        return (
               <TableRow>
                <TableCell align="center" colSpan="1">{this.props.codekey}</TableCell>
                <TableCell align="left" colSpan="2">{this.props.name}</TableCell>
                <TableCell align="right" colSpan="1">{this.props.now}</TableCell>
                <FluctuatColor fluctuat={this.props.fluctuat}/>
                <MyStockAdd stateRefresh={this.props.stateRefresh} codekey={this.props.codekey} myattention={this.props.myattention}/>
               </TableRow>
        );
    }
}

export default Stock;