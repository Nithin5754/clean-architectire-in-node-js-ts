

import express, { Application } from 'express'
import morgan from 'morgan'
import mongoSanitize from 'express-mongo-sanitize'
import helmet from "helmet";


export default function expressConfig(app:Application) {
  
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  
  app.use(helmet({ xssFilter: true }))
  app.use(mongoSanitize())
}