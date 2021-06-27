import { Box, Flex, Icon, Stack, useBreakpointValue } from "@chakra-ui/react";
import { BsFillCircleFill } from "react-icons/bs";
import Type from "./Type";

export default function TravelTypes() {
  const isWideMode = useBreakpointValue({
    base: false,
    lg: true
  })

  if (isWideMode) {
    return (
      <Flex
        w={1160}
        h={145}
        mx="auto"
        mt={20}
        direction="row"
        justify="space-between"
      >      
        <Type name="vida noturna" src="/img/icons/cocktail.png" />
        <Type name="praia" src="/img/icons/surf.png" />
        <Type name="moderno" src="/img/icons/building.png" />
        <Type name="clássico" src="/img/icons/museum.png" />
        <Type name="e mais..." src="/img/icons/earth.png" />
        
      </Flex>
    );
  } else {
    return (
      <Flex
        w={275}
        h={120}
        mx="auto"
      >
        <Stack
        spacing={6}
          direction="row"
          display="flex"
          justify="space-around"
          flexWrap="wrap"
          mt={9}
        >
          <Box>
            <Icon
              as={BsFillCircleFill}
              color="#FFBA08"
              mr={2} 
              fontSize={8}
            />
            vida noturna
          </Box>

          <Box>
            <Icon
              as={BsFillCircleFill}
              color="#FFBA08"
              mr={2} 
              fontSize={8}
            />
            praia
          </Box>

          <Box>
            <Icon
              as={BsFillCircleFill}
              color="#FFBA08"
              mr={2} 
              fontSize={8}
            />
            moderno
          </Box>

          <Box>
            <Icon
              as={BsFillCircleFill}
              color="#FFBA08"
              mr={2} 
              fontSize={8}
            />
            clássico
          </Box>

          <Box>
            <Icon
              as={BsFillCircleFill}
              color="#FFBA08"
              mr={2} 
              fontSize={8}
            />
            e mais ...
          </Box>
        </Stack>
      </Flex>
    )
  }
  
  
}