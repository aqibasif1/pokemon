import React from "react";
import { Text, ScaleFade, Heading } from "@chakra-ui/react";

const DetailsTopSection = ({ pokemon }) => {
  const capitalize = (str) => (str ? str[0].toUpperCase() + str.slice(1) : "");

  return (
    <ScaleFade in={true} initialScale={0.9}>
      <Heading textAlign='center' mb={6} size='2xl'>
        {capitalize(pokemon?.name)}
      </Heading>

      <Text textAlign='center'>
        <b>Weight:</b> {pokemon?.weight}
      </Text>
      <Text textAlign='center'>
        <b>Height:</b> {pokemon?.height}
      </Text>
      <Text textAlign='center' mb={6}>
        <b>Order:</b> {pokemon?.order}
      </Text>
    </ScaleFade>
  );
};

export default DetailsTopSection;
