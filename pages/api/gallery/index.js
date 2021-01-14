import multer from 'multer';
import { adminMiddleware } from '../admin';
import path from 'path';
import fs from 'fs';

const upload = multer({
    storage: multer.diskStorage({
        destination: process.env.ROOT+"/assets/gallery",
        filename: function(req,file,cd){
            cd(null, `${Date.now()}${path.extname(file.originalname)}`);
        }
    }),
    limits: 1000000,
});

async function handler(req,res){
    switch(req.method){
        case 'GET':
            const files = fs.readdirSync(process.env.ROOT+"/assets/gallery");
            return res.json({data: files});
        case 'POST':
            await runMiddleware(req, res, adminMiddleware);
            await runMiddleware(req, res, upload.single('img'));       
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