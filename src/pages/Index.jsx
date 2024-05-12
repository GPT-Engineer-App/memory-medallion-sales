import { Box, Button, Container, Grid, Image, Text, VStack, Heading, useColorModeValue } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const medallions = [
  {
    id: 1,
    name: "Médaillon Classique",
    description: "Un médaillon élégant et sobre pour garder vos souvenirs proches de vous.",
    price: "20€",
    image: "https://images.unsplash.com/photo-1516771317026-14d76f5396e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwbWVkYWxsaW9ufGVufDB8fHx8MTcxNTQ4MzI1NHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Médaillon Vintage",
    description: "Parfait pour ceux qui aiment le style rétro, avec une touche d'histoire.",
    price: "25€",
    image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbWVkYWxsaW9ufGVufDB8fHx8MTcxNTQ4MzI1NHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Médaillon Moderne",
    description: "Un design moderne pour ceux qui préfèrent un look contemporain.",
    price: "30€",
    image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRhbGxpb258ZW58MHx8fHwxNzE1NDgzMjU1fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const bg = useColorModeValue("gray.100", "gray.700");

  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={5}>
        <Heading as="h1" size="xl" textAlign="center">
          Boutique de Médaillons
        </Heading>
        <Text>Bienvenue dans notre boutique spécialisée dans la vente de médaillons personnalisables.</Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {medallions.map((medallion) => (
            <Box key={medallion.id} p={5} shadow="md" borderWidth="1px" bg={bg} borderRadius="lg">
              <Image src={medallion.image} alt={medallion.name} borderRadius="md" />
              <VStack align="stretch" mt={4}>
                <Text fontWeight="bold" fontSize="lg">
                  {medallion.name}
                </Text>
                <Text fontSize="sm">{medallion.description}</Text>
                <Text fontSize="md" color="green.500">
                  {medallion.price}
                </Text>
                <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid">
                  Acheter
                </Button>
              </VStack>
            </Box>
          ))}
        </Grid>
      </VStack>
    </Container>
  );
};

export default Index;
