import {Card, ImgTop} from '../components';
import { connect } from 'react-redux';

function Hotels({lang}) {
    return (<>
        <ImgTop title={Hotels.txt[lang].title}/>
        <div className="container py-5">
            <div className="row mx-0"  style={{placeContent:'center'}}>
            {Hotels.data.Hotels.map((v,i)=> 
                <Card 
                    key={i}
                    title={<>
                    {v.title[lang]}
                    <br/>
                    <small style={{fontSize:15}}>★★★★★</small>
                    </>}
                    link={v.link}
                    img={v.img}/>)}
            </div>
        </div>
    </>)
}

Hotels.txt = {
    en:{
        title:"Hotels",
    },
    he:{
        title:"מלונות",
    }
}
Hotels.data = {
    Hotels:[
        {
            title:{
                en:"Florida hotel",
                he:"מלון פלורידה"
            },
            text:"דקה הליכה",
            img:"https://media-cdn.tripadvisor.com/media/photo-s/07/c5/db/2d/giorgos-m.jpg",
            link:"https://www.booking.com/hotel/cy/cyprotel-florida-ayia-napa.he.html?aid=1878483&no_rooms=1&group_adults=1",
        },{
            title:{
                en:"Corfu Hotel",
                he:"מלון קורפו"
            },
            text:"דקה הליכה",
            img:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/116920557.jpg?k=fa998d23547ce8f9e4ce9cd0513ed9ee00f33ad7becf5e39b90b650e46f55d3e&o=&hp=1",
            link:"https://www.booking.com/hotel/cy/corfu.he.html",
        },{
            title:{
                en:"Alion Beach",
                he:"חוף אליון"
            },
            text:"דקה הליכה",
            img:"https://ak-d.tripcdn.com/images/22070g0000007s5ttCDC7_Z_550_412_R5_Q70_D.jpg",
            link:"https://www.booking.com/hotel/cy/alion-beach.he.html?aid=1878483&no_rooms=1&group_adults=1",
        },{
            title:{
                en:"Napa Mermaid",
                he:"נאפה מרמיד"
            },
            text:"דקה הליכה",
            img:"https://d376emoj42ssbs.cloudfront.net/main/data/media/136/136_1026559_xl.jpg",
            link:"https://www.booking.com/hotel/cy/napamermaidhotel.he.html?aid=1878483&no_rooms=1&group_adults=1",
        },{
            title:{
                en:"Marina",
                he:"מרינה"
            },
            text:"דקה הליכה",
            img:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/11296416.jpg?k=baa97bf9913182ced67c59f01bdef0aa8163fc49183f64929c0d8f75ffa83e0b&o=&hp=1",
            link:"https://www.booking.com/hotel/cy/marina-ayia-napa.he.html?aid=1878483&no_rooms=1&group_adults=1",
        },{
            title:{
                en:"Tofinis Hotel",
                he:"מלון טופיניס"
            },
            text:"דקה הליכה",
            img:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/210272408.jpg?k=0a9d571d147bb45632faa42efb637ce9a7a1410a053ab32635c73ee2c2f989e0&o=&hp=1",
            link:"booking.com/hotel/cy/tofinis-ayia-napa.he.html",
        },{
            title:{
                en:"Grecian Bay",
                he:"גרצ'יאן"
            },
            text:"דקה הליכה",
            img:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/94030796.jpg?k=07b531f449667f9f17914ec43bf450b2cda02032fbc7b5c9eba4860d5912eed9&o=&hp=1",
            link:"https://www.booking.com/hotel/cy/grecian-bay.he.html?aid=1878483&no_rooms=1&group_adults=1",
        },{
            title:{
                en:"Grecian Sands",
                he:"גרצ'יאן"
            },
            text:"דקה הליכה",
            img:"https://media-cdn.tripadvisor.com/media/photo-s/15/9b/d9/4d/grecian-sands-hotel.jpg",
            link:"https://www.booking.com/hotel/cy/grecian-sands.he.html?aid=1878483&no_rooms=1&group_adults=1",
        },{
            title:{
                en:"Napa Suits",
                he:"סוויטות נאפה"
            },
            text:"למבוגרים בלבד - 7 דקות הליכה",
            img:"https://adultyhotels.com/wp-content/uploads/2019/01/napa-suites-hotel-770x460.jpg",
            link:"https://www.booking.com/hotel/cy/napa-suites.he.html?aid=1878483&no_rooms=1&group_adults=1",
        },{
            title:{
                en:"Bella napa",
                he:"בלה נאפה"
            },
            text:"דקה הליכה",
            img:"https://hotelandtennis.com/wp-content/uploads/2015/11/Bella-Napa-Ayia-Napa-e1481540935847.jpg",
            link:"https://www.booking.com/hotel/cy/bella-napa-bay.he.html?aid=1878483&no_rooms=1&group_adults=1",
        },{
            title:{
                en:"Amaos",
                he:"אמוס"
            },
            text:"דקה הליכה",
            img:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/237019563.jpg?k=3a965b5e21b4d157aa2775ce98db809112e80f4381fc86687e12b3270ea6059c&o=&hp=1",
            link:"https://www.booking.com/hotel/cy/amaos-apartments.he.html?aid=1878483&no_rooms=1&group_adults=1",
        },{
            title:{
                en:"Napa Plaza",
                he:"פלאזה"
            },
            text:"דקה הליכה",
            img:"https://exp.cdn-hotels.com/hotels/2000000/1130000/1129600/1129509/ba7e4cb2_z.jpg?impolicy=fcrop&w=500&h=333&q=medium",
            link:"https://www.booking.com/hotel/cy/napa-plaza.he.html?aid=1878483&no_rooms=1&group_adults=1",
        }
    ]
}

export default connect(s=>({lang:s.lang}))(Hotels);