import InnerPageContainer from "@/components/common/InnerPageContainer";
import About from '@/components/common/About'
import Head from 'next/head'

export default function Page() {
    return (
      <InnerPageContainer title="About Us">
          <Head>
            <title> CJM Life - Let us help you take control of your insurance and your life!</title>
            <meta name="description" content="About" />
          </Head>
	      <About />
      </InnerPageContainer>
    )
  }
  
