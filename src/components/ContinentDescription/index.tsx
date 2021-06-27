import { Box, Flex, HStack, Icon, IconButton, Text, useBreakpointValue } from '@chakra-ui/react';
import { BsInfoCircle } from 'react-icons/bs'

interface ContinentDescriptionProps {
  description: string;
  countries: number;
  languages: number;
}

export default function ContinentDescription({description, countries, languages}: ContinentDescriptionProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex     
        w="100%"
        flexDir={["column", "row"]}
        maxWidth={1160}
        align="center"
        justify="space-between"
        m="auto"
        mt={[6, 6, 20]}
      >
        <Box>
          <Text
            maxWidth={["21.4375rem", "21.4375rem", "37.5rem"]}
            color="#47585B"
            fontSize={["sm", "sm", "2xl"]}
            fontWeight={["normal"]}
            lineHeight={["1.3125rem", "1.3125rem", 9]}
            textAlign="justify"
          >
            { description }
          </Text>
        </Box>

        <HStack
          w={["100%", "100%", 'max']}
          maxWidth={["21.4375rem", "21.4375rem", "37.5rem"]}
          spacing={["2.625rem", 16]}
          mt={[4, 4, 0]}
        >
          <Box>
            <Text
              color="#FFBA08"
              fontSize={["lg", "lg", "5xl"]}
              fontWeight="semibold"
            >
              {countries}
            </Text>
            <Text
              color="#47585B"
              fontSize={["lg"]}
              fontWeight="semibold"
            >países</Text>
          </Box>

          <Box>
            <Text
                color="#FFBA08"
                fontSize={["lg", "lg", "5xl"]}
                fontWeight="semibold"
              >
                {languages}
              </Text>
              <Text
                color="#47585B"
                fontSize={["lg"]}
                fontWeight="semibold"
              >
                línguas
              </Text>
          </Box>

          <Box>
            <Text
                color="#FFBA08"
                fontSize={["lg", "lg", "5xl"]}
                fontWeight="semibold"
              >
                27
              </Text>
              <Text
                color="#47585B"
                fontSize={["md"]}
                fontWeight="semibold"
              >
                cidades +100
                { isWideVersion && (
                  <IconButton 
                    aria-label="Info button"
                    icon={<Icon as={BsInfoCircle} />}
                    bg="none"
                    outline="none"
                    fontSize={[10, 16]}
                    _hover={{
                      color: "#FFBA08",
                    }}
                    _active={{
                      border: "none",
                    }}
                    _focus={{
                      outline: "none"
                    }}
                  />
                ) }
              </Text>
          </Box>          
        </HStack>
      </Flex>
  )
}