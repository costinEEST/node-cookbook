/**
 * https://www.mongodb.com/developer/languages/javascript/mongoose-versus-nodejs-driver
 * https://mongoosejs.com/docs/api/mongoose.html#mongoose_Mongoose-connect
 * https://mongoosejs.com/docs/api/mongoose.html#mongoose_Mongoose-disconnect
 * https://subscription.packtpub.com/book/web-development/9781782168195/2
 * https://github.com/Automattic/mongoose/blob/master/docs/further_reading.md
 * */

const {
  connect,
  disconnect,
  model,
} = require("../node_modules/mongoose/index");

connect("mongodb://localhost:27017/customers", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Customer = model("Customer", {
  forename: String,
  surname: String,
});

const customer1 = new Customer({
  forename: "Cos",
  surname: "tin",
});

customer1.save().then(({ forename, surname }) => {
  console.log("Added new customer:", forename, surname);
  listCustomers();
});

function listCustomers() {
  console.log("Customers:");

  Customer.find().then((doc) => {
    doc.forEach(({ forename, surname }) => {
      console.log(`- ${forename}, ${surname}`);
      disconnect();
    });
  });
}
