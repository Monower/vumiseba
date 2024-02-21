import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import styles from '@/styles/Layout.module.css'
import { useRouter } from 'next/router'
import Script from 'next/script'

interface IPropType  {
    title: string;
    keywords: string;
    description?: string;
    children:React.ReactNode;
}

export default function Layout({ title, keywords, description, children }: IPropType) {

  const router = useRouter()

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link href="https://fonts.maateen.me/kalpurush/font.css" rel="stylesheet"></link>
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'ভূমিসেবা',
  description: 'this is description',
  keywords: 'this is keywords',
}