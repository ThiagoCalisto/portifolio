import { Container, Box, Heading, Image } from '@chakra-ui/react'
import Section from '../components/section'

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
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
          <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/foto_perfil.jpg" alt='Perfil Image' />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Trabalho
        </Heading>
        <p>Paragrafo</p>
      </Section>
    </Container>
  )
}

export default Page
