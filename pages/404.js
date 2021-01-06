import Layout from "../components/Layout";
import Link from 'next/link';

export default function Four0Four({lang}) {
    return (<Layout title="404">
        <div style={{minHeight:'90vh',display:'grid',placeContent:'center'}}>
            <h4>
                404&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                {lang==='he'?'דף לא נמצא':'page not found'}
            </h4>
            <Link href="/">
                <a className="mt-3 text-center" style={{color:'var(--blue)'}}>
                    {lang==='he'?'בוא נחזור הביתה':"LET'S GO HOME"}
                </a>
            </Link>
        </div>
    </Layout>)
}
