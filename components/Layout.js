import Head from 'next/head';

function Layout({children, title}) {
    return (<div>
        <Head>
            <title>{title ? `Chabbad Cyprus | ${title}` : 'Chabbad Cyprus'}</title>
            <link rel="icon" href="/" />
            <meta name="description" content=""/>
            <meta property="og:image" content=""/>
            <meta name="og:title" content=""/>
            <meta name="twitter:card" content="summary_large_image"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossOrigin="anonymous"/>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossOrigin="anonymous"></script>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        </Head>
        <main style={{minHeight:'100vh'}}>
          {children}
        </main>
    </div>)
};

export default Layout;