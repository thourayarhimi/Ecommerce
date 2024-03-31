import express from 'express';
import { registerController,loginController, testController  } from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddlewares.js';

const router = express.Router();

// Définition de la route POST pour l'enregistrement des utilisateurs
router.post('/register', registerController);
router.post('/login', loginController);
 
//test routes 
   
router.get('/test',requireSignIn,isAdmin,testController);
export default router ;