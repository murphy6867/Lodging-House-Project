import User from "../models/user_model.js";
import bcrpyt from "bcryptjs";
import errorHandler from "../utils/error.js";

const signUp = async (req, res, next) => {
    const { username, email, password } = req.body;

    const hashedPassword = bcrpyt.hashSync(password, 10);
    
    const newUser = new User({ username, email, password: hashedPassword });
    
    try {
        await newUser.save();
        res.status(201).send({
            message: "User Created",
            user: newUser,
        })

    } catch (error) {
        next(error);
    }
};

export default signUp