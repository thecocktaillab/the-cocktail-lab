'use client'

import Hero from '@/components/layout/Hero';
import Image from 'next/image'
import { motion } from 'framer-motion'
import masterclassData from '@/content/masterclass.json'
import stepData from '@/content/masterclass-step.json'
import carAnimation from '@/lottie/car.json'
import mixAnimation from '@/lottie/mix.json'
import cocktailAnimation from '@/lottie/cocktail.json'
import cartAnimation from '@/lottie/cart.json'
import teamAnimation from '@/lottie/team.json'
import sessionAnimation from '@/lottie/session.json'
import cheersAnimation from '@/lottie/cheers.json'
import liquorAnimation from '@/lottie/liquor.json'
import questionAnimation from '@/lottie/question.json'
import yellowCocktailAnimation from '@/lottie/yellow-cocktail.json'
import trophyAnimation from '@/lottie/trophy.json'
import 'photoswipe/dist/photoswipe.css';
import masterclassImages from '@/content/masterclassImages'
import Button from '@/components/common/Button/Button'
import ArrowButton from '@/components/common/Button/ArrowButton'
import DesktopHorizontalScrollCards from '@/components/DesktopHorizontalScrollCards';
import MobileVerticalCards from '@/components/MobileVerticalCards';
import WhiteCard from '@/components/WhiteCard';
import Lottie from 'react-lottie-player';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Reviews from '@/components/Reviews';
import ExpandableCard from '@/components/ExpandableCard';
import Class from '@/content/masterclass-classes.json'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import SpinButton from '@/components/common/Button/SpinButton'

const cocktails = [
  { name: 'Mojito', image: '/masterclass/masterclass-cocktail-1.jpg', desc: 'Lorem ipsum dolor sit amet.' },
  { name: 'Pina Colada', image: '/masterclass/masterclass-cocktail-2.jpg', desc: 'Lorem ipsum dolor sit amet.' },
  { name: 'Negroni', image: '/masterclass/masterclass-cocktail-3.jpg', desc: 'Lorem ipsum dolor sit amet.' },
  { name: 'Espresso Martini', image: '/masterclass/masterclass-cocktail-6.jpg', desc: 'Lorem ipsum dolor sit amet.' },
];

const lottieMap: { [key: string]: object } = {
  car: carAnimation,
  mix: mixAnimation,
  cocktail: cocktailAnimation,
  cart: cartAnimation,
  team: teamAnimation,
  session: sessionAnimation,
  cheers: cheersAnimation,
  liquor: liquorAnimation,
  question: questionAnimation,
  yellowCocktail: yellowCocktailAnimation,
  trophy: trophyAnimation,
}

const checklistLabels = [
  { key: "A", label: "Lorem ipsum dolor sit amet." },
  { key: "B", label: "Lorem ipsum dolor sit amet." },
  { key: "C", label: "Lorem ipsum dolor sit amet." },
];

