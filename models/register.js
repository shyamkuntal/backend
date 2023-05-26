const mongoose = require("mongoose")


const registerSchema = new mongoose.Schema({
    accountType: String,
    portfolio_strategyname: String,
    fundfees: String,
    InvestmentCategory: String,
    communication_address: String,
    country: String,
    No_of_AccountHolders: String,
    quantum_of_investment: String,
    investment_mode: String,
    Applicant_Name:String,
    Contact: String,
    Contact_OTP: String,
    fundfees: String,
    Email: String,
    Email_OTP: String,
    PAN_No: String,
    Cancelled_Cheque: String,
    Bank_Details: String,
    Bank_Name: String,
    Account_No: String,
    Account_Title: String,
    Bank_IFSC_Code: String,
    Number_of_Nominees: String,
    Nominee_Name: String,
    Nominee_PAN: String,
    Nominee_Email_Id: String,
    Nominee_Contact_No: String,
    Nominee_percentage: String,
    Investment_Experience: String,
    Investment_style: String,
    Investment_Objective: String,
    Risk_Tolerance: String,
    captcha: String,


})

const User = mongoose.model("User", registerSchema)

module.exports = User;