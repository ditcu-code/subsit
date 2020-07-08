import React,  { useState, useEffect } from 'react'
import {Col, Row, Space, Spin, Skeleton, Divider, Statistic} from "antd";
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
        //   {
        //     // label: 'Spending',
        //     backgroundColor: 'rgb(144, 88, 234, 0.0)',
        //     borderColor: 'rgba(0,0,0,0.2)',
        //     borderWidth: 1,
        //     pointRadius: '3',
        //     pointHoverRadius: '5',
        //     data: [100, 100, 70, 80, 80, 80, 60, 70, 80, 80]
        //   }
        ]
    }
    const [loading, setloading] = useState(true)
    const data = state.datasets[0].data
    const totaldata = state.datasets[0].data.reduce((total, num) => total + num )
    const averagedata = state.datasets[0].data.reduce((total, num) => total + num)/state.datasets[0].data.length
    const last3month = state.datasets[0].data.slice(-3).reduce((total, num) => total + num)

    useEffect(() => {
        setInterval(() => {            
            setloading(false)
        }, 2000);
    }, [])

    const HistoryItem = data.map(item =>
        <Col key={item.id} className='history-item' >
            <Col  style={{paddingLeft:'10px'}}>
                {loading !== true ? <div><p>Bulan</p> <h3> USD {item}</h3></div> : <Skeleton active paragraph={{ rows: 1 }} /> }
            </Col>
        </Col>
        )
    
    const LoadingIcon = (
        <Row style={{marginTop:'2rem'}} className='chartbar-wrap'>
            <Col span={2}>
            </Col>
            <Col span={7}>
            </Col>
            <Col span={7} style={{marginTop:'15%'}}>
                    <Space size="middle">
                        <Spin size="large" style={{color:'red'}} />
                    </Space>
            </Col>
            <Col span={6} className='data-col'>
                <Col style={{margin: '1.5em 2em'}}>
                    <Title level={4} style={{marginBottom: '1em'}}>Transaction</Title>
                    {HistoryItem}
                </Col>
            </Col>
        </Row>
    )    

    const ChartBarJs = (
        <Row style={{marginTop:'2rem'}} className='chartbar-wrap'>
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
                <Divider/>
                <Row>
                    <Col span={6}>
                        <Col className='statistic-card'>
                            <Statistic title="Total Spending" value={`USD ${totaldata}`}/>
                        </Col>
                    </Col>
                    <Col span={6}>
                        <Col className='statistic-card'>
                            <Statistic title="Monthly Average" value={`USD ${averagedata}`}/>
                        </Col>
                    </Col>
                    <Col span={6}>
                        <Col className='statistic-card'>
                            <Statistic title="Last 3 Months" value={`USD ${last3month}`}/>
                        </Col>
                    </Col>
                    <Col span={6}>
                        <Col className='statistic-card'>
                            <Statistic title="Most Spending" value={'Netflix'}/>
                        </Col>
                    </Col>
                </Row>
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
    )

    return (
        <div>
            {loading !== true ? ChartBarJs : LoadingIcon }
        </div>
    )
}

export default ChartBar