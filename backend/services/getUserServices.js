const User = require("../models/User")
exports.getUserServices = async(id)=>{
    const users = await User.findOne({_id:id});
    return users;
}