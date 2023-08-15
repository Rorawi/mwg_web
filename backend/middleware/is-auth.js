const jwt = require('jsonwebtoken');

// ...

// Generate a token
const token = jwt.sign({ userId: user.id }, 'secretKey', { expiresIn: '1h' });

// Send the token as a response
res.json({ token });


// const jwt = require('jsonwebtoken')

// const isAuth=(req,res,next)=> {
//     try {
//         // const authorizationHeader = req.get('Authorization')
//         const authorizationHeader = req.headers.authorization
//     if(!authorizationHeader) {
//         throw new Error('Unauthenticated')

//     }
//     const token = authorizationHeader.split('')[1];
//     const decodedToken = jwt.verify(token,'supersecretkeythatcannotbeeasilyguessed')

//     if(!decodedToken) {
//         throw new Error('Unauthorized')}
//     next();
//     } catch (error) {
//         console.log(error);
//         res.json({message: error.message})
//     }
// }
// module.exports = isAuth;