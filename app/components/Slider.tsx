"use client"
import { useRef, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
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
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <>
      <Swiper
        loop={true}
        modules={[Navigation, Pagination]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
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
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className='!w-full md:!w-[800px]'>
            <Link href={slide.url}>
              <Image
                className='w-full'
                src={slide.img}
                alt={`slide-${idx + 1}`}
                width={1000}
                height={480}
                priority={idx === 0}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='flex justify-end gap-2 md:gap-4 w-full mt-4 md:mt-8 pr-2 md:pr-4'>
        <button className='flex justify-center items-center text-[0px] w-6 md:w-8 h-6 md:h-8 bg-black rounded-full z-10' ref={prevRef}>
          <Image
            className='w-3 md:w-4 rotate-180'
            src="/img/swiper/icon_arrow_navigation.svg"
            alt="prev"
            width={24}
            height={24}
          />
        </button>
        <button className='flex justify-center items-center text-[0px] w-6 md:w-8 h-6 md:h-8 bg-black rounded-full z-10' ref={nextRef}>
          <Image
            className='w-3 md:w-4'
            src="/img/swiper/icon_arrow_navigation.svg"
            alt="next"
            width={24}
            height={24}
          />
        </button>
      </div>
    </>
  );
}

