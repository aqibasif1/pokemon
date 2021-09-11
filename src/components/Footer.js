import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      d='flex'
      justifyContent='center'
      mt={45}
      px={5}
      py={10}
      boxShadow=' rgba(33, 35, 38, 0.1) 0px -10px 10px -10px'
    >
      <Text fontSize='10px' color='blackAlpha.700'>
        Designed and Developed by{" "}
        <strong>
          <a
            href='https://aqibasif.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            Muhammad Aqib Asif
          </a>
        </strong>
      </Text>
    </Box>
  );
};

export default Footer;
