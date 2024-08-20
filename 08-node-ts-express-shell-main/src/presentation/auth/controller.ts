
import { Request,Response } from "express";

export class AuthController{
    //implementacon contructor
    constructor(){}

    registerUser=(req: Request, res: Response)=>{
        //implementacion del registro
        res.json('Registro Exitoso');

    };

    //login user
    loginUser=(req: Request, res: Response)=>{
        //implementacion del registro
        res.json('Registro Exitoso');

    };


    validateUserEmail=(req: Request, res: Response)=>{
        //implementacion del registro
        res.json('Registro Exitoso');

    };



}