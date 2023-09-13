import axios from 'axios';
import { useEffect, useState } from 'react';
import {server} from "../main";
import Loader from './Loader';
import { Container, HStack } from '@chakra-ui/react';
import ExchangeCard from './ExchangeCard';
import Error from './Error';

const Exchanges = () => {

    const [exchanges, setExchanges] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    useEffect(()=>{
        
        async function fetchChanges(){
            try{
                const {data}=await axios.get(`${server}/exchanges`)

            console.log(data);
            setExchanges(data);
            setLoading(false);
            }
            catch(err){
                setError(true);
                setLoading(false);

            }
            
        }
        fetchChanges();

    },[])

    if(error){
        return <Error message="404 Not Found"/>
    }

    if(loading){
        return(
            <Loader/>
        )
    }

  return (
    <>
      <Container maxW={'full'} bgColor={'blackAlpha.900'}>
        <Container maxW={"container.xl"}>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {exchanges.map((comp) => {
              return (
                <ExchangeCard
                  key={comp.id}
                  name={comp.name}
                  image={comp.image}
                  rank={comp.trust_score_rank}
                  url={comp.url}
                  tradeVol={comp.trade_volume_24h_btc}
                />
              );
            })}
          </HStack>
        </Container>
      </Container>
    </>
  );
}

export default Exchanges