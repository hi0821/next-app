import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Section from '@/components/Section'
import Layout from '@/components/Layout'
import Heading from '@/components/Heading'
import FadeInBlock from '@/components/FadeInBlock'

export const metadata = {
  title: 'Deomoページのタイトル',
  description: 'Demoページの説明',
}

const Images = [
  '/img/demo/dog_01.jpg',
  '/img/demo/dog_02.jpg',
  '/img/demo/dog_03.jpg',
  '/img/demo/dog_04.jpg',
  '/img/demo/dog_01.jpg',
  '/img/demo/dog_02.jpg',
  '/img/demo/dog_03.jpg',
  '/img/demo/dog_04.jpg',
  '/img/demo/dog_01.jpg',
  '/img/demo/dog_02.jpg',
  '/img/demo/dog_03.jpg',
  '/img/demo/dog_04.jpg'
]

const DemoPage = () => {
  return (
    <>

      <Section>
        <Layout>
          <Heading>Fade In</Heading>
          <FadeInBlock>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p className='mt-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, <Link className='font-bold underline' href="/about/">about</Link> and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </FadeInBlock>
        </Layout>
      </Section>

      <section className='flex flex-col md:flex-row'>
        <div className='w-ful md:w-1/2'>
          <div className='flex flex-wrap'>
            {Images.map((src, idx) => (
              <div key={idx} className="w-1/2">
                <Image
                  src={src}
                  alt={`demo_image_${idx + 1}`}
                  width={480}
                  height={540}
                />
              </div>
            ))}
          </div>
        </div>
        <div className='w-ful md:w-1/2'>
          <div className='flex flex-col justify-center items-center sticky top-0 right-0 w-full h-dvh py-32 px-16'>
            <Heading>2Column Section</Heading>
            <FadeInBlock>
              <p className='mt-16'>
                2Column Section text.2Column Section text.2Column Section text.2Column Section text.2Column Section text.2Column Section text.2Column Section text.<br />
                <br />
                2Column Section text.2Column Section text.2Column Section text.2Column Section text.2Column Section text.2Column Section text.2Column Section text.<br />
                <br />
                2Column Section text.2Column Section text.2Column Section text.2Column Section text.2Column Section text.2Column Section text.2Column Section text.<br />
                <br />
                2Column Section text.2Column Section text.2Column Section text.2Column Section text.2Column Section text.2Column Section text.2Column Section text.
              </p>
            </FadeInBlock>
          </div>
        </div>
      </section>

      <Section>
        <Layout>
          <Heading>Fade In</Heading>
          <FadeInBlock>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p className='mt-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, <Link className='font-bold underline' href="/about/">about</Link> and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </FadeInBlock>
        </Layout>
      </Section>
    </>
  )
}

export default DemoPage
