import fs from 'fs';
import {runMiddleware} from './index';
import {adminMiddleware} from '../admin';

async function handler(req,res){
    const path = process.env.ROOT+'/assets/gallery/'+req.query["name"];
    switch(req.method){
        case 'GET':
            const stat = fs.statSync(path);
            res.writeHead(200, {
                'Content-Type':'image/jpeg',
                'Content-Length': stat.size
            });
            var stream = fs.createReadStream(path);
            return stream.pipe(res);
        case 'DELETE':
            await runMiddleware(req, res, adminMiddleware);
            try {
                fs.unlinkSync(path);
                return res.json({data:'ok'});
            } catch {
                res.status(400).json({data:"err"});
            }
        default:
            return res.status(405).json({data: 'Method not allowed'})
    }
}

export default handler;