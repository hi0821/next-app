"use client"
import { useRef } from "react";
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  { url: '/about', img: '/img/swiper/image_01.jpg' },
  { url: '/works', img: '/img/swiper/image_01.jpg' },
  { url: '/contact', img: '/img/swiper/image_01.jpg' },
  { url: '/about', img: '/img/swiper/image_01.jpg' },
  { url: '/works', img: '/img/swiper/image_01.jpg' },
  { url: '/contact', img: '/img/swiper/image_01.jpg' },
]



export default function Slider() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <Swiper
        loop={true}
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        // pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
          },
          768: {
            slidesPerView: "auto",
            spaceBetween: 16,
            centeredSlides: true,
          },
        }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className='!w-full md:!w-[800px]'>
            <Link href={slide.url}>
              <img className='w-full' src={slide.img} alt={`slide-${idx + 1}`} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='flex justify-end gap-2 md:gap-4 w-full mt-4 md:mt-8 pr-2 md:pr-4'>
        <button className='flex justify-center items-center text-[0px] w-6 md:w-8 h-6 md:h-8 bg-black rounded-full z-10' ref={prevRef}>
          <img className='w-3 md:w-4 rotate-180' src="/img/swiper/icon_arrow_navigation.svg" alt="prev" />
        </button>
        <button className='flex justify-center items-center text-[0px] w-6 md:w-8 h-6 md:h-8 bg-black rounded-full z-10' ref={nextRef}>
          <img className='w-3 md:w-4' src="/img/swiper/icon_arrow_navigation.svg" alt="next" />
        </button>
      </div>
    </>
  );
}

