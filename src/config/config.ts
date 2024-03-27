import dotenv from 'dotenv'


dotenv.config()

const config={
  port:process.env.PORT||3000,
  mongo:{
    uri:process.env.MONGO_URL as string
  },
  EMAIL_NODEMAILER:process.env.EMAIL_NODEMAIL as string,
 
  PASSWORD_NODEMAILER:process.env.PASSWORD_NODEMAIL as string
}
 


export type ConfigType=typeof config

export default config