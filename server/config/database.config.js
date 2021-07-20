const mongoose = require('mongoose'),
    uri = `mongodb://localhost/${process.env.DB_NAME}`;

const connectDB = () => {
    mongoose.connect(uri,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify: false
    })
        .then(res => console.log("Report to the bridge at once."))
        .catch(err => console.log("I can't beam you up.", err))
}

module.exports = connectDB;