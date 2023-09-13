/* eslint-disable react/prop-types */
import { Badge, HStack, Progress, Text, VStack } from '@chakra-ui/react';

const CustomBar = ({ coinData, currency, currencySymbol }) => {
  return (
    <VStack w={"full"}>
      <Progress
        colorScheme="green"
        size="sm"
        value={coinData.market_data.current_price[currency]}
        w={"full"}
        max={coinData.market_data.high_24h[currency]}
        min={coinData.market_data.low_24h[currency]}
        border={"2px"}
        height={"17px"}
        borderColor={"gray.300"}
        borderRadius={"10"}
      />
      <HStack justifyContent={"space-between"} w={"full"}>
        <Badge colorScheme="red">{`${currencySymbol}${coinData.market_data.low_24h[currency]}`}</Badge>
        <Text colorScheme="blue">24Hr Range</Text>
        <Badge colorScheme="green">
          {`${currencySymbol}${coinData.market_data.high_24h[currency]}`}
        </Badge>
      </HStack>
    </VStack>
  );
};

export default CustomBar