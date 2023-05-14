import InnerPageContainer from "@/components/common/InnerPageContainer"
import Head from 'next/head'

export default function Page() {
    return (
      <InnerPageContainer title="Schedule a Consultation">
        <Head>
            <title> CJM Life - Schedule a Consultation</title>
        </Head>
        <iframe className="w-full h-max" src="https://calendar.google.com/calendar/embed?src=957d94ed252fce1980b835bc85b29efffd5b704e41dfca45e7b8267fc920a8d1%40group.calendar.google.com&ctz=America%2FLos_Angeles"></iframe>
      </InnerPageContainer>
    )
  }
  
