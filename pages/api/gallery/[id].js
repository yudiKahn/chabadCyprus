import { adminMiddleware } from '../admin';
import fs from 'fs';

export default function handler(req,res){
    const path = process.env.ROOT + '/public/imgs';
    switch(req.method){
        case 'DELETE':
            adminMiddleware(req,res,()=>{
                const file = fs.readdirSync(path)[Number(req.query.id)];
                fs.unlinkSync(path+'/'+file);
                return res.json({data:'ok'});
            });
        default:
            return res.status(405).json({data: 'Method not allowed'});
    }
}