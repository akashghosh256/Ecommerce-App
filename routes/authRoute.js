import express from 'express'
import {
    registerController, loginController, testController, forgotPasswordController
    
  } from "../controllers/authController.js";
 import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
  
// router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);




// LOGIN || POST
router.post('/login',loginController)


// test route
//http://localhost:8080/api/v1/auth/test
router.get('/test',requireSignIn,isAdmin, testController)


//video 13
//protected route  auth
router.get('/user-auth',requireSignIn, (req,res) => {
  res.status(200).send({ok:true});
});


// video 14
// forgot password || POST
router.post('/forgot-password', forgotPasswordController);



export default router;

