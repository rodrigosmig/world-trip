import { Box, Image, Text } from "@chakra-ui/react";

interface TypesProps {
  name: string
  src: string;
}

export default function Type({ name, src }: TypesProps) {
  return (
    <Box w={'9.875rem'}>
      <Image src={src} mx="auto" />
      <Text
        fontSize={24}
        textAlign="center"
        fontWeight={600}
        lineHeight={9}
        mt={6}
      >
          {name}
      </Text>
    </Box>
  )
}