var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    qty: Number
}, {timestamps:true});

mongoose.model('productDb', ProductSchema);
// Validations
// MongooseSchema.path('color').required(true, 'Color cannot be blank');
// MongooseSchema.path('weight').required(true, 'Weight cannot be blank');
// MongooseSchema.path('name').required(true, 'Name cannot be blank');