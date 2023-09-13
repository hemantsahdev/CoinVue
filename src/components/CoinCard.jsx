import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CoinCard = ({ id,name, image, symbol, price,currencySymbol }) => {
  return (
    <div>
      {/* all this will be clickable and we are using a tag because it is an external link */}
      <Link to={"/coins/"+id}>
        <VStack
          w={"52"}
          shadow={"lg"}
          p={"8"}
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
            {symbol}
          </Heading>
          <Text noOfLines={"1"}>{name}</Text>
          {/*                    agar price hai toh symbol+price dikha do nhi toh NA */}
          <Text noOfLines={"1"}>
            {price ? `${currencySymbol}${price}` : "NA"}
          </Text>
        </VStack>
      </Link>
    </div>
  );
};

export default CoinCard;
