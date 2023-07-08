const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  service: { type: Schema.Types.ObjectId, ref: 'Service' },
  user: { type: Schema.Types.ObjectId, ref: 'User' }, 
  comment: { type: String, required: true },

},

  
);

const Booking = mongoose.model('Service', reviewSchema);

export default Booking