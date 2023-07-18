const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  service: { type: Schema.Types.ObjectId, ref: 'Service' },
  name: { type: String, ref: 'Name' }, 
  comment: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
 

},

  
);

const Review = mongoose.model('Review', reviewSchema)

module.exports=Review