const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create an object to create, read, update and delete asset data in the MongoDB

const commentSchema = new Schema({
  comment_advertise: {type: Schema.Types.ObjectId, ref: 'Advertise'},
  comment_user: {type: Schema.Types.ObjectId, ref: 'User'},
  comment_text: {type: String, maxlength: 400}
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

module.exports = mongoose.model('Comment', commentSchema);