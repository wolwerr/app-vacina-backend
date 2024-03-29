import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import errorHandler from './middlewares/error';
import userRouter from './routes/UserRouter';
import patientRouter from './routes/PatientRouter';
import doctorRouter from './routes/DoctorRouter';
import loginRouter from './routes/LoginRouter';
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "../swagger.json";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(userRouter);
app.use(patientRouter);
app.use(doctorRouter);
app.use(loginRouter);

app.use(errorHandler);

export default app;