const mongoose = require('mongoose');
const validate = require('mongoose-validator');

const urlValidate = validate({
  validator: 'matches',
  arguments: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/,
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: urlValidate,
  },
});

module.exports = mongoose.model('user', userSchema);
