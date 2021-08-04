import { useState } from 'react';
import { connect } from 'react-redux';
import {addAlert, setAdmin, setLoading} from '../../redux/actions';
import { ImgTop, AdminLogin } from '../../components';


function index({admin, setAdmin, setLoading, addAlert}) {
    const [fields, setFields] = useState({ email:'', password:'' }); 
    const onFieldsChange = (e) => setFields({...fields, [e.target.id]: e.target.value});
    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            let resp = await fetch('/api/admin', {method:'POST', body: JSON.stringify(fields) });
            let data = await resp.json();
            setAdmin(resp.ok ? data.token : null);
        } catch (err) {
            addAlert({msg:err.message})
        } setLoading(false);
    }

    return (<>
    <ImgTop title={`Admin ${admin?'':'Login'}`}/>
    {
        admin ? (<div>
            <h1 className="text-center">היי זושא</h1>
        </div>) : <AdminLogin email={fields.email} password={fields.password} onChange={onFieldsChange} onSubmit={onSubmit}/>
    }
    </>)
}

export default connect(s=>({admin:s.admin}), {setAdmin, setLoading, addAlert})(index);