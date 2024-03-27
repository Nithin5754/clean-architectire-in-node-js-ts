import { Application, Router } from "express";
import authRoutes from "./authRoutes";






export const routes=(app:Application,router:Router)=>{
  app.use('/api/v1/auth',authRoutes(router))
}


export default routes

