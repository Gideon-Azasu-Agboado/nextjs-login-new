import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [4000, 5000, 6000, 8000, 10000, 15000],
            backgroundColor: '#4f46e5',
        }
    ],
};

const BarChart = () => {
    return (
        <div>
            <Bar
                data={data}
                width={100}
                height={400}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    )
}

export default BarChart;