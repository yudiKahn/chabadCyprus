
export default function Alerts({state:{alerts}}) {
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
            alerts.map((v,i)=> <div key={i} className="my-3 alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Warning !</strong> {v}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>)
        }
    </div>) : null;
}
