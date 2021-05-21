const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://admin:admin@cluster0.r1ph1.mongodb.net/search-sales?retryWrites=true&w=majority'

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection
module.exports = connection