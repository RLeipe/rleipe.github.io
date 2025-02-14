import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Your Name</title>
      </Head>
      <main className="prose prose-invert max-w-none">
        <h1>Hello.</h1>
        <p>
          I build things. Sometimes they work.
        </p>
      </main>
    </Layout>
  )
}
