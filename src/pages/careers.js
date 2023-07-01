import InnerPageContainer from "@/components/common/InnerPageContainer";
import Head from 'next/head'
import Careers from '@/components/common/Careers'
export default function Page() {
    return (
      <InnerPageContainer title="Careers">
        <Head>
            <title> McKillips Agency - Sell insurance with us.</title>
            <meta name="description" content="Careers" />
        </Head>
       <Careers />
      </InnerPageContainer>
    )
  }
  
