import axios from "axios";
import { useEffect, useState } from "react";
import { server } from "../main";
import Loader from "./Loader";
import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import CoinCard from "./CoinCard";
import Error from "./Error";
import { Pagination } from "@mui/material";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState('inr');

  useEffect(() => {
    async function fetchChanges() {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );

        console.log(data[0]);
        setCoins(data);
        setLoading(false);
      } 
      catch (err) {
        setError(true);
        setLoading(false);
      }
    }
   
      fetchChanges();

   
  }, [currency,page]);
  
  
  const currencySymbol =
    currency === "inr"
      ? "₹"
      : currency === "usd"
      ? "$"
      : currency === "eur"
      ? "€"
      : "$";

  const changePage=(page)=>{
    setPage(page);
    setLoading(true);
  }

  const pageBtns=new Array(132).fill(1);


  if (error) {
    return <Error message="404 Not Found while fetching coins" />;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Container maxW={"container.xl"}>
        <RadioGroup value={currency}>
          <HStack spacing={5} direction="row">
            <Radio
              colorScheme="red"
              value="inr"
              onChange={(e) => setCurrency(e.target.value)}
            >
              ₹INR
            </Radio>
            <Radio
              colorScheme="green"
              value="usd"
              onChange={(e) => setCurrency(e.target.value)}
            >
              $USD
            </Radio>
            <Radio
              colorScheme="blue"
              value="eur"
              onChange={(e) => setCurrency(e.target.value)}
            >
              €EUR
            </Radio>
          </HStack>
        </RadioGroup>
        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
          {coins.map((coin) => {
            return (
              <CoinCard
                key={coin.id}
                id={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                price={coin.current_price}
                currencySymbol={currencySymbol}
              />
            );
          })}
        </HStack>

        <HStack w={"full"} overflow={"auto"} p={"8"}>
          {pageBtns.map((item, index) => {
            return (
              <Button
                key={index}
                bgColor={"blackAlpha.900"}
                color={"white"}
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </Button>
            );
          })}
        </HStack>
      </Container>
    </>
  );
};

export default Coins;
