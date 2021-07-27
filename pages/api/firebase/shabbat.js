import firebase from 'firebase/app';
import "firebase/database";

async function handler(req,res){
    switch(req.method){
        case "GET":
            const docs = await firebase.database().ref('shabbat').get();
            res.json(docs);
            break;
        case "POST":
            const ref = await firebase.database().ref('shabbat').push({
                firstName:"yudi2",
                lastName:"kahn2",
                email:"yudikahn28@gmail.com",
                phone:"05599910152"
            });
            res.json(ref);
            break;
    }
}

export default handler;