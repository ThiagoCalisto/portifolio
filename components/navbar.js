import Logo from './logo.js'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha900')
  return (
    <NextLink legacyBehavior href={href} passHref>
      <a
        style={{
          padding: '8px',
          backgroundColor: active ? 'glassTeal' : 'transparent',
          color: active ? '#202023' : inactiveColor,
          textDecoration: 'none'
        }}
      >
        {children}
      </a>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Trabalho
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Post
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
              arial-label="options"
            />
            <MenuList>
              <NextLink href="/" passHref>
                <MenuItem>Sobre</MenuItem>
              </NextLink>
              <NextLink href="/works" passHref>
                <MenuItem>Trabalhos</MenuItem>
              </NextLink>
              <NextLink href="/posts" passHref>
                <MenuItem>Posts</MenuItem>
              </NextLink>
            </MenuList>
          </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
