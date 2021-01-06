import { useState } from 'react';
import Layout from '../../components/Layout';
import {types} from '../_app';

const AdminLoginJSX = ({email, password,onChange,onSubmit}) => 
(<div className="container" style={{display:'grid',placeContent:'center',height:'90vh'}}>
    <form style={{maxWidth:300}}>
        <h4>ADMIN LOGIN</h4>
        <div className="form-group">
            <label style={{fontSize:15,margin:0}} htmlFor="email">EMAIL</label>
            <input type="email" className="form-control my-1" id="email" onChange={onChange} value={email}/>
            <label style={{fontSize:15,margin:0}} htmlFor="password">PASSWORD</label>
            <input type="password" className="form-control my-1" id="password" onChange={onChange} value={password}/>
            <button className="btn btn-blue my-1" style={{borderRadius:10}} onClick={onSubmit}>SUBMIT</button>
        </div>
    </form>
</div>);


function index({user, setUser}) {
    const [fields, setFields] = useState({ email:'', password:'' }); 
    const onFieldsChange = (e) => setFields({...fields, [e.target.id]: e.target.value});
    const onSubmit = (e) => {
        e.preventDefault();
        fetch('/api/admin', {method:'POST', body: JSON.stringify(fields) })
        .then(res=> res.ok ? res.json().then(data=>{
            setUser({type: types.SET_ADMIN, payload: data.token})
        }): setUser({type: types.CLEAR_ADMIN }) );
    }

    return (<Layout>
    {
        user && user.admin ? (<div>
            
        </div>) : <AdminLoginJSX email={fields.email} password={fields.password} onChange={onFieldsChange} onSubmit={onSubmit}/>
    }
    </Layout>)
}

export default index;