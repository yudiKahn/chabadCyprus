import { connect } from "react-redux";
import {clearAlert} from '../redux/actions';


function Alerts({alerts, clearAlert,lang}) {

    return alerts.length > 0 ? (<div className="alert-container">
        <style jsx>{`
        .alert-container{
            position:fixed; 
            width:100vw;
            height: 100vh;
            background-color:var(--bluetrans);
            z-index:99;
            top:0; left:0;
        }
        .alert{
          width:300px;    
          left:50%;
          position:relative;
          transform:translateX(-50%);
        }
        .alert.info{
          width:90vw;
          height:fit-content;
          max-height:50vh;
          overflow-y:auto;
        }
        `}</style>
        {
            alerts.map((v,i)=> 
            <div key={i} className={`my-3 alert alert-${v.type||'warning'} ${v.isInfo?'info':''} alert-dismissible fade show`} role="alert" style={{direction:lang==='he'?'rtl':'ltr'}}>
              <strong>
                <i className={`fa fa-${v.type==='success'?'check-circle':'exclamation-circle'}`}></i>
              </strong> 
              &nbsp;{v.msg}
              <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={()=>clearAlert(i)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>)
        }
    </div>) : null;
}

const mapSTP = s => ({
  alerts:s.alerts,
  lang:s.lang
});
export default connect(mapSTP, {clearAlert})(Alerts);
