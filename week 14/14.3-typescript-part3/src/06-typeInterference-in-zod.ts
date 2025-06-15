import { z } from 'zod';  
import express from "express";  


const app = express();

// Define the schema for profile update using Zod
const userProfileSchema = z.object({
  name: z.string().min(1), 
  email: z.string().email(), 
  age: z.number().min(18).optional(),  
});


// Type inference for the FinalUserSchema from the userProfileSchema
type FinalUserSchema = z.infer<typeof userProfileSchema>;                   // we can define another type of userProfileScheam in which we add the same conditions as zod but in type thing like name: stirn , password : string etc sow here we're interference the typeof z that we've have already defined earlier | hover over variable name for see the type full 



app.put("/user", (req, res) => {

  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody: FinalUserSchema = req.body;                       // using type of FinalUserSchema for req. 


  if (!success) {
    res.status(411).json({});  
    return;
  }





  res.json({
    message: "User updated"  
  });
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');  // Log when the server is ready
});