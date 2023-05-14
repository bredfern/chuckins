import InnerPageContainer from "@/components/common/InnerPageContainer"
import Products from "@/components/common/Products"
import Head from 'next/head'

export default function Page() {
    return (
      <InnerPageContainer title="Products">
        <Head>
            <title> CJM Life - Our Insurance Products</title>
        </Head>
        <Products />
      </InnerPageContainer>
    )
  }
  
