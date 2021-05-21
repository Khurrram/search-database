import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Filter from './components/filter'
import {TextField, MenuItem} from '@material-ui/core'

function App() {

  const [region, setRegion] = useState('');
  const [country, setCountry] = useState('');
  const [itemType, setItemType] = useState('');
  const [orderDate, setOrderDate] = useState('');
  const [orderID, setOrderID] = useState('');
  const [shipDate, setShipDate] = useState('');
  const [unitsSold, setUnitsSold] = useState('');
  const [unitsSoldOp, setUnitsSoldOp] = useState('=');
  const [unitPrice, setUnitPrice] = useState('');
  const [unitPriceOp, setUnitPriceOp] = useState('=');
  const [unitCost, setUnitCost] = useState('');
  const [unitCostOp, setUnitCostOp] = useState('=');
  const [totalRevenue, setTotalRevenue] = useState('');
  const [totalRevenueOp, setTotalRevenueOp] = useState('=');
  const [totalCost, setTotalCost] = useState('');
  const [totalCostOp, setTotalCostOp] = useState('=');
  const [totalProfit, setTotalProfit] = useState('');
  const [totalProfitOp, setTotalProfitOp] = useState('=');
  const [orderPriority, setOrderPriority] = useState('');
  const [salesChannel, setSalesChannel] = useState('');

  return (
    <div className="App">
      <form>
        <TextField label="Region" size="small" onChange={(e) => setRegion(e.target.value)}/>
        <TextField label="Country" size="small" onChange={(e) => setCountry(e.target.value)}/>
        <TextField label="Item Type" size="small" onChange={(e) => setItemType(e.target.value)}/>
        <TextField label="Order Date" size="small" onChange={(e) => setOrderDate(e.target.value)}/>
        <TextField label="Order ID" onChange={(e) => setOrderID(e.target.value)} size="small"/>
        <TextField label="Ship Date" size="small" onChange={(e) => setShipDate(e.target.value)}/>
        {/* <TextField id="select" value={unitsSoldOp} onChange={(e) => setUnitsSoldOp(e.target.value)} select>
          <MenuItem value="=">=</MenuItem>
          <MenuItem value=">">&gt;</MenuItem>
          <MenuItem value="<">&lt;</MenuItem>
        </TextField> */}
        <TextField label="Units Sold" size="small" onChange={(e) => setUnitsSold(e.target.value)}/>

        {/* <TextField id="select" value={unitPriceOp} onChange={(e) => setUnitPriceOp(e.target.value)} select>
          <MenuItem value="=">=</MenuItem>
          <MenuItem value=">">&gt;</MenuItem>
          <MenuItem value="<">&lt;</MenuItem>
        </TextField> */}
        <TextField label="Unit Price"  size="small" onChange={(e) => setUnitPrice(e.target.value)}/>

        {/* <TextField id="select" value={unitCostOp} onChange={(e) => setUnitCostOp(e.target.value)} select>
          <MenuItem value="=">=</MenuItem>
          <MenuItem value=">">&gt;</MenuItem>
          <MenuItem value="<">&lt;</MenuItem>
        </TextField> */}
        <TextField label="Unit Cost"  size="small" onChange={(e) => setUnitCost(e.target.value)}/>

        {/* <TextField id="select" value={totalRevenueOp} onChange={(e) => setTotalRevenueOp(e.target.value)} select>
          <MenuItem value="=">=</MenuItem>
          <MenuItem value=">">&gt;</MenuItem>
          <MenuItem value="<">&lt;</MenuItem>
        </TextField> */}
        <TextField label="Total Revenue" size="small" onChange={(e) => setTotalRevenue(e.target.value)}/>

        {/* <TextField id="select" value={totalCostOp} onChange={(e) => setTotalCostOp(e.target.value)} select>
          <MenuItem value="=">=</MenuItem>
          <MenuItem value=">">&gt;</MenuItem>
          <MenuItem value="<">&lt;</MenuItem>
        </TextField> */}
        <TextField label="Total Cost" size="small" onChange={(e) => setTotalCost(e.target.value)}/>

        {/* <TextField id="select" value={totalProfitOp} onChange={(e) => setTotalProfitOp(e.target.value)} select>
          <MenuItem value="=">=</MenuItem>
          <MenuItem value=">">&gt;</MenuItem>
          <MenuItem value="<">&lt;</MenuItem>
        </TextField> */}
        <TextField label="Total Profit" size="small" onChange={(e) => setTotalProfit(e.target.value)}/>
        <TextField id="select" label="Order Priority" value={orderPriority ? orderPriority : "Order Priority"} onChange={(e) => setOrderPriority(e.target.value)} select>
          <MenuItem value=""></MenuItem>          
          <MenuItem value="C">Critical</MenuItem>
          <MenuItem value="H">High</MenuItem>
          <MenuItem value="M">Medium</MenuItem>
          <MenuItem value="L">Low</MenuItem>
        </TextField>
        <TextField id="select" label="Sales Channel" value={salesChannel ? salesChannel : "Sales Channel"} onChange={(e) => setSalesChannel(e.target.value)}select>
          <MenuItem value="Online">Online</MenuItem>
          <MenuItem value="Offline">Offline</MenuItem>
        </TextField>
      </form>

      <Filter region={region} country={country} itemType={itemType} orderDate={orderDate} orderID={orderID} shipDate={shipDate} unitsSoldOp={unitsSoldOp} unitsSold={unitsSold} unitPriceOp={unitPriceOp} unitPrice={unitPrice} 
      unitCostOp={unitCostOp} unitCost={unitCost} totalRevenueOp={totalRevenueOp} totalRevenue={totalRevenue} totalCostOp={totalCostOp} totalCost={totalCost} totalProfitOp={totalProfitOp} totalProfit={totalProfit} 
      orderPriority={orderPriority} salesChannel={salesChannel}  />
    </div>
  );
}

export default App;
