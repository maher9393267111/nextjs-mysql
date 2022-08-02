import jwt from 'jsonwebtoken';

export default function authorization(req, res,next) {
    return new Promise((resolve, reject) => {
        const { authorization } = req.headers;

        if(!authorization) return res.status(401).end();

        const authSplit = authorization.split(' ');
        console.log('authSplit-------->',authSplit)
        const [authType, authToken] = [
            authSplit[0],
            authSplit[1]
        ]

        console.log(authType, authToken)
        if(authType !== 'Bearer') return res.status(401).json({ message: ' Beare type not valid' });

        return jwt.verify(authToken, process.env.JWT_SECRET, function(err, decoded) {
            if(err) return res.status(401).json({ message: 'Invalid tokennnn' });

            console.log('decoded' , decoded)
            return resolve(decoded , next());
            
        });
    });
}