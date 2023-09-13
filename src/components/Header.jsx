import { Button, HStack, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <HStack
      p={"4"}
      shadow={"base"}
      bgColor={"blackAlpha.900"}
      justifyContent={"flex-start"}
      gap={15}
    
    >
      <Button variant={"ghost"} colorScheme="blackAlpha">
        <Link to={"/"}>
          <Text fontSize={"3xl"} color={"whiteAlpha.600"}>
            Home
          </Text>
        </Link>
      </Button>

      <Button variant={"ghost"} colorScheme="blackAlpha" >
        <Link to={"/exchanges"}>
          <Text fontSize={"3xl"} color={"whiteAlpha.600"}>
            Exchanges
          </Text>
        </Link>
      </Button>
      <Button variant={"ghost"} colorScheme="blackAlpha" >
        <Link to={"/coins"}>
          <Text fontSize={"3xl"} color={"whiteAlpha.600"}>
            Coins
          </Text>
        </Link>
      </Button>
    </HStack>
  );
}

export default Header