
import nodemailer from 'nodemailer'
import config from '../../config/config';
import TempUser from '../database/mongodb/models/tempUser';



const otpServiceImpl=()=>{
const sendOtp=async(name:string,email:string,otp:string)=>{
    
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    secure: false,
    requireTLS: true,
    host: 'smtp.gmail.com',
    auth: {
      user: config.EMAIL_NODEMAILER,
      pass: config.PASSWORD_NODEMAILER
    }
  });
  let info = await transporter.sendMail({
    from: 'nithinjoji0756@gmail.com',
    to: `${email}`,
    subject: 'OTP for verification',
    html: `<h1>Hy ${name}</h1><br><p>Your OTP for the verification is <h2>${otp}</h2></p>`,
  });
  return info
}

const verifyOtp=async(otp:string,email:string)=>{ 

  const checking=await TempUser.findOne({email})

  return checking?.otp

  
  
}

return {
  sendOtp,
  verifyOtp
}

}

type otpServiceImpl=ReturnType<typeof otpServiceImpl>

export default otpServiceImpl

