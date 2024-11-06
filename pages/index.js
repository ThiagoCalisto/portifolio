import { Container, Box, Heading, Image, Button, Link } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

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
        <Paragraph>          Sou um desenvolvedor fullstack com experiência na área de desenvolvimento de
          software e um amplo conhecimento em várias linguagens, incluindo JavaScript, TypeScript,
          Rust, PHP e Python. Também acumulei experiência valiosa na interação com clientes de
          extrema importância para a empresa, participando de Provas de Conceito (PoC),
          inclusive obtendo sucesso em uma delas. Sou reconhecido pela minha comunicação
          eficaz e pela minha habilidade de trabalhar em equipe, e, quando necessário, consigo assumir
          funções de gestão de equipe.</Paragraph>
        <Paragraph>          Além disso, sou aluno do curso de Ciência da Computação com foco na licenciatura e tenho
          um forte interesse na área de desenvolvimento de sistemas web e mobile. Meu objetivo é aplicar
          e aprimorar meus conhecimentos em prol da instituição empregadora, visando o crescimento
          profissional. Estou ansioso para continuar contribuindo com minha experiência e habilidades,
          enquanto a empresa me fornece os recursos tecnológicos e humanos necessários para alcançar
          meu potencial máximo.</Paragraph>
        <Box align="center" my={4}>
          <NextLink legacyBehavior href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" >
              Meu Portifolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Nasci em Brasilia, Brasil.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Trabalhei como estagiario no Banco do Brasil
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Trabalhei como estagiario e fui logo efetivado para Desenvolvedor
          Junior Back-end na CentralIT
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Finalizei o curso de Sistema de Informacao no IESB
        </BioSection>
        <BioSection>
          <BioYear>2022 ate o presente</BioYear>
          Trabalho como Desenvolvedor Fullstack na empresa TOQ solucoes
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Eu ♡
        </Heading>

        <Paragraph>
          <Link href="https://open.spotify.com/user/artefs?si=1b9103af5b534b84">
            Musicas
          </Link>
          , Games, Animes, Desenhos,
          <Link href="https://open.spotify.com/user/artefs?si=1b9103af5b534b84">
            Fotografia
          </Link>
          , Tecnologia.
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page
