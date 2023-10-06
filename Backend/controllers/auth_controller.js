import User from "../models/user_model.js";
import bcrpyt from "bcryptjs";

const signUp = async (req, res) => {
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
        res.status(500).json(error.message);
    }
 
};

export default signUp