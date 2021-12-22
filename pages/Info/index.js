import React from 'react';
import { connect } from 'react-redux';
import {Card, ImgTop} from '../../components';
import Link from 'next/link';

function Info({lang}) {

    return (<>
        <ImgTop title={{en:"Info",he:"מידע"}[lang]}/>
        <div className="container py-3 text-center" style={{maxWidth:800}}>
            <div className="row mx-0"  style={{placeContent:'center'}}>
            {
                Info.data.categories.map((v,i)=> <Card
                    link={`/Info/${v.href}`} key={i}
                    title={v.txt[lang]}
                    img={v.img}
                />)    
            }
            </div>
        </div>
    </>)
}

Info.data = {
    categories:[
        {
            img:"https://previews.123rf.com/images/kirillm/kirillm1603/kirillm160300118/56221136-sea-caves-near-ayia-napa-cyprus-.jpg",
            href:"places-to-travel",
            txt:{en:"places-to-travel",he:"מקומות יפים לראות"}
        },
        {
            img:"https://www.swedishnomad.com/wp-content/images/2019/08/Konnos-Bay.jpg",
            href:"beach",
            txt:{en:"beach",he:"חופים מומלצים"}
        },
        {
            img:"https://media.tacdn.com/media/attractions-splice-spp-674x446/07/2e/cc/07.jpg",
            href:"attraction",
            txt:{en:"attraction",he:"אטרקציות"}
        },
        {
            img:'https://cyprus-mail.com/wp-content/uploads/2020/06/bus-1-1920x1280.jpg',
            href:"transprtation",
            txt:{en:"transprtation",he:"תחבורה"}
        },
        {
            img:"https://i1.wp.com/www.touristisrael.com/wp-content/uploads/2021/05/covidtest-1-scaled.jpg?resize=1024%2C683&ssl=1",
            href:"covid-test",
            txt:{en:"covid-test",he:"בדיקות קורונה"}
        },
        {
            img:'https://more-explore.com/wp-content/uploads/2019/05/A-Brief-Note-About-Travel-Guides.jpg',
            href:"travel-guides",
            txt:{en:"travel-guides",he:"מדריך טיולים"}
        }
    ]
}

export default connect(s=>({lang:s.lang}))(Info);