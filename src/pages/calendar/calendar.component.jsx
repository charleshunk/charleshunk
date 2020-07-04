import React from 'react';

import './calendar.styles.scss';

import CALENDAR_DATA from './calendar.data';
import RACE_DATA from './race.data';

import worldMap from '../../images/world-map.png';

const bubble = ['BEFORE','2017','2018','2019','2020'];

const CalendarPage = () => {
    return(
        <div className='calendar-page'>
            <div className='left-half'>
                <h1 className='year-name'>2020</h1>
                <div className='central-calendar-block'>
                    <span className='left-arrow' >&#9001;</span>
                    <div className='actual-calendar'>
                        {
                            CALENDAR_DATA.map((month, id) => (
                                <div className='month' key={id}>
                                    <h4 className='month-name'>
                                        {month.month}
                                    </h4>
                                </div>
                            ))
                        }
                    </div>
                    <span className='right-arrow' >&#9002;</span>
                </div>
                <div className='annual-pointer'>
                    {
                        bubble.map((year, id) => (
                            <div className='bubble' key={id}></div>
                        ))
                    }
                </div>
            </div>
            <div className='right-half'>
                <div className='world-map-container'>
                    <img className='world-map' src={worldMap} alt='World Map'/>
                    <div className='race-location'></div>
                </div>
                <div className='race-description'>

                </div>
            </div>
        </div>
    )
};

export default CalendarPage;