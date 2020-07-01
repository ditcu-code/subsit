import React, { useState } from 'react'
import {Col, Row} from "antd";
import '../../assets/styles/ChartBar.scss';
import { Typography } from 'antd';
import { Calendar, Alert } from 'antd';
import moment from 'moment';
import '../../assets/styles/CalendarAuth.scss'
const { Title } = Typography;

const CalendarAuth = () => {
    const [date, setdate] = useState({
        value: moment('2017-01-25'),
        selectedValue: moment('2017-01-25'),
    })

    const onSelect = value => {
        setdate({
          value,
          selectedValue: value,
        })
    }

    const onPanelChange = value => {
        setdate({ value });
    }

    return (
        <div>
            <Row style={{marginTop:'2rem'}} className='calendarauth'>
                <Col span={2}>
                </Col>
                <Col span={13}>
                    <Calendar value={date.value} onSelect={onSelect} onPanelChange={onPanelChange} />
                </Col>
                <Col span={1}>
                </Col>
                <Col span={6} className='data-col'>
                    <Col style={{margin: '1.5em 2em'}}>
                        <Title level={4} style={{marginBottom: '1em'}}>Transaction</Title>
                        <Alert
                        message={`You selected date: ${date.selectedValue && date.selectedValue.format('YYYY-MM-DD')}`}
                        />
                    </Col>
                </Col>
            </Row>
        </div>
    )
}

export default CalendarAuth