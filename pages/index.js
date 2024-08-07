import { Container, Box, Heading } from '@chakra-ui/react'


const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center" >
        Eai, Eu sou um desenvolvedor Fullstack!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant='page-title' >
            Thiago Calisto
          </Heading>
          <p>Desenvolvedor Digital ( Desenvolvedor / Designer ) </p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
