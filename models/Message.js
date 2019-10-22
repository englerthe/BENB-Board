const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create an object to create, read, update and delete asset data in the MongoDB

const messageSchema = new Schema({
  message_user: {type: Schema.Types.ObjectId, ref: 'User'},
  message_title: String,
  message_text: {type: String, maxlength: 400}
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

module.exports = mongoose.model('Message', messageSchema);