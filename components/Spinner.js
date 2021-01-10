
export default function Spinner({load}) {
    return load ? (
        <div className="spinner-container">
            <style jsx>{`
            .spinner-container{
                position:fixed;
                width:70px; height:70px;
                left:50%; top:50%;
                transform:translate(-50%, -50%);
            }
            `}</style>
            <i className="fa fa-spin fa-spinner fa-4x" style={{color:'var(--blue)'}}></i>
        </div>
    ) : (null)
}
