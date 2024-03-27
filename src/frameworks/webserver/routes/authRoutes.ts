import { Router } from "express";
import authController from "../../../adapters/controllers/authController";
import authRepositoriesInt from "../../../application/repositories/authRepositoryInt";

import authRepositoryImpl from "../../database/mongodb/repositories/authRepositoryImpl";
import authServiceInt from "../../../application/service/authServiceInt";
import authServiceImpl from "../../service/authServiceImpl";
import generateInt from "../../../application/service/generateInt";
import generateImpl from "../../service/generateImpl";
import otpServiceInt from "../../../application/service/otp-serviceInt";
import otpServiceImpl from "../../service/otp-serviceImpl";




const authRoutes=(router:Router)=>{

  const controller=authController(authRepositoriesInt,authRepositoryImpl,authServiceInt,authServiceImpl,generateInt,generateImpl,otpServiceInt,otpServiceImpl)

  router.route('/register')
  .post(controller.register)

router.route('/verify')
.post(controller.IsVerifyOtp)


return router

}

export default authRoutes