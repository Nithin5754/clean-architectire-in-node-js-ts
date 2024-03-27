import otpServiceImpl from "../../frameworks/service/otp-serviceImpl"






const otpServiceInt=(service:otpServiceImpl)=>{


  const sendOtp=(name:string,email:string,otp:string)=>service.sendOtp(name,email,otp)
 
  const verifyOtp=(otp:string,email:string)=>service.verifyOtp(otp,email)


  return{
    sendOtp,
    verifyOtp
  }

}

type otpServiceInt=ReturnType<typeof otpServiceInt>
export default otpServiceInt

