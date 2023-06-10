import InnerPageContainer from "@/components/common/InnerPageContainer";
import Head from 'next/head'
import Careers from '@/components/common/Careers'
export default function Page() {
    return (
      <InnerPageContainer title="Careers">
        <Head>
            <title> CJM Life - Sell with Us!</title>
        </Head>
       <Careers />
      </InnerPageContainer>
    )
  }
  
