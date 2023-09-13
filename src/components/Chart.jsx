import{Line} from 'react-chartjs-2';
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



const Chart = ({arr=[],currency,days}) => {

    const prices=[];
    const date = [];

    console.log(days);

   for (let i = 0; i < arr.length; i++) {

    if(days==='24h'){
        date.push(new Date(arr[i][0]).toLocaleTimeString());
    }
    else{
      // this is not good for 24gr format as it shows the same date everywhere
      date.push(new Date(arr[i][0]).toLocaleDateString());
    }
    prices.push(arr[i][1])

   }


  return (
    <Line
      options={{
        responsive: true,
      }}
      data={{
        labels: date,
        datasets: [
          {
            label: `Price in ${currency}`,
            data: prices,
            borderColor: "rgb(255,99,132)",
            backgroundColor: "rgb(255,99,132,0.5)",
            tension:0.1,
            pointRadius:0.1,
            borderWidth:3,
            pointHitRadius:20,
            

          },
        ],
      }}
    />
  );
}

export default Chart