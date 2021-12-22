import { connect } from "react-redux";
import { ImgTop } from "../components";

function About({lang}) {

    return (<>
        <ImgTop title="about-title"/>
        <div className="container-sm py-5" style={{minHeight:'100vh',maxWidth:700}}>
        <img className="w-100 mb-3" alt="chabbad aya napa nymark family" src="/imgs/family.jpeg" 
                style={{boxShadow:'1px 2px 10px black'}}/>
        <p style={{fontSize:25,textAlign:lang=='he'?'right':'left'}}>
            <i>{About.txt[lang].about}</i>
        </p>    
        <hr/>
    </div>
    </>)
}

About.txt = {
    en:{
        "about":"Ayia Napa. one of Cyprus's most popular resorts, hosts hundreds of thousands of tourists during the five-month summer \"season,\" including 100,000 Jewish and Israeli youngsters, many of whom are just out of school and have come to enjoy the beaches, the sports and water activities and the night life the city has to offer. That's where we find them and offer them a warm home from home, a taste of holiness in these mundane surroundings. Right here, where they've come to escape it all, they find a link to their tradition and many of them embark on their spiritual journey from this place. Chabad Ayia NapaIn the summer of 2016, with the rise in the number of tourists coming here, Rabbi Zushe and Yaeli Neymark arrived with their small son Uri, concentrating on working with the youngsters here in their Chabad House. They're very keen and highly motivated to be able to handle all the youngsters who enter their doors. They run a range of activities – homestyle Shabbat meals with delicious, nourishing foods, a store providing kosher food all week from early morning until late at night, shiurim, minyanim, evening programs for youth and much, much more. By the way, if you happen to be in Ayia Napa on Friday night and you hear the beautiful singing as you pass by our Chabad House, you're more than welcome to come in and join the 400 youngsters enjoying our communal Kabbalat Shabbat service. Entrance is free and everyone's invited",

    },
    he:{
        "about":"בשבת תשע\"ו 2016 הרב זושא ויעלי ניימרק הקימו את הבית חב\"ד הגדול ביותר לנוער בעולם. עשרות אלפי צעירים המבקרים נהנים מהכרות עם היהודות מתוך שמחה וחוויה יוצאת דופן המותאמת לשיח והרוח הצעירה. 700 צעירים כל סעודת שבת, אלפי הדלקות שבת, עשרות אלפי הנחות תפילין עם .\"חב\"ד על גלגלים\", מגוון ענק של פעילויות חגים: תשרי, חנוכה, פורים ועוד, הקמת עשרות שיעורי תורה באינטרנט. גם בימים המאתגרים של הקורנה בית חב\"ד פעל להגדלת חיבורם להקב\"ה של אותם עשרות אלפי צעירים שביקרו במשך השנים בבית חב\"ד וצירף אותם לפרוייקטים החשובים: \"אך טוב וחסד\" עזרה לנזקקים ע\"י מתנדבי ידידי בית חב\"ד, 'גירסא דינקותא' לימוד תוכן ללימוד היהדות באופו ייחודי וראשוני בעולם ועוד פעילויות רבות. בבית חב\"ד נאפה ניתן למצוא מספר רב של שירותים: בית כנסת וענייני קדושה, סעודות שבת, מסעדה בשרית, מסעדה חלבית, מידע למטייל למקומות מעניינים ואמינים, מועדון משחקים לנוער, עזרה ראשונה, עזרה לכל צרה ואוזן קשבת רק בשבילכם. מחכים לכם בבית גם כשלא תמיד קרובים לבית.",

    }
}

export default connect(s=>({lang:s.lang}))(About);