import React from "react";
import { Box } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Box
      d='flex'
      w='100vw'
      h='100vh'
      alignItems='center'
      justifyContent='center'
    >
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='#ffcc02'
        size='xl'
      />
    </Box>
  );
};

export default Loader;
