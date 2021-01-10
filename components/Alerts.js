import { types } from "../pages/_app";

export default function Alerts({alerts, dispatch}) {
    const clearAlert = (index) => dispatch({type:types.CLEAR_ALERTS, payload: index})

    return alerts.length > 0 ? (<div className="alert-container">
        <style jsx>{`
        .alert-container{
            position:fixed; width:300px;
            height: fit-content;
            z-index:99;
            top:0; left:50vw;
            transform: translateX(-50%);
        }
        `}</style>
        {
            alerts.map((v,i)=> <div key={i} className={`my-3 alert alert-${v.type} alert-dismissible fade show`} role="alert">
            <strong><i className={`fa fa-${v.type==='success'?'check-circle':'exclamation-circle'}`}></i></strong> {v.msg}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={()=>clearAlert(i)}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>)
        }
    </div>) : null;
}
