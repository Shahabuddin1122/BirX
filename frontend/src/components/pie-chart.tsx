import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ["Customer", "Business"],
    datasets: [
        {
            data: [12, 29],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderWidth: 1,
        },
    ],
};
const PieChart = () => {
    return (
        <>
            <div className={'w-full h-[200px] flex justify-center'}>
                <Pie data={data} />
            </div>
        </>
    )
}
export default PieChart;