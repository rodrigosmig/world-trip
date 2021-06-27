import { Box, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';

interface HundredCitiesProps {
  cities: City[]
}

interface City {
  id: number;
  name: string;
  country: string;
  image: string;
  countryIcon: string
}

export default function HundredCities({ cities }: HundredCitiesProps) {
  return (
    <Box
      as="section"
      w="100%"
      maxWidth={[1160]}
      m="auto"
      mt={[8, 8, 20]}
    >
      <Heading
        fontSize={["2xl", "2xl", "4xl"]}
        fontWeight={"medium"}
        lineHeight={["3.375rem"]}
        ml={[4, 4, 0]}
      >
        Cidades +100
      </Heading>

      <Flex
        w="100%"
        display="inline-flex"
        flexWrap={"wrap"}
        align="center"
        justify="space-between"
        mt={[4, 4, 10]}
      >
        <SimpleGrid columns={[1, 2, 4]} spacing={[5, 5, "2.8125rem"]} mb={[4, 4, "2.1875rem"]} mx="auto">
          { cities.map(city => (
            <Box
              key={city.id}
              w={["2xs"]}
              h={["17.4375rem"]}
              borderWidth="1px"
              borderColor="#FFBA08"
            >
              <Box
                w="100%"
                h={["10.8125rem"]}
                bgImage={`url('${city.image}')`}
                bgSize="cover"
                mb={["1.125rem"]}
              >
              </Box>

              <Flex justify="space-between" mx="24px" alignItems="center">
                <Box>
                  <Text
                    fontSize={["xl"]}
                    lineHeight={["1.5625rem"]}
                    fontWeight={["semibold"]}
                    color="#47585B"
                  >
                    {city.name}
                  </Text>
                  <Text
                    fontSize={["md"]}
                    lineHeight={["1.625rem"]}
                    fontWeight={["semibold"]}
                    color="#999999"
                    mt={[3]}
                  >
                    {city.country}
                  </Text>
                </Box>

                <Box>
                  <Image
                    src={city.countryIcon}
                    w={30}
                    h={30}
                    objectFit="cover"
                    borderRadius={30}
                  />
                </Box>
              </Flex>
            </Box>
          ))}
          
          
        </SimpleGrid>
      </Flex>
    </Box>
  )
}