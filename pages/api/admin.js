function handler(req,res){
    switch(req.method){
        case 'POST':
            try {  
                const admins = eval(process.env.ADMIN); 
                const body = JSON.parse(req.body);
            
                for(let i=0; i<admins.length;i++){
                    if(body.email === admins[i].email && body.password === admins[i].password){
                        return res.json({data:'ok',token: admins[i].id});
                    }
                }
                return res.status(400).json({data:'Email or Password are not correct'});
            } catch (err) {
                return res.status(400).json({data:err.message});
            }
        default:
            return res.status(405).json({data:'Method not allowed'})
    }
}

export default handler;