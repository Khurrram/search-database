import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, withStyles, makeStyles } from '@material-ui/core'

function Filter({region, country, itemType, orderDate, orderID, shipDate, 
  unitsSoldOp, unitsSold, unitPriceOp, unitPrice, unitCostOp, unitCost, totalRevenueOp, totalRevenue, totalCostOp, totalCost, totalProfitOp, totalProfit,  orderPriority, salesChannel}) {

  const [rows, setRows] = useState([]);
  console.log(region, salesChannel );

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  const classes = useStyles();

  useEffect(() => {
    fetch("http://localhost:3001/api/", {
      method: "POST",
      headers : {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({region:region, country:country, itemType:itemType, orderID:orderID, shipDate:shipDate, unitsSoldOp:unitsSoldOp, unitsSold:unitsSold, unitPriceOp:unitPriceOp, unitPrice:unitPrice, 
        unitCostOp:unitCostOp, unitCost:unitCost, totalRevenueOp:totalRevenueOp, totalRevenue:totalRevenue, totalCostOp:totalCostOp, totalCost:totalCost, totalProfitOp:totalProfitOp, totalProfit:totalProfit, orderPriority:orderPriority, orderDate:orderDate, salesChannel:salesChannel})
    })
      .then(res => res.json())
      .then(res => setRows(res))
      .catch(error => console.log(error));
  }, [region, country, itemType, salesChannel, orderPriority, orderDate, orderID, shipDate, unitsSoldOp, unitsSold, unitPriceOp, unitPrice, unitCostOp, unitCost, totalRevenueOp, totalRevenue, totalCostOp, totalCost, totalProfitOp, totalProfit]);

  return(
    <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell align="right">Region</StyledTableCell>
          <StyledTableCell align="right">Country</StyledTableCell>
          <StyledTableCell align="right">Item Type</StyledTableCell>
          <StyledTableCell align="right">Sales Channel</StyledTableCell>
          <StyledTableCell align="right">Order Priority</StyledTableCell>
          <StyledTableCell align="right">Order Date</StyledTableCell>
          <StyledTableCell align="right">Order ID</StyledTableCell>
          <StyledTableCell align="right">Ship Date</StyledTableCell>
          <StyledTableCell align="right">Units Sold</StyledTableCell>
          <StyledTableCell align="right">Unit Price</StyledTableCell>
          <StyledTableCell align="right">Unit Cost</StyledTableCell>
          <StyledTableCell align="right">Total Revenue</StyledTableCell>
          <StyledTableCell align="right">Total Cost</StyledTableCell>
          <StyledTableCell align="right">Total Profit</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <StyledTableRow key={row._id}>
            <StyledTableCell align="right">{row.Region}</StyledTableCell>
            <StyledTableCell align="right">{row.Country}</StyledTableCell>
            <StyledTableCell align="right">{row.itemType}</StyledTableCell>
            <StyledTableCell align="right">{row.salesChannel}</StyledTableCell>
            <StyledTableCell align="right">{row.orderPriority}</StyledTableCell>
            <StyledTableCell align="right">{row.orderDate}</StyledTableCell>
            <StyledTableCell align="right">{row.orderID}</StyledTableCell>
            <StyledTableCell align="right">{row.shipDate}</StyledTableCell>
            <StyledTableCell align="right">{row.unitsSold}</StyledTableCell>
            <StyledTableCell align="right">{row.unitPrice}</StyledTableCell>
            <StyledTableCell align="right">{row.unitCost}</StyledTableCell>
            <StyledTableCell align="right">{row.totalRevenue}</StyledTableCell>
            <StyledTableCell align="right">{row.totalCost}</StyledTableCell>
            <StyledTableCell align="right">{row.totalProfit}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  ); 
}

Filter.propTypes = {
    region: PropTypes.string, 
    country: PropTypes.string, 
    itemType: PropTypes.string, 
    salesChannel: PropTypes.string, 
    orderPriority: PropTypes.string, 
    orderDate: PropTypes.string, 
    orderID: PropTypes.number, 
    shipDate: PropTypes.string, 
    unitsSold: PropTypes.number, 
    unitPrice: PropTypes.number, 
    unitCost: PropTypes.number, 
    totalRevenue: PropTypes.number, 
    totalCost: PropTypes.number, 
    totalProfit: PropTypes.number,
    unitsSoldOp: PropTypes.string,
    unitPriceOp: PropTypes.string,
    unitCostOp: PropTypes.string,
    totalRevenueOp: PropTypes.string,
    totalCostOp: PropTypes.string,
    totalProfitOp: PropTypes.string
  };
  
  export default Filter;
  