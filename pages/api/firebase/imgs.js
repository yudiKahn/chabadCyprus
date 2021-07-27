import firebase from 'firebase/app';
import "firebase/storage";

async function handler(req,res){
    switch(req.method){
        case "GET":
            const docs = await firebase.storage()
            res.json(docs);
            break;
        case "POST":
            const ref = await firebase.storage().ref('gallery').put();
            res.json(ref);
            break;
    }
}

export const config = {
    api:{
        bodyParser:{
            sizeLimit:'2mb'
        }
    }
}

export default handler;