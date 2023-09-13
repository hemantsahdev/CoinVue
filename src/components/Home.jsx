import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import crypto from "../assets/crypto.jpg";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"124vh"} marginTop={"-232px"} >
      <Image w={"full"} h={"full"} src={crypto} />
      <Text
        fontSize={"6xl"}
        fontWeight={'bold'}
        color={"white"}
        position={'absolute'}
        top={'150px'}
        left={'40px'}
        as={'i'}
        
      >
       Coin ViewEr
      </Text>
    </Box>
  );
};

export default Home;
