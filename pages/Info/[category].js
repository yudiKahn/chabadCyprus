import React from 'react'
import {useRouter} from 'next/router';
import { ImgTop, Card } from '../../components';
import { connect } from 'react-redux';
import {Info as text, infoCateg} from '../../assets/text';
import Link from 'next/link';

function Category({lang}) {
    const router = useRouter();
    const catEn = router.query.category;

    return (<>
        <ImgTop title={`${{en:"Info",he:"מידע"}[lang]}`}/>
        {/* <div className="px-5 py-4 d-flex flex-row-reverse">
            <Link href="/Info">
                <a className="fas fa-arrow-right fa-2x" style={{textDecoration:'none'}}></a>
            </Link>
        </div> */}
        <div className="row mx-0"  style={{placeContent:'center'}}>
            { 
            text.map((v)=> (Array.from(v.categories).find(v=>v.l == catEn) || catEn === "all") &&
                <Card 
                    key={v.id} 
                    title={v.title[lang]} 
                    img={v.imgUrl} 
                    link={`/Info/item?id=${v.id}`}
                />)
            }
        </div>
    </>)
}

export default connect(s=>({lang:s.lang}))(Category);
