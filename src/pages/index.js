import Image from 'next/image'
import { Inter } from "next/font/google"
import styles from '@/styles/Home.module.css'
import Hero from '@/components/home/Hero'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <Head>
          <title> CJM Life - Let us help you take control of your insurance and your life!</title>
        </Head>
        <Hero />
    </>
  )
}
