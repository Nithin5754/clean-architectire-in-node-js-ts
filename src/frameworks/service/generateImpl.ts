
import crypto from 'crypto'


const generateImpl = () => {
  
  let generatedOTPs = new Set();
  const createOtp=(length:number)=>{
 let otp;
 do {
   const maxValue = Math.pow(10, length) - 1;
   const randomOTP = crypto.randomInt(0, maxValue);
   otp = randomOTP.toString().padStart(length, '0');
 } while (generatedOTPs.has(otp));

 generatedOTPs.add(otp);
 return otp;
}

return {
  createOtp
}

  }


  
type generateImpl=ReturnType< typeof generateImpl>
export default generateImpl