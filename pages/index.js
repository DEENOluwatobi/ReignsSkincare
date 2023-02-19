import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

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
          <Hero/>        
        </main>
      </div>
    </Layout>
  );
}

