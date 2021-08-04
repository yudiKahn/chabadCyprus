import React from 'react'

const AdminLogin = ({email, password,onChange,onSubmit}) => (<div className="container" style={{display:'grid',placeContent:'center',height:'90vh'}}>
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
</div>)

export default AdminLogin
