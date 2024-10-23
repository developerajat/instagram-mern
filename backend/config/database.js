const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect("mongodb+srv://rajatks90:v1Pc9GWy3mfjYrwV@instaclone.5c3cz.mongodb.net/?retryWrites=true&w=majority&appName=instaclone", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongoose Connected");
    }).catch((error) => {
        console.log(error);
    });
}

module.exports = connectDatabase;
