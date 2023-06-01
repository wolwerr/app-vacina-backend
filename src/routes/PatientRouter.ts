import { Router } from "express";
import { patientController } from "./main";

const patientRouter = Router();

patientRouter.get('/patient', patientController.list);
patientRouter.get('/patient/search', patientController.findByName);
patientRouter.get('/patient/:id', patientController.findById);
patientRouter.post('/patient', patientController.createPatient);
patientRouter.put('/patient/:id', patientController.updatePatient);
patientRouter.delete('/patient/:id', patientController.deletePatient);


export default patientRouter;