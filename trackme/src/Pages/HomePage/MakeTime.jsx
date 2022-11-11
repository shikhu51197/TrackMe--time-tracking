import { Box, Button, Heading, Text } from '@chakra-ui/react';


export default function MakeTime() {
  return (
    <Box bg={"rgb(65,51,143)"} textAlign="center" py={10} px={6}>
      <Heading color={"white"} as="h2" size="2xl" mt={6} mb={6}>
      Make time work for you!
      </Heading>
      <Button
            // mt={"20px"} 
            backgroundColor='white' 
            _hover={{ backgroundColor: 'white' }} 
            color={"black"} 
            size='lg' 
            fontSize={'md'}
            paddingX={"60px"}
        >
            Start Free Trial
    </Button>
      <Text color={'white'} as="h2" size="xl" mt={6} mb={6}>
      Powered by  A software vendor with 20 years of experience.
      </Text>
      
    </Box>
  );
}