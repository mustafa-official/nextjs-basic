import mongoose from "mongoose";

export const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
        connection.on('connected', ()=>{
            console.log("Mongodb connected successfully");
        });

        connection.on('error', (error)=>{
            console.log("Mongodb connection error", error);
            process.exit(1)
        })
        
    } catch (error:any) {
        console.log(error);
    }
}