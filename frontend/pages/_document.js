import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Roadrules </title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
          />
          <meta
            name="keywords"
            content="Road Rules, driving in Surrey"
          />
          <meta
            name="description"
            content="We offer a selection of ICBC driving test lessons in Surrey and neighboring cities. Each of our driving lessons is conducted with an experienced, friendly and supportive driving instructor who is ICBC accredited."
          />
          <meta name="author" content="@roadrules" />
          <meta name="theme-color" content="#692DB7" />
          <meta itemprop="name" content="Road Rules" />
          <meta
            itemprop="description"
            content="We offer a selection of ICBC driving test lessons in Surrey and neighboring cities. Each of our driving lessons is conducted with an experienced, friendly and supportive driving instructor who is ICBC accredited."
          />
          <meta
            itemprop="image"
            content="https://raw.githubusercontent.com/ncs-jss/ncs-jss.github.io/master/favicon.ico"
          />
          <meta name="twitter:card" content="Summary" />
          <meta name="twitter:site" content="@roadrules" />
          <meta name="twitter:title" content="Road Rules" />
          <meta
            name="twitter:description"
            content="We offer a selection of ICBC driving test lessons in Surrey and neighboring cities. Each of our driving lessons is conducted with an experienced, friendly and supportive driving instructor who is ICBC accredited."
          />
          <meta name="twitter:creator" content="@roadrules" />

          <meta property="og:title" content="Road Rules" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.roadrules.info/" />
          <meta
            property="og:description"
            content="We offer a selection of ICBC driving test lessons in Surrey and neighboring cities. Each of our driving lessons is conducted with an experienced, friendly and supportive driving instructor who is ICBC accredited."
          />
          <meta property="og:site_name" content="Road Rules" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
