import { connectDb } from "@/Database/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/Models/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const POST = async (request: NextRequest) => {
  try {
    await connectDb();
    const userInfo = await request.json();
    console.log("userInfo line 6", userInfo);
    const { name, email, password } = userInfo;
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({ message: "User already exists", status: 400 });
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    return NextResponse.json(userInfo);
  } catch (error: any) {
    return NextResponse.json({ message: error.message, status: 500 });
  }
};
