import User from "../models/userModel.js";
import jwt from "jsonwebtoken";


export const signin = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }

        if (password.length < 6) {
            return res
                .status(400)
                .json({ message: "Password must be at least 6 characters long" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = await User.create({
            name,
            email,
            password,
        });

        const token = jwt.sign(
            { id: newUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

       res.cookie("jwt", token, {
            maxAge: 7 * 24 * 60 * 60 * 1000, //7 days in milliseconds
            httpOnly: true, //cookie cannot be accessed by client side scripts(prevent XSS attacks)
            sameSite: "strict", //cookie will only be sent in a first-party context(prevent CSRF attacks)
            secure: process.env.NODE_ENV === "production" //cookie will only be sent over HTTPS in production
        });

        res.status(201).json({
            message: "User created successfully",
            user: newUser,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }

        if (user.password !== password) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.cookie("jwt", token, {
            maxAge: 7 * 24 * 60 * 60 * 1000, //7 days in milliseconds
            httpOnly: true, //cookie cannot be accessed by client side scripts(prevent XSS attacks)
            sameSite: "strict", //cookie will only be sent in a first-party context(prevent CSRF attacks)
            secure: process.env.NODE_ENV === "production" //cookie will only be sent over HTTPS in production
        });

        res.status(200).json({
            message: "Login successful",
            user,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};


export const logout = (req, res) => {
    res.clearCookie("jwt", {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
    });

    res.status(200).json({ message: "Logged out successfully" });
};
