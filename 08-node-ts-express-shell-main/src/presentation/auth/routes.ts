import { Router } from 'express';
import { AuthController } from './controller';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    const controller = new AuthController();
    // Definir las rutas
    // router.use('/api/todos', /*TodoRoutes.routes */ );
    router.post('/login',controller.loginUser);
    router.post('/register',controller.registerUser);
    router.get('/validate-email/:token',controller.validateUserEmail)


    return router;
  }


}

