import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './menu.css';
import api_url from '../../../credentials.js';

const Menu = () => {
    const daysOfWeek = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    const currentDay = daysOfWeek[new Date().getDay()];
    const [data, setData] = useState([]);

    const getData = async () => {
        const resp = await api_url.get('menu');
        setData(resp.data);
    }

    useEffect(() => {
        getData();
    }, []); //<-- with these [], the hook will only run on the first render.

    const todaysMenu = data.find(menu => menu.ID === daysOfWeek.indexOf(currentDay));

    return (
        <>
            <div className='menu-cont'>
                <div className='card'>
                    <div className="card-body card-menu">
                        <h5 className="card-title">{currentDay}'S MENU:</h5>
                        <div>
                            <h5 className="card-subtitle mb-2 text-body-secondary">
                                {todaysMenu ? todaysMenu.OptionOne : 'N/A'}
                            </h5>
                            <h5 className="card-subtitle mb-2 text-body-secondary">
                                {todaysMenu ? todaysMenu.OptionTwo : 'N/A'}
                            </h5>
                            <h5 className="card-subtitle mb-2 text-body-secondary">
                                {todaysMenu ? todaysMenu.SideOne : 'N/A'}
                            </h5>
                            <h5 className="card-subtitle mb-2 text-body-secondary">
                                {todaysMenu ? todaysMenu.SideTwo : 'N/A'}
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menu;
