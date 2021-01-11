import fs from 'fs';
import { adminMiddleware } from './admin';
import imgsJson from '../../assets/imgs.json';

async function handler(req,res){
    const path = process.env.ROOT+'/assets/imgs.json';
    switch(req.method){
        case 'GET':
            return res.json({data: imgsJson})
        case 'POST':
            await runMiddleware(req, res, adminMiddleware);
            let newImgs = imgsJson;
            newImgs.push(req.body.toString());
            fs.writeFileSync(path, JSON.stringify(newImgs), {encoding:'utf-8'});
            return res.json({data:'ok'});
        case 'DELETE':
            await runMiddleware(req, res, adminMiddleware);
            let newImgs2 = imgsJson.filter((v,i)=> i !== Number(req.body));
            fs.writeFileSync(path, JSON.stringify(newImgs2), {encoding:'utf-8'});
            return res.json({data:'ok'});
        default:
            return res.status(405).json({data: 'Method not allowed'})
    }
}

export const config = {
    api: {
      bodyParser: {
          sizeLimit: '5mb',
      }
    },
}

export default handler;

export function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
      fn(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }
  
        return resolve(result)
      })
    })
  }