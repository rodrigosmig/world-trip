import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export default function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <>
      <Flex
          w={["full"]}
          maxWidth={1440}
          h={["10.1875rem", "10.1875rem", "20.9375rem"]}
          bgImage="url('/img/background.png')"
          justify="space-between"
          m="auto"
        >
          <Box
            mt={[7, 7, 20]}
            ml={[4, 4, 36]}
            w={"100%"}
          >
            <Text
              fontWeight={["medium"]}
              fontSize={["lg", "lg", "4xl"]}
              color="#F5F8FA"
              lineHeight={["3xl", "3xl", "6xl"]}
            >
              5 Continentes, <br />infinitas possibilidades.
            </Text>

            <Text
              color="#DADADA"
              fontWeight={["normal"]}
              fontSize={["sm", "sm", "lg"]}
              lineHeight={["xl", "xl", "3xl"]}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou
            </Text>
          </Box>

          { isWideVersion && (
            <Box mt={'4.375rem'} mr={36}>
              <Image transform="rotate(3deg)" src="/img/airplane.png" alt="World Trip"/>
            </Box>
          ) }
        </Flex>
    </>
  );
}