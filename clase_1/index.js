// import 'dotenv/config';
// import express from "express";
// import mongoose from 'mongoose';
// import session from "express-session";
// import cookieParser from 'cookie-parser';
// import userRouter from "./src/routes/userRouter.js";
// import { auth } from "./auth.js";
// import  path  from 'path';

// import { fileURLToPath } from 'url';
// import path from 'path';

// Crear equivalente a __dirname
// PARA EJEMPLO 5 (__dirname) ⛔
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);



// const app = express();

// app.use(express.json());

// app.use(cookieParser());
    
// app.use(cookieParser('CoderS3cR3tCOD3'));



        

// app.use(express.static('public', options));

// EJEMPLO 1 MIDDLEWARE 🚀

// function mid1 (req,res,next){
//     req.dato1='dato uno'
//     next()
// }

// function mid2 (req,res,next){
//     req.dato2='dato dos'
//     next()
// }

// MIDDLEWARE DE REGISTRO

// const loggerMidleware = (req,res,next)=>{
//     console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
//     next()
// }


// app.use(loggerMidleware)

// app.get('/', (req,res)=>{

//     res.send('Hola mundo')

// })

// app.get('/about', (req,res)=>{

//     res.send('about us')

// })

// app.get('/ruta1',mid1, (req,res)=>{

//     res.json({
//         dato1:req.dato1
//     })

// })

// app.get('/ruta2',mid1,mid2, (req,res)=>{

//     res.json({
//         dato1:req.dato1,
//         dato2:req.dato2
//     })
// })


// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Servidor escuchando en http://localhost:${PORT}`);
// });















// EJEMPLO 2  COOKIES 🚀 

// Middleware para mostrar cookies
// app.use((req, res, next) => {
//     console.log('Cookies:', req.cookies);
//     next();
//   });
  
  // Ruta para establecer una cookie
//   app.get('/set-cookie', (req, res) => {
//     res.cookie('user', 'JohnDoe', { maxAge: 900000, httpOnly: true });
//     res.send('¡Cookie configurada!');
//   });
  
  // Ruta para leer cookies
//   app.get('/get-cookie', (req, res) => {
//     const user = req.cookies.user;
//     if (user) {
//       res.send(`Cookie encontrada: user=${user}`);
//     } else {
//       res.send('No se encontró ninguna cookie llamada "user".');
//     }
//   });
  
//   // Ruta para borrar una cookie
//   app.get('/clear-cookie', (req, res) => {
//     res.clearCookie('user');
//     res.send('Cookie eliminada.');
//   });
  
//   // Iniciar el servidor




// EJEMPLO 3 MONGODB 🚀


// mongoose.connect(process.env.MONGODB_CNN)
// .then(()=>{
//     console.log('Conexión exitosa a MongoDB');
// })
// .catch((err)=>{

//     console.log('Error al conectar con MongoDB:', err);

// })

// app.use('/api/users', userRouter)

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Servidor escuchando en http://localhost:${PORT}`);
// });





// EJEMPLO 4 COOKIES 🚀

// app.get('/setCookie', (req,res)=>{

//     res.cookie('nombreUno', 'valorUno').send('Cookie seteada')

// })

// app.get('/getCookie', (req,res)=>{
//     res.send(req.cookies.nombreUno)
// })

// app.get('/deleteCookie', (req,res)=>{

//     res.clearCookie('nombreUno').send('Cookie removida 👍')

// })



// app.get('/setSignedCookie', (req,res)=>{
//     res.cookie('SignedCookie', 'cifrada', {signed:true}).send('Cookie cifrada 👍')
// })

// app.get('/getSignedCookie', (req,res)=>{
//     res.send(req.signedCookies.SignedCookie)
// })













// EJEMPLO 5 FRONTEND 🚀

// Middleware

// const app = express();

// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
// app.use(cookieParser())

// Ruta para servir la vista HTML

// app.get('/', (req,res)=>{

//     res.sendFile(path.join(__dirname,'index.html'))

// })

// Ruta para crear una cookie

// app.post('/set-cookie', (req,res)=>{
//     const {user,email}=req.body

//     if(!user || !email){
//         return res.status(400).send({status:'error', message:'Faltan datos'})
//     }

//     res.cookie('userCookie', {user,email},)
//     res.send({
//         status:'success',
//         message:'Cookie creada'
//     })

// Ruta para obtener la cookie

// app.get('/get-cookie', (req,res)=>{
//     const cookie=req.cookies.userCookie

//     if(!cookie){
//         return res.status(400).send({status:'error', message:'No hay cookie disponible'})
//     }

//     res.send({
//         status:'success',
//         cookie
//     })

// })

// })







// EJEMPLO 6 SESSION 🚀

// Express Config
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(
//   session({
//     secret: "s3cr3t",
//     resave: true,
//     saveUninitialized: true,
//   })
// );

// app.get("/session", (req, res) => {
//   if (req.session.contador) {
//     req.session.contador++;
//     return res.json({ contador: req.session.contador });
//   }

//   req.session.contador = 1;
//   return res.json({
//     contador: req.session.contador,
//     message: "Session iniciada",
//   });
// });

// app.get("/login", (req, res) => {
//   const { username, password } = req.query;

//   if (username != "enzo" || password != "1234") {
//     return res.status(401).json({ error: "Credenciales incorrectas" });
//   }

//   req.session.user = username;
//   req.session.admin = true;
//   return res.json({ message: "Sesión iniciada" });
// });

// app.get("/admin", auth, (req, res) => {
//     return res.json({ admin: req.session.admin, data: "Información privada" });
//   });
  
//   app.get("/logout", (req, res) => {
//     req.session.destroy((error) => {
//       if (!error) return res.json({ message: "Session destruida" });
//       res.json({ error });
//     });
//   });

// app.listen(3000, () => {
//     console.log(`Server running on http://localhost:${3000}`);
  // });