import React from 'react'
import Link from 'next/link'
import Section from '@/components/Section'
import Layout from '@/components/Layout'
import Slider from '@/components/Slider'
import Heading from '@/components/Heading'

export const metadata = {
  title: 'トップページのタイトル',
  description: 'トップページの説明',
}

export default function Home() {
  return (
    <>
      <Section className='pt-0 md:pt-8 pb-4 md:pb-8'>
        <Slider />
      </Section>

      <Section className='bg-slate-100'>
        <Layout>
          <Heading>Heading</Heading>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p className='mt-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, <Link className='font-bold underline' href="/about/">about</Link> and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Layout>
      </Section>

      <Section>
        <Layout>
          <Heading>Heading</Heading>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p className='mt-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, <Link className='font-bold underline' href="/about/">about</Link> and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Layout>
      </Section>
    </>
  )
}
