import { Box, Heading } from '@chakra-ui/react';


export default function Reviews() {
  return (
    <Box bg={"rgb(255,240,184)"} textAlign="center" py={10} px={6}>
      <Heading as="h2" size="xl" mt={6} mb={6}>
      Read Hundreds of Reviews
      </Heading>
      <img style={{margin:'auto'}} src="https://tmetric.com/media/rt1k0zjc/img-rating-4-5.svg" alt="" srcset="" />
      <Heading as="h2" size="xl" mt={6} mb={6}>
      4.5 Customer Rating
      </Heading>
      <Heading color={'rgb(48,112,240)'} as="h2" size="xl" mt={6} mb={6}>
      242 Reviews
      </Heading>
      
    </Box>
  );
}