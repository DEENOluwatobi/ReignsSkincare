import { Route, Routes } from 'react-router-dom'
import Head from "next/head";
import Layout from "./components/Layout";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Reigns Skincare</title>
          <meta name="description" content="Reign's Skincare" />
          <link rel="icon" href='Logo.png' />
        </Head>
        
        <main>
          <Hero/>        
        </main>
      </div>
    </Layout>
  );
}

