var mongoose = require('mongoose');
var CustomerSchema = new mongoose.Schema({
    name: String
}, {timestamps:true});

mongoose.model('customerDb', CustomerSchema);
// Validations
// MongooseSchema.path('color').required(true, 'Color cannot be blank');
// MongooseSchema.path('weight').required(true, 'Weight cannot be blank');
// MongooseSchema.path('name').required(true, 'Name cannot be blank');