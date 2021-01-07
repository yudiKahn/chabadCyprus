import fs from 'fs';
import shabbatJson from '../../assets/shabbat.json';
import { adminMiddleware } from './admin';

function handler(req,res){
    const path = process.env.ROOT+'/assets/shabbat.json';
    switch(req.method){
        case 'GET':
            adminMiddleware(req,res, ()=>{
               return res.json({data:shabbatJson});
            });
        case 'POST':
            const {shabbat, night, day, email, phone, name, donation} = JSON.parse(req.body);
            if(shabbat && (Number(night)>0 || Number(day)>0) && email && phone && name && Number(donation) >= 0){
                let newShabbat = shabbatJson;
                newShabbat.data.push({shabbat, night, day, email, phone, name, donation});
                fs.writeFileSync(path, JSON.stringify(newShabbat), {encoding:'utf-8'});
                return res.json({data:'ok'});
            }
            return res.status(400).json({data:'Bad Request, Empty fields'});
        default:
            return res.status(405).json({data: 'Method not allowed'})
    }
}

export default handler;