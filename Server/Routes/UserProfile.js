const express = require('express');
const router = express.Router();
const User = require('../Models/UserSchema')
const errorHandler = require('../Middlewares/errorMiddleware');
const authTokenHandler = require('../Middlewares/checkAuthToken');


function createResponse(ok, message, data) {
    return {
        ok,
        message,
        data,
    };
}

router.put('/quiz', authTokenHandler, async (req, res, next) => {
    // console.log(req.body);
    try {
        const userId = req.userId;
        let user = await User.findById({_id : userId});
        if (!user) {
            return res.status(400).json(createResponse(false, 'Invalid credentials'));
        }
        const { gender, dob, goal, activityLevel} = req.body;
        user = await User.findOneAndUpdate({
                gender,
                dob,
                goal,
                activityLevel
            });
             // 22222222222222222222222222222222222222
            // user.gender = gender;
            // user.dob = dob;
            // user.goal = goal;
            // user.activityLevel = activityLevel;
            // 222222222222222222222222222222222222222
        await user.save();

        res.status(201).json(createResponse(true, 'data saved successfully', {user}));
       
    }
    catch (err) {
        next(err);
    }
})

router.use(errorHandler)

module.exports = router;
