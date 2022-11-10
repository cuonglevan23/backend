const mongoose = require('mongoose');

async function connect() {
  try{
     await mongoose.connect('monogodb://localhost:27017/EnvironmentGreen', {
      useNewUrlParser: true,
      useUnifiedTopology: true
     });
     console.log('Connect successfully!!!');
  } catch (error) {
    console.log('Connect failure!!!');
  }
}

module.exports = { connect };