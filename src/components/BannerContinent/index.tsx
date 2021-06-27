import { Box, Flex, Heading } from '@chakra-ui/react';

interface BannerContinentProps {
  title: string;
  image: string
}

export default function BannerContinent({ title, image }: BannerContinentProps) {
  return (
    <Box
        w={["full"]}
        maxWidth={1440}
        h={["9.375rem", "9.375rem", "31.25rem"]}
        m="auto"
        bgImage={`url('${image}')`}
        bgSize="cover"
      >
        <Flex w="100%" h="100%" align={["center", "flex-end"]}>
          <Box
            w={["full", "full", "max"]}
            ml={[0, 0, "8.75rem"]}
            align="center"
          >
            <Heading
              mb={[0, 0, "3.75rem"]}
              color="#F5F8FA"
              fontSize={["1.75rem", "1.75rem", "5xl"]}
              fontWeight={["semibold"]}
              lineHeight={["4.5rem"]}
            >
              {title}
            </Heading>
          </Box>
        </Flex>
      </Box>
  )
}