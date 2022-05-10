import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Script from 'next/script'

export default function Home() {
  return (
    <div className="container">
      <Script
        id="netlify-id"
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        
      />
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <div data-netlify-identity-menu></div>
      </main>

      <Footer />
    </div>
  )
}
