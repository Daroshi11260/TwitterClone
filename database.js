const mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);


class Database {

    constructor() {
        this.connect()
    }

    connect() {
        mongoose.connect("mongodb+srv://admin:adminPassword@twitterclonecluster.ykiaoqt.mongodb.net/TwitterCloneDB?retryWrites=true&w=majority")
        .then(() => {
            console.log("database connection successful!");
        })
        .catch((err) => {
            console.log("database connection error" + err);
        })
    }
}

module.export = new Database();