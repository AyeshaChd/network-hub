const mongoose = require('mongoose');

const dns = require('node:dns');
dns.setServers(['8.8.8.8', '1.1.1.1']); // Use Google and Cloudflare DNS
const connectDB = async ()=>{
  mongoose.connect("mongodb+srv://ayeshakanwal944_db_user:ew0IItHfzUkulDQn@ayeshadb.wufzpsa.mongodb.net/devTinder")
};  
module.exports={connectDB}  