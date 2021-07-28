import Link from 'next/link';
import { connect } from "react-redux";

function Four0Four({lang}) {
    return (<>
        <div style={{minHeight:'90vh',display:'grid',placeContent:'center'}}>
            <h4>
                404&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                {lang==='he'?'דף לא נמצא':'page not found'}
            </h4>
            <Link href="/">
                <a className="mt-3 text-center" style={{color:'var(--blue)'}}>
                    {lang==='he'?'בוא/י נחזור הביתה':"LET'S GO HOME"}
                </a>
            </Link>
        </div>
    </>)
}
const mapSTP = s => ({
    lang:s.lang
})
export default connect(mapSTP)(Four0Four);