import InnerPageContainer from "@/components/common/InnerPageContainer"
import Head from 'next/head'
import { InlineWidget } from "react-calendly"

export default function Page() {
    return (
      <InnerPageContainer title="Schedule a Consultation">
        <Head>
            <title> CJM Life - Schedule a Consultation</title>
        </Head>
	<InlineWidget url="https://calendly.com/charlesjmckillips/30min" />
      </InnerPageContainer>
    )
  }
  
