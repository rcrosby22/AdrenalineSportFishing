const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  service: { type: Schema.Types.ObjectId, ref: 'Service' },
  user: { type: Schema.Types.ObjectId, ref: 'User' }, 
  comment: { type: String, required: true },

},

  
);

const Review = mongoose.model('Review', reviewSchema)

module.exports=Review