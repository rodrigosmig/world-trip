import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from "swiper/core";

SwiperCore.use([Pagination, Navigation]);

interface SliderProps {
  continents: Continent[]
}

interface Continent {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export default function Slider({ continents }: SliderProps) {
  return (
      <Swiper pagination={true} navigation={true} >
        { continents.map(continent => (
          <SwiperSlide key={continent.id}>
            <Flex
              w={'100%'}
              h={'100%'}
              align="center"
              justify="center"
              fontWeight="bold"
              bgImage={`url(${continent.image})`}
              bgSize="cover"
            >
              <Box align="center">
                <Link href={`/continent/${continent.id}`}>
                  <a>
                    <Text
                      fontSize={["2xl", "2xl", "5xl"]}
                      lineHeight={["4xl", "4xl", "7xl"]}
                      fontWeight="bold"
                      color="#F5F8FA"
                    >
                      {continent.title}
                    </Text>
                    <Text
                      fontSize={["sm", "sm", "2xl"]}
                      lineHeight={["1.3125rem", "1.3125rem", "4xl"]}
                      fontWeight="bold"
                      color="#DADADA"
                    >
                      {continent.subtitle}
                    </Text>
                  </a>
                
                </Link>
              </Box>
            </Flex>
          </SwiperSlide>
          ))}
      </Swiper>
  )
}