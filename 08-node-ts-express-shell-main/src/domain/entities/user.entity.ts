import { CustomError } from "../errors/custom.error";

 export class UserEntity{
    constructor(
        public name: string,
        public email: string,
        public emailValidated: boolean,
        public password: string,
        public role: string,
        public img?: string,
    ){}
    static fromObject(object:{[key:string]:any}){
        const{
            id,
            _id,
            name,
            email,
            emailValidated,
            password,
            role,
            img,
        } = object;
        if(!_id && !id){
            throw CustomError.badRequest('User object must have _id or id');
        }
        if(!name) throw CustomError.badRequest('User object must have');
        if(!email) throw CustomError.badRequest('User object must have email');
        if(!password) throw CustomError.badRequest('User object must have password');
        if(emailValidated === undefined) throw CustomError.badRequest('Missing email');
        if(!role) throw CustomError.badRequest('User object must have role');

        return new UserEntity(_id || id, name, email, emailValidated, password, role,img);
   }
}