const User = require("../models/register")


exports.registerUser = async(req, res) => {

    try {
        const user = await new User(req.body);

        await user.save()

        res.status(200).json({
            success: true,
            user,
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).send('Error in saving Data')
    }
}
