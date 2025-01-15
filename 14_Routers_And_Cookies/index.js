const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shelter');
const dogRoutes = require('./routes/dogs');
const adminRoutes = require('./routes/admin');

// app.use((req,res,next)=>{
//     if(req.query.isAdmin){
//         next();
//     } else{
//         res.send('Not an Admin!');
//     }
// })
app.use(adminRoutes);
app.use('/', shelterRoutes);
app.use('/shelters', shelterRoutes);
app.use('/dogs', dogRoutes);

app.listen(3000,()=>console.log('Server Started...'));