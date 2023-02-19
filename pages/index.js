import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Reigns Skincare</title>
          <meta name="description" content="Reign's Skincare" />
          <link rel="icon" href='Logo.png' />
        </Head>
        {/* body */}
        <main>
          <h1>Peep the light show</h1>        
        </main>
      </div>
    </Layout>
  );
}

