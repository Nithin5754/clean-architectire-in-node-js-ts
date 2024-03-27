import generateImpl from "../../frameworks/service/generateImpl"




const generateInt=(service:generateImpl)=>{
 
const createOtp=(length:number)=>service.createOtp(length)

return {
  createOtp
}
}

type generateInt=ReturnType<typeof generateInt>
export default generateInt