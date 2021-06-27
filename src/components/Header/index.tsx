import { Box, Flex, Icon, IconButton, Image } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { IoIosArrowBack } from 'react-icons/io';

export default function Header() {
  const { asPath } = useRouter()
  const isHomePage = asPath === '/';
  console.log(isHomePage)

  return (
    <Flex
      as="header"
      w={"100%"}
      maxWidth={1440}
      h={100}
      align="center"
      justify="center"
      m="auto"
      >
        { !isHomePage && (
          <Link href="/">
            <IconButton
              aria-label="Return button"
              icon={<Icon as={IoIosArrowBack}/>}
              bg="none"
              fontSize={[30]}
            />          
          </Link>
        )}
        <Box m="auto">
          <Image src="/img/logo.png" alt="World Trip"/>
        </Box>
    </Flex>
  )
}