export default function Masterclass() {

  return(
    <>
      <Hero
        title="Cocktail Making Class"
        subtitle="Group Mixologist Masterclass Hire. We Come to You"
        backgroundImage="/masterclass/the-cocktail-lab-masterclass-in-action-5.jpg"
      />

      {/* Masterclass Introduction Section */}
      <section className="w-full flex flex-col items-center justify-center py-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white" style={{ fontFamily: 'Caviar Dreams' }}>
          Shake, Stir, and Sip!
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-200">
          Learn to Shake It like a Pro!
        </h3>
        <p className="text-base md:text-lg text-gray-300 text-center px-4 max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mb-12">
          Whether you&apos;re planning a team-building activity, a unique celebration, or just a fun get-together with friends, The Cocktail Lab brings the bar to you — turning any occasion into a hands-on, creative, and unforgettable cocktail-making experience that&apos;s perfect for bonding, celebrating, or simply shaking things up.
        </p>
        {/* Responsive 6-card grid with Lottie animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
          {masterclassData.introduce.map((item) => (
            <WhiteCard
              key={item.title}
              title={item.title}
              description={item.desc}
            >
              {lottieMap[item.image] && (
                <Lottie animationData={lottieMap[item.image]} loop play />
              )}
            </WhiteCard>
          ))}
        </div>
        <div className="mt-20">
          <ArrowButton
            text='Book Masterclass'
            href=''
          />
        </div>
      </section>

      <section className="w-full flex flex-col items-center justify-center py-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white" style={{ fontFamily: 'Caviar Dreams' }}>
          Our Masterclasses
        </h2>
        <div className="w-full max-w-6xl flex flex-col items-center gap-6 my-20 grid grid-cols-1 md:grid-cols-3 px-4">
          {Class.classes.map((item) => (
            <ExpandableCard 
              key={item.title} 
              title={item.title} 
              image={item.image} 
              desc={item.desc}
            >
              <div className="mt-8">
                <ul className="space-y-1">
                  {checklistLabels.map(({ key, label }) => (
                    <li key={key} className="flex items-center text-gray-800 text-sm">
                      <span>{label}</span>
                      {item.features?.[key as keyof typeof item.features] ? (
                        <IoIosCheckmarkCircleOutline className="text-green-600 w-6 h-6 ml-2" />
                      ) : (
                        <IoIosCloseCircleOutline className="text-red-600 w-6 h-6 ml-2" />
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-center mt-8">
                <SpinButton
                  text='Book Masterclass'
                  href=''
                />
              </div>
            </ExpandableCard>
          ))}
        </div>
      </section>


      {/* How It Works Section */}
      <section className="w-full flex flex-col items-center justify-center py-20">
        <div className="w-full max-w-6xl mt-12">
          <DesktopHorizontalScrollCards 
            items={stepData.step.map((item, idx) => ({
              ...item,
              animationKey: ['question','yellowCocktail','liquor','cheers','trophy'][idx % 6],
            }))}
            withTitle={true}
            title="How It Works"
            lottieMap={lottieMap}
          />
          <MobileVerticalCards
            items={stepData.step.map((item, idx) => ({
              ...item,
              animationKey: ['question','yellowCocktail','liquor','cheers','trophy'][idx % 6],
            }))}
            withTitle={true}
            title="How It Works"
            lottieMap={lottieMap}
          />
        </div>
        <div className="flex justify-center gap-4 mt-20">
          <ArrowButton
            text='Book Masterclass'
            href=''
          />
        </div>
      </section>

      {/* See in action */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white text-center" style={{ fontFamily: 'Caviar Dreams' }}>
          See Our Masterclass In Action
        </h2>
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="w-full"
          >
            {masterclassImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={img.original}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Clients Favorite Section */}
      <section className="w-full flex flex-col items-center justify-center py-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white" style={{ fontFamily: 'Caviar Dreams' }}>
          Client Favorites
        </h2>
        <p className="text-lg text-gray-300 text-center px-4 max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mb-8">
          At The Cocktail Lab, we believe that the best cocktails are the ones you enjoy the most. Our expert mixologists are here to guide you through the creation of your favorite drinks, from classic concoctions like the Mojito and Pina Coladas to modern marvels like the Espresso Martini and Bramble Cocktails.
        </p>

        {/* Cards - 2 columns, big, with animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-4xl md:max-w-6xl mx-auto px-4 sm:px-0">
          {cocktails.map((cocktail, idx) => (
            <motion.div
              key={cocktail.name}
              className={'bg-white rounded-3xl shadow-xl flex items-center p-8 md:p-10'}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 * idx }}
            >
              <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 mr-8 bg-gray-200 flex items-center justify-center">
                <Image 
                  src={cocktail.image} 
                  alt={cocktail.name} 
                  width={128}
                  height={128}
                  className="object-cover w-full h-full" 
                />
              </div>
              <div>
                <motion.h3
                  className="text-xl md:text-3xl font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 + 0.1 * idx }}
                >
                  {cocktail.name}
                </motion.h3>
                <motion.p
                  className="text-gray-600 text-base md:text-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 + 0.1 * idx }}
                >
                  {cocktail.desc}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-20">
          <ArrowButton
            text='Book Masterclass'
            href=''
          />
          <Button 
            text='Find more recipes'
            href=''
            variant='secondary'
          />
        </div>
      </section>

      <Reviews />
    </>
  )
}
