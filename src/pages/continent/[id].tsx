import { Flex } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import BannerContinent from '../../components/BannerContinent';
import ContinentDescription from '../../components/ContinentDescription';
import Header from '../../components/Header';
import { api } from '../../services/api';
import HundredCities from '../../components/HundredCities/index';
import Head from 'next/head';

interface ContinentProps {
  continent: Continent
}

interface City {
  id: number;
  name: string;
  country: string;
  image: string;
  countryIcon: string
}

interface Continent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  banner: string;
  countries: number;
  languages: number;
  hundreadCities: City[]
}


export default function Continent({ continent }: ContinentProps) {

  return (
    <>
      <Head>
        <title>{continent.title}</title>
      </Head>

      <Flex w={["full"]} direction="column">
        <Header />
        <BannerContinent title={continent.title} image={continent.banner} />
        <ContinentDescription
          description={continent.description}
          countries={continent.countries}
          languages={continent.languages}
        />
        <HundredCities cities={continent.hundreadCities}/>      
      </Flex>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get('/continents');
  const continents = response.data

  const paths = continents.map(continent => (
    {
      params: { id: continent.id }
    }
  ))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const { id } = params;

  const response = await api.get(`/continents/${id}`);

  const continent = response.data
  return {
    props: {
      continent
    }
  }
}