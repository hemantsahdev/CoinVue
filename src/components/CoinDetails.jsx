// this when we click on a file


import { Badge, Box, Button, Container, HStack, Image,   Text, VStack } from '@chakra-ui/react'
import  { useEffect, useState } from 'react'
import Loader from './Loader'
import axios from 'axios';
import {server} from '../main';
import { useParams } from 'react-router-dom';
import Error from './Error';
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,

} from '@chakra-ui/react'
import CustomBar from './CustomBar';
import Chart from './Chart';

const CoinDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [coinData, setCoinData] = useState("");
  const [currency, setCurrency] = useState("inr");
  const [chartData, setChartData] = useState([]);
  // string type by default in api documentation
  const [days, setDays] = useState("24h");

  const currencySymbol =
    currency === "inr"
      ? "₹"
      : currency === "usd"
      ? "$"
      : currency === "eur"
      ? "€"
      : "$";
  // buttons options
  const buttons = ["24h", "7d", "14d", "30d", "60d", "200d", "1y", "max"];

  const handleBtnClick = (key) => {
    switch (key) {
      case "24h":
        setDays("24h");
        setLoading(true);
        break;
      case "7d":
        setDays("7d");
        setLoading(true);
        break;
      case "14d":
        setDays("14d");
        setLoading(true);
        break;
      case "30d":
        setDays("30d");
        setLoading(true);
        break;
      case "60d":
        setDays("60d");
        setLoading(true);
        break;
      case "200d":
        setDays("200d");
        setLoading(true);
        break;
      case "1y":
        setDays("365d");
        setLoading(true);
        break;
      case "max":
        setDays("max");
        setLoading(true);
        break;

      default:
        setDays("24h");
        break;
    }
  };

  useEffect(() => {
    async function fetchCoinData() {
      try {
        const { data } = await axios.get(`${server}/coins/${id}`);
        const res = await axios.get(
          `${server}/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`
        );
        console.log('bye')

        // giving only prices for now (prices,marketCap,total_vol)
        setChartData(res.data.prices);
        setCoinData(data);
        setLoading(false);

      } catch (err) {
        setError(true);
        setLoading(false);
      }
    }

    fetchCoinData();
  }, [id,currency,days]);

  if (error) {
    return <Error />;
  }

  if (loading) {
    console.log("hello");
    return <Loader />;
  }
  

  return (
    <Container maxW={"container.xl"}>
      <Box w={"full"} borderWidth={1}>
        <Chart currency={currency} arr={chartData} days={days} />
      </Box>

      {/* Buttons */}
      <HStack p={'4'} overflowX={'auto'} justifyContent={'center'}>
        {buttons.map((btn) => {
          return (
            <Button
              key={btn}
              bgColor={"gray.300"}
              mr={3}
              onClick={() => handleBtnClick(btn)}
            >
              {btn}
            </Button>
          );
        })}
      </HStack>

      <VStack spacing={"4"} p={"16"} alignItems={"flex-start"}>
        <Text fontSize={"small"} alignSelf={"center"} opacity={"0.7"}>
          Last Updated On{" "}
          {Date(coinData.market_data.last_updated).split("G")[0]}
        </Text>
        <Image
          src={coinData.image.large}
          w={"16"}
          h={"16"}
          objectFit={"contain"}
        />
        <Stat>
          <StatLabel>{coinData.name}</StatLabel>
          <StatNumber>
            {currencySymbol} {coinData.market_data.current_price[currency]}
          </StatNumber>
          <StatHelpText>
            <StatArrow
              type={
                coinData.market_data.price_change_percentage_1h_in_currency[
                  currency
                ] > 0
                  ? "increase"
                  : "decrease"
              }
            />
            {
              coinData.market_data.price_change_percentage_1h_in_currency[
                currency
              ]
            }{" "}
            %
          </StatHelpText>
        </Stat>

        <Badge fontSize={"2xl"} bgColor={"blackAlpha.800"} color={"white"}>
          #{coinData.market_cap_rank}
        </Badge>
        <CustomBar
          coinData={coinData}
          currency={currency}
          currencySymbol={currencySymbol}
        />

        <Box w={"full"} p={"4"}>
          <Item title={"Max Supply"} value={coinData.market_data.max_supply} />
          <Item
            title={"Circulating Supply"}
            value={coinData.market_data.circulating_supply}
          />

          <Item
            title={"Market Cap"}
            value={`${currencySymbol}${coinData.market_data.market_cap[currency]}`}
          />
          <Item
            // ath
            title={"All Time High"}
            value={`${currencySymbol}${coinData.market_data.ath[currency]}`}
          />
          <Item
            // atl
            title={"All Time Low"}
            value={`${currencySymbol}${coinData.market_data.atl[currency]}`}
          />
          <Item
            // atl
            title={"All Time Low"}
            value={`${currencySymbol}${coinData.market_data.total_volume[currency]}`}
          />
        </Box>
      </VStack>
    </Container>
  );
}

const Item=({title,value})=>(
  <HStack justifyContent={'space-between'} w={'full'} my={'4'} >
    <Text fontFamily={'Bebas Neue'} letterSpacing={'widest'} >{title}</Text>
    <Text>{value}</Text>
  </HStack>
)


export default CoinDetails