const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create an object to create, read, update and delete asset data in the MongoDB

const advertiseSchema = new Schema({
    advertise_title: String,
    advertise_type: {type: String, enum: ["offer", "search"]},
    advertise_category: Array,
    advertise_description: String,
    advertise_price: String,
    advertise_pictureUrl: String,
    advertise_owner: {type: Schema.Types.ObjectId, ref: 'User'},
    advertise_comment: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    advertise_counter: Number,
    advertise_status: {type: String, enum: ["available", "sold"]},
    advertise_message: [{type: Schema.Types.ObjectId, ref: 'Message'}],
    advertise_city: String
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

module.exports = mongoose.model('Advertise', advertiseSchema);



