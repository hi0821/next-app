import React from 'react'
import Section from '@/components/Section'
import Layout from '@/components/Layout'
import Heading from '@/components/Heading'

export const metadata = {
  title: 'Worksページのタイトル',
  description: 'Worksページの説明',
}

const worksPage = () => {
  return (
    <>
      <Section>
        <Layout>
          <Heading>Works Page</Heading>
        </Layout>
      </Section>
    </>
  )
}

export default worksPage
