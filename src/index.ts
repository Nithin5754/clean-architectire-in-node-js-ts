import express, { Application, Router } from 'express'
import expressConfig from './frameworks/webserver/express';
import serverConfig from './frameworks/webserver/server';
import mongoose from 'mongoose';
import config from './config/config';
import connection from './frameworks/database/mongodb/connection';
import routes from './frameworks/webserver/routes/routes';



const app: Application = express();
const router: Router = express.Router()


expressConfig(app)   

routes(app,router)
connection(mongoose,config).connectToMongo()

serverConfig(app,config).startServer()