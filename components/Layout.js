import Head from 'next/head';

function Layout({children, title}) {
    return (<div>
        <Head>
            <title>{title ? `Chabbad Cyprus | ${title}` : 'Chabbad Cyprus'}</title>
            <link rel="icon" href="/logo.jpg"/>
            <meta name="description" content="chabbad of cyprus aya napa is the place for all your jewish needs. by us you can find kosher food, shabbat meals, events and more | חב''ד קפריסין איה נאפה הוא המקום לכל הצרכים היהודיים ולחוויה נעימה. אצלנו ניתן למצוא אוכל כשר, סעודות שבת, ארועים ועוד"/>
            <meta name="og:title" content="chabbad cyprus aya napa | חב''ד קפריסין איה נאפה"/>
            <meta name="twitter:title" content="chabbad cyprus aya napa | חב''ד קפריסין איה נאפה"/>
            <meta property="og:description" content="chabbad of cyprus aya napa is the place for all your jewish needs. by us you can find kosher food, shabbat meals, events and more | חב''ד קפריסין איה נאפה הוא המקום לכל הצרכים היהודיים ולחוויה נעימה. אצלנו ניתן למצוא אוכל כשר, סעודות שבת, ארועים ועוד"></meta>
            <meta property="twitter:description" content="chabbad of cyprus aya napa is the place for all your jewish needs. by us you can find kosher food, shabbat meals, events and more | חב''ד קפריסין איה נאפה הוא המקום לכל הצרכים היהודיים ולחוויה נעימה. אצלנו ניתן למצוא אוכל כשר, סעודות שבת, ארועים ועוד"></meta>
            <meta property="og:image" content="https://chabbad-cyprus.herokuapp.com/logo.jpg"/>
            <meta property="twitter:image" content="https://chabbad-cyprus.herokuapp.com/logo.jpg"/>
            <meta property="og:url" content="https://chabbad-cyprus.herokuapp.com"/>
            <meta name="twitter:card" content="https://chabbad-cyprus.herokuapp.com/logo.jpg"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossOrigin="anonymous"/>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossOrigin="anonymous"></script>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
            <meta name="theme-color" content="#5bb2c7"/>
        </Head>
        <main style={{minHeight:'100vh'}}>
          {children}
        </main>
    </div>)
};

export default Layout;