import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack>
        <Avatar boxSize={'28'} mt={['4','0']} />
        <Text>Me! The Developer</Text>
        </VStack>
        <VStack>

        </VStack>
      </Stack>
    </Box>
  );
}

export default Footer