import React from "react";
import { Box } from "@chakra-ui/layout";
import { SlideFade, Heading, List, ListItem, ListIcon } from "@chakra-ui/react";
import { QuestionIcon, StarIcon } from "@chakra-ui/icons";

const AbilitiesAndStats = ({ pokemon }) => {
  return (
    <SlideFade in={true} offsetY='80px'>
      <Box d='flex' flexWrap='wrap' justifyContent='center'>
        <Box
          p={5}
          mx={10}
          my={2}
          w={300}
          maxW={300}
          borderWidth='2px'
          borderRadius='lg'
          borderColor='#ffcc02'
        >
          <Heading size='md' textAlign='center' mb={5}>
            Abilities
          </Heading>

          <List spacing={3}>
            {pokemon.abilities?.map((ab, i) => (
              <ListItem key={i}>
                <ListIcon as={StarIcon} color='#ffcc02' />
                {ab.ability.name}
              </ListItem>
            ))}
          </List>
        </Box>

        <Box
          p={5}
          mx={10}
          my={2}
          w={300}
          maxW={300}
          borderWidth='2px'
          borderRadius='lg'
          borderColor='#ffcc02'
        >
          <Heading size='md' textAlign='center' mb={5}>
            Stats
          </Heading>

          <List spacing={3}>
            {pokemon.stats?.map((ab, i) => (
              <ListItem key={i}>
                <ListIcon as={QuestionIcon} color='green.500' />
                {ab.stat.name}
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </SlideFade>
  );
};

export default AbilitiesAndStats;
