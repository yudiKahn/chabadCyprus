import { adminMiddleware } from '../admin';
import fs from 'fs';
import { runMiddleware } from '.';

export default async function handler(req,res){
    const path = process.env.ROOT + '/public';
    switch(req.method){
        case 'DELETE':
            await runMiddleware(req,res, adminMiddleware)
            const file = fs.readdirSync(path).find(v=> v===req.query.name);
            fs.unlinkSync(path+'/'+file);
            return res.json({data:'ok'});
        default:
            return res.status(405).json({data: 'Method not allowed'});
    }
}