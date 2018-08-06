const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

// Member Model Definition
const memberSchema = new Schema({
  name: {
    type: "String",
    required: true
  },
  fatherName: {
    type: "String",
    required: true
  },
  baptismName: "String",
  address: {
    street: "String",
    postCode: "Number",
    city: "String",
    country: "String"
  },
  emailAddress: {
    type: "String"
  },
  phoneNumber: {
    mobile: {
      type: "String",
      required: true
    },
    home: "String"
  },
  familyMembers: [
    {
      name: {
        type: "String",
        required: true
      },
      fatherName: {
        type: "String",
        required: true
      },
      baptismName: "String",
      relationship: {
        type: "String",
        required: true
      }
    }
  ]
});

module.exports = mongoose.model("Member", memberSchema);
