import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import PatientService from "../services/PatientService";

export default class PatientController {
  constructor(private patientService: PatientService) { }

  list = async (req: Request, res: Response) => {
    const patients = await this.patientService.list();
    res.status(StatusCodes.OK).json(patients);
  };

  findById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const patient = await this.patientService.findById(id);
    res.status(StatusCodes.OK).json(patient);
  };

  findByName = async (req: Request, res: Response) => {
    const { name } = req.query;
    const patients = await this.patientService.findByName(String(name));
    res.status(StatusCodes.OK).json(patients);
  };

  createPatient = async (req: Request, res: Response) => {
    const { name, email, password, role } = req.body;
    const patient = await this.patientService.createPatient(
      name,
      email,
      password,
      role
    );
    res.status(StatusCodes.CREATED).json(patient);
  };

  updatePatient = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const patient = await this.patientService.updatePatient(
      id,
      name,
      email,
      password
    );
    res.status(StatusCodes.OK).json(patient);
  };

  deletePatient = async (req: Request, res: Response) => {
    const { id } = req.params;
    const patient = await this.patientService.deletePatient(id);
    res.status(StatusCodes.OK).json(patient);
  };
}
