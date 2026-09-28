import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'

export const connectDB = async () => {
 try {
    const connectioInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`,
    );
     console.log(`DB connected!! ${connectioInstance.connection.host}`);
     
 } catch (error) {
     console.error("Database connection error", error)
     process.exit(1)
 }   
}
export default connectDB