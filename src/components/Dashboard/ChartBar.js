import React from 'react'
import {Col, Row} from "antd";
import {Line} from 'react-chartjs-2';
import '../../assets/styles/ChartBar.scss';
import { Typography } from 'antd';
const { Title } = Typography;

const ChartBar = () => {
    const state = {
        labels: ['January', 'February', 'March',
                 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        datasets: [
          {
            // label: 'Spending',
            backgroundColor: 'rgb(144, 88, 234, 0.2)',
            borderColor: 'rgba(0,0,0,0.2)',
            borderWidth: 1,
            pointRadius: '3',
            pointHoverRadius: '5',
            data: [49, 44, 42, 50, 45, 52, 57, 67, 62, 75]
          }
        ]
    }

    const data = state.datasets[0].data
    console.log(data)

    const HistoryItem = data.map(item =>
        <Col key={item.id} className='history-item' >
            <p>Bulan</p>
            <h3> USD {item}</h3>
        </Col>
        )

    return (
        <div>
            <Row style={{marginTop:'2rem'}}>
                <Col span={2}>
                </Col>
                <Col span={13}>
                    <Line
                    data={state}
                    options={{
                        title:{
                        display:true,
                        // text:'Average Rainfall per month',
                        fontSize:20
                        },
                        legend:{
                        display:false,
                        position:'bottom'
                        }
                    }}
                    />
                </Col>
                <Col span={1}>
                </Col>
                <Col span={6} className='data-col'>
                    <Col style={{margin: '1.5em 2em'}}>
                        <Title level={4} style={{marginBottom: '1em'}}>Transaction</Title>
                        {HistoryItem}
                    </Col>
                </Col>
            </Row>
        </div>
    )
}

export default ChartBar