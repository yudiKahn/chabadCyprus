import Layout from "../components/Layout";
import text from "../assets/text.json";

function About({state:{lang}}) {

    return (<Layout title="About">
        <div className="shabbat-head-img">
            <div className="w-100 h-100">
                <h1 className="text-white text-center w-100" style={{fontWeight:800}}>
                    {text[lang]["about-title"]}
                </h1>
            </div>
        </div>
        <div className="container py-2" style={{minHeight:'100vh'}}>
        <div className="row mx-0" style={{height:200}}>
            <img className="w-100 h-100" alt="about chabbad" src="https://th.bing.com/th/id/OIP.1XJQIFqhxcn0cTuiCH7nTgAAAA?pid=Api&rs=1"/>
        </div>
        <div className="row mx-0 mt-3">
            <p style={{fontSize:'larger',textAlign:'center'}}>
            <strong>Ayia Napa</strong>, one of Cyprus's most popular resorts, hosts hundreds of thousands of tourists during the five-month summer "season," including 100,000 Jewish and Israeli youngsters, many of whom are just out of school and have come to enjoy the beaches, the sports and water activities and the night life the city has to offer.

That's where we find them and offer them a warm home from home, a taste of holiness in these mundane surroundings. Right here, where they've come to escape it all, they find a link to their tradition and many of them embark on their spiritual journey from this place.

Chabad Ayia NapaIn the summer of 2016, with the rise in the number of tourists coming here, Rabbi Zushe and Yaeli Neymark arrived with their small son Uri, concentrating on working with the youngsters here in their Chabad House. They're very keen and highly motivated to be able to handle all the youngsters who enter their doors.

They run a range of activities – homestyle Shabbat meals with delicious, nourishing foods, a store providing kosher food all week from early morning until late at night, shiurim, minyanim, evening programs for youth and much, much more.

By the way, if you happen to be in Ayia Napa on Friday night and you hear the beautiful singing as you pass by our Chabad House, you're more than welcome to come in and join the 400 youngsters enjoying our communal Kabbalat Shabbat service. Entrance is free and everyone's invited
            </p>
        </div>
    </div>
    </Layout>)
}

export default About;