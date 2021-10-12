import React from 'react'
import {useRouter} from 'next/router';
import { ImgTop, Card } from '../../components';
import { connect } from 'react-redux';
import {Info as text, infoCateg} from '../../assets/text';
import Link from 'next/link';

function Category({lang}) {
    const router = useRouter();
    const catEn = router.query.category;
    console.log(catEn);
    const category = Object.values(infoCateg).find(v=>v.txt.en === catEn) || {txt:""};

    return (<>
        <ImgTop title={`${text[lang].title}/${category.txt[lang]}`}/>
        <div className="px-5 py-4 d-flex flex-row-reverse">
            <Link href="/Info">
                <a className="fas fa-arrow-right fa-2x" style={{textDecoration:'none'}}></a>
            </Link>
        </div>
        <div className="row mx-0"  style={{placeContent:'center'}}>
            { 
            text[lang].items.map((v,i)=> Array.from(v.categories).find(v=> v.l === category.l) &&
                <Card 
                    key={i} 
                    title={v.title} 
                    text={<b style={{cursor:'pointer'}} onClick={()=>null}>{text[lang].more_info}</b>} 
                    img={v.img} 
                    link={v.link}
                />)
            }
        </div>
    </>)
}

export default connect(s=>({lang:s.lang}))(Category);
