import fs from 'fs';
import multer from 'multer';
import { adminMiddleware } from '../admin';
import path from 'path';

var upload = multer({
    storage: multer.diskStorage({
        destination: process.env.ROOT+'/public/imgs',
        filename: function(req,file, cb){
            cb(null, Date.now() + path.extname(file.originalname));
        }
    }),
    limits: {
        fileSize: 10000000,
    },
});

async function handler(req,res){
    const path = process.env.ROOT+'/public/imgs';
    switch(req.method){
        case 'GET':
            const files = fs.readdirSync(path);
            return res.json({data: files.map(v=> `/imgs/${v}`)})
        case 'POST':
            await adminMiddleware(req,res, async()=>{
                await runMiddleware(req, res, upload.single('img'));
                return res.json({data:'ok'});
            });
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

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
      fn(req, res, (result) => {
          console.log(result)
        if (result instanceof Error) {
          return reject(result)
        }
  
        return resolve(result)
      })
    })
  }