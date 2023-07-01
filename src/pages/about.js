import InnerPageContainer from "@/components/common/InnerPageContainer";
import About from '@/components/common/About'
import Head from 'next/head'

export default function Page() {
    return (
      <InnerPageContainer title="About Us">
          <Head>
            <title> McKillips Agency - About our insurance products.!</title>
            <meta name="description" content="About" />
          </Head>
	      <About />
      </InnerPageContainer>
    )
  }
  
