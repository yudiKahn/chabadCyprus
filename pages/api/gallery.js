import fs from 'fs';
import imgs from '../../assets/gallery.json';
import { adminMiddleware } from './admin';

function handler(req,res){
    const path = process.env.ROOT+'/assets/gallery.json';
    switch(req.method){
        case 'GET':
            return res.json({data:imgs});
        case 'POST':
            adminMiddleware(req,res, ()=>{
            let postImgs = imgs;
            postImgs.push(req.body.toString())
            fs.writeFileSync(path, JSON.stringify(postImgs));
            return res.json({data:'ok'});
            });
        case 'DELETE':
            adminMiddleware(req,res,()=>{
            const i = req.body;
            let delImgs = imgs.filter((v,index)=> index !== Number(i));
            fs.writeFileSync(path, JSON.stringify(delImgs));
            return res.json({data:'ok'});
            });
        default:
            return res.status(405).json({data: 'Method not allowed'})
    }
}

export const config = {
    api: {
      bodyParser: {
        sizeLimit: '5mb',
      },
    },
}

export default handler;