import dotenv from "dotenv"

dotenv.config();

export const JWT_SECRET=process.env.JWT_SECRET;   // we need to export this as a single file in http and ws backend so we changed package.json and tsconfig too 

