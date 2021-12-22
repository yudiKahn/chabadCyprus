import React from 'react'
import {useRouter} from 'next/router';
import { ImgTop, Card } from '../../components';
import { connect } from 'react-redux';
import Info from '.';

function Category({lang}) {
    const router = useRouter();
    const catEn = router.query.category;

    return (<>
        <ImgTop title={Category.txt[lang].title}/>
        <div className="row mx-0"  style={{placeContent:'center'}}>
            { 
                Category.data.items.map((v,i)=>
                <Card
                    key={i}
                    img={v.imgUrl}
                    text={v.text[lang]}
                    title={v.title[lang]}

                />
                )
            }
        </div>
    </>)
}

Category.txt = {
    en:{
        title:"Info"
    }, he:{
        title:"מידע"
    }
}

Category.data = {
    items:[
        InfoItem([], {en:"Chabad House",he:"בית חב\"ד"}, 
            {en:"",he:""}, "https://chabbad-cyprus.herokuapp.com/chabbadHouse.jpg", "/"),
        InfoItem([], {en:"Love Bridge", he:"גשר אהבה"},
            {en:"", he:""}, "https://www.swedishnomad.com/wp-content/images/2019/01/Cape-Greco.jpg", "https://www.google.com/maps/place/Love+Bridge,+Kryou+Nerou,+Ayia+Napa/data=!4m2!3m1!1s0x14dfc51e064a366b:0x3ba4e0221f66ee28?utm_source=mstt_1&entry=gps"),
        InfoItem([], {en:"Sea Caves", he:"המערות"},
            {en:"", he:""}, "https://previews.123rf.com/images/kirillm/kirillm1603/kirillm160300118/56221136-sea-caves-near-ayia-napa-cyprus-.jpg", "https://maps.app.goo.gl/a4moDLMZxd46HhMh6"),
        InfoItem([], {en:"Cape Kargo",he:"קייפ גרקו"},
            {en:"",he:""}, "https://lh5.googleusercontent.com/p/AF1QipNAWqRah_yOi_H6LEhe7c8eAAj8E-_3UYHIwS0Z=w408-h306-k-no", "https://maps.app.goo.gl/yCe5u38KdZwjs69U6"),
        InfoItem([], {en:"Nissi Beach",he:"חוף ניסי"},
            {en:"",he:""}, "https://cf.bstatic.com/xdata/images/hotel/max1280x900/215627009.jpg?k=3cea07e0ac5700c9cf8c69be80bb77fc60289cb10b61f0b068c2e124e9a1ad6a&o=&hp=1", "https://maps.app.goo.gl/U8qpPW8n3aqVQDSc6"),
        InfoItem([], {en:"Konnos Beach",he:"חוף קונוס"},
            {en:"",he:""}, "https://www.swedishnomad.com/wp-content/images/2019/08/Konnos-Bay.jpg", "https://maps.app.goo.gl/r99CYSr3oMGWFfM26"),
        InfoItem([], {en:"Fig tree Bay", he:"מפרץ עץ התאנה"},
            {en:"",he:""}, "https://media-cdn.tripadvisor.com/media/photo-s/03/ab/21/12/fig-tree-bay.jpg", "https://maps.app.goo.gl/kTnPLXexnKcSVgCeA"),
        InfoItem([], {en:"yellow submarine",he:"הצוללת הצהובה"},{en:"",he:""},
            "https://luxcyservices.com/wp-content/uploads/2019/12/unnamed.jpg","https://www.google.com/maps/place/Yellow+Submarine/@34.9821551,34.0027016,15z/data=!4m5!3m4!1s0x0:0xea9c109a55dd9a80!8m2!3d34.9821551!4d34.0027016?hl=en-GB"),
        InfoItem([],{en:"Water park",he:"פארק המים"},{en:"",he:""},
            "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/2e/cc/07.jpg","https://www.google.com/maps/place/WaterWorld+Themed+Waterpark+Ayia+Napa/@34.9037151,32.0777446,8z/data=!4m9!1m2!2m1!1scyprus+water+park!3m5!1s0x14dfcfd9892f6d31:0x88b8b1ccaccc0bea!8m2!3d34.985092!4d33.943439!15sChFjeXBydXMgd2F0ZXIgcGFya1oTIhFjeXBydXMgd2F0ZXIgcGFya5IBCndhdGVyX3BhcmuaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUjNPWEJRU0U5M0VBRQ?hl=en-GB"),
        InfoItem([], {he:"צלילה בקסדות", en:"Sea walking"}, {en:"",he:""},
            "http://underseawalkers.com/wp-content/uploads/2019/04/logo-final.png","https://www.google.com/maps/place/UNDERSEA+ADVENTURES/@35.0513996,34.0236159,15z/data=!4m5!3m4!1s0x0:0x195555e0daba64da!8m2!3d35.0513996!4d34.0236159"),
        InfoItem([], {en:"Ocean Aquarium",he:"אקווריום"}, {en:"",he:""},
            "https://cdn.ventrata.com/image/upload/c_fill,h_400,w_600/q_auto/v1557921556/Ocean-Aquarium-Cyprus41_felqee.jpg",""),
        InfoItem([], {en:"Water sport",he:"ספורט ימי"},{en:"",he:""},
            "https://www.partyhardtravel.com/wp-content/uploads/water-sports1-1024x683.jpg",""),
        InfoItem([], {en:"Spa",he:"ספא מרוקאי"}, {he:"",en:""},
            "https://media-cdn.tripadvisor.com/media/photo-s/04/48/74/d2/marrakech-spa.jpg",""),
        InfoItem([], {en:"Paronia",he:"פארנויה מבוך אימה"}, {en:"",he:""},
            "https://imengine.prod.srp.navigacloud.com/?uuid=C52A860B-54CC-4CEE-8164-01BAA736F64D&type=primary&q=72&width=1024",""),
        InfoItem([], {en:"Ofir travel guide",he:"מדריך אופיר שרון"}, {en:"",he:""},
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6tT0y827iUlT6zwesRThwr3buq9OZO7JIX_E2kAnk5MYRBciIQDomVicKpwf4bkU07Uc&usqp=CAU","https://api.whatsapp.com/send/?phone=35799726965&text&app_absent=0"),
        InfoItem([], {en:"Shemoul travel guide",he:"שמואל גולד מדריך לרנקה"}, {en:"",he:""},
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6tT0y827iUlT6zwesRThwr3buq9OZO7JIX_E2kAnk5MYRBciIQDomVicKpwf4bkU07Uc&usqp=CAU","https://api.whatsapp.com/send/?phone=35796219050&text&app_absent=0")
    ]
}

function InfoItem(categories, title, text, imgUrl, link){
    return ({
        categories, title,
        text: text,
        imgUrl: imgUrl,
        link: link
    })
}

export default connect(s=>({lang:s.lang}))(Category);
