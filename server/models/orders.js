var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema({
    customer: String,
    product: String,
    qty: Number
}, {timestamps:true});

mongoose.model('orderDb', OrderSchema);
// Validations
// MongooseSchema.path('color').required(true, 'Color cannot be blank');
// MongooseSchema.path('weight').required(true, 'Weight cannot be blank');
// MongooseSchema.path('name').required(true, 'Name cannot be blank');