import fs from 'fs';
import multer from 'multer';
import { adminMiddleware } from '../admin';
import path from 'path';

var upload = multer({
    storage: multer.diskStorage({
        destination: process.env.ROOT+'/public',
        filename: function(req,file, cb){
            cb(null, `gallery_${Date.now()}${path.extname(file.originalname)}`);
        }
    }),
    limits: {
        fileSize: 10000000,
    },
});

async function handler(req,res){
    const path = process.env.ROOT+'/public';
    switch(req.method){
        case 'GET':
            const files = fs.readdirSync(path).filter(v=> /gallery_[0-9]/.test(v)  );
            return res.json({data: files})
        case 'POST':
            await runMiddleware(req, res, adminMiddleware);
            await runMiddleware(req, res, upload.single('img'))
            return res.json({data:'ok'});
        default:
            return res.status(405).json({data: 'Method not allowed'})
    }
}

export const config = {
    api: {
      bodyParser: false
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