import InnerPageContainer from "@/components/common/InnerPageContainer"
import Head from 'next/head'
import { InlineWidget } from "react-calendly"

export default function Page() {
    return (
      <InnerPageContainer title="Schedule a Consultation">
        <Head>
            <title> McKillips Agency - schedule an appointment with us.</title>
        </Head>
	    <InlineWidget url="https://calendly.com/charlesjmckillips/30min" />
      </InnerPageContainer>
    )
  }
  
