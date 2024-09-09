"use client";
import { Line } from 'react-chartjs-2';
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
import {tr} from "date-fns/locale";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const data: {
    datasets: { fill:string, borderWidth: number, borderColor: string; backgroundColor: string; tension: number; data: number[]; }[];
    labels: string[];
} = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            data: [65, 59, 80, 81, 56],
            borderWidth: 2,
            fill:'origin',
            backgroundColor: '#eb9360',
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.3,
        },
    ],
};
const options = {
    maintainAspectRatio: false,
    scales: {
        x: {
            display: false, // Hide X axis labels
            grid: {
                display: false, // Hide grid lines on X axis
            },
        },
        y: {
            display: false, // Hide Y axis labels
            grid: {
                display: false, // Hide grid lines on Y axis
            },
        },
    },
    plugins: {
        legend: {
            display: false, // Hide legend
        },
        title: {
            display: false, // Hide title
        },
        tooltip: {
            enabled: false, // Disable tooltips
        },
    },
};

const LineGraph = () => {
    return (
        <div className={'w-full h-[100px]'}>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineGraph;
