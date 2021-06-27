
import { GetStaticPaths, GetStaticProps } from "next";
import { Flex, Text } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import TravelTypes from "../components/TravelTypes";
import { Divider } from "@chakra-ui/react"
import Slider from "../components/Slider";
import { api } from "../services/api";
import Head from "next/head";

interface HomeProps {
  continents: Continent[]
}

interface Continent {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export default function Home({ continents }: HomeProps) {
  return (
    <>
      <Head>
        <title>World Trip</title>
      </Head>

      <Flex w={["full"]} direction="column">
        <Header />
        <Banner />
        <TravelTypes />

        <Divider
          borderColor="#47585B"
          width={["3.75rem", "3.75rem", "5.625rem"]}
          borderBottomWidth={2}
          mx="auto"
          mt={[9, 9, 20]}
          mb={[6, 6, "3.25rem"]} 
        />

        <Text align="center" fontSize={["xl", "xl", "4xl"]}>
          Vamos nessa? <br />Então escolha seu continente
        </Text>

        <Flex
          w="100%"
          maxWidth={1240}
          h={["15.625rem", "15.625rem", "28.125rem"]}
          m="auto"
          mt={[5, 5, "3.25rem"]}
          mb={[6, 6, 10]}
        >
          <Slider continents={continents} />
        </Flex>

      </Flex>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/continents');

  const continents = response.data;

  return {
    props: {
      continents
    }
  }
}
