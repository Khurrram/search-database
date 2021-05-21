const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({
    Region: String,
    Country: String,
    itemType: String,
    salesChannel: String,
    orderPriority: String,
    orderDate: String,
    orderID: String,
    shipDate: String,
    unitsSold: String,
    unitPrice: String,
    unitCost: String,
    totalRevenue: String,
    totalCost: String,
    totalProfit: String
});

// salesSchema.index({ Region: 1});

module.exports = mongoose.model('Sales', salesSchema);