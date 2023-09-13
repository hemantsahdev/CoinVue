import { Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const ExchangeCard = ({ name, image, rank, url }) => {
  return (
    <div>
      {/* all this will be clickable and we are using <a> tag because it is an external link */}
      <a href={url} target={"blank"}>
        <VStack
          w={"52"}
          border={'2px'}
          borderColor={'goldenrod'}
          bg={'white'}
          p={"8"}
          bgColor={"whiteAlpha.900"}
          borderRadius={"lg"}
          transition={"all 0.3s"}
          m={"4"}

          css={{
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Image
            src={image}
            w={"10"}
            h={"10"}
            objectFit={"contain"}
            alt={"Exchange"}
          />
          <Heading size={"md"} noOfLines={"1"}>
            #{rank}
          </Heading>

          <Text noOfLines={"1"} fontWeight={"bold"}>
            {name}
          </Text>
         
        </VStack>
      </a>
    </div>
  );
};

export default ExchangeCard