const express = require('express');
const router = express.Router();
const Sales = require('../models/salesModel');

router.post('/api/', async (req, res) => {
    let region = req.body.region;
    let country = req.body.country;
    let itemType = req.body.itemType;
    let orderDate = req.body.orderDate;
    let orderID = req.body.orderID;
    let shipDate = req.body.shipDate;
    let orderPriority = req.body.orderPriority;
    let salesChannel = req.body.salesChannel;
    let unitsSold = req.body.unitsSold;
    let unitPrice = req.body.unitPrice;
    let unitCost = req.body.unitCost;
    let totalRevenue = req.body.totalRevenue;
    let totalCost = req.body.totalCost;
    let totalProfit = req.body.totalProfit;
    let unitsSoldOp = req.body.unitsSoldOp;
    let unitPriceOp = req.body.unitPriceOp;
    let unitCostOp = req.body.unitCostOp;
    let totalRevenueOp = req.body.totalRevenueOp;
    let totalCostOp = req.body.totalCostOp;
    let totalProfitOp = req.body.totalProfitOp;

    try {
    let rows = await Sales.find({"Region" :{ $regex : '(^'+region+')'}, "Country" :{ $regex : '(^' + country + ')'}, "itemType" : { $regex : '^(' + itemType + ')'}, "orderDate" : { $regex: '(^' + orderDate + ')'},
        "orderID" : {$regex : '(^' + orderID + ')'},
        "shipDate" : { $regex : '(^' + shipDate + ')'}, "salesChannel" : { $regex : '(^' + salesChannel + ')'}, "orderPriority" : { $regex : '(^' + orderPriority + ')'}, 
        "unitsSold" : { $regex : '(^' + unitsSold + ')'}, 
        "unitPrice" : { $regex : '(^' + unitPrice + ')'},"unitCost" : { $regex : '(^' + unitCost + ')'}, "totalRevenue" : { $regex : '(^' + totalRevenue + ')'}, 
        "totalCost" : { $regex : '(^' + totalCost + ')'}, "totalProfit" : { $regex : '(^' + totalProfit + ')'}
     }).limit(100).exec();

    res.json(rows);
    }
    catch(err) {
        console.log(err);
        res.status(500).json("Server Error");
    }
});

module.exports = router;