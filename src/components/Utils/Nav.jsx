
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from '../index' 

let navConfig = [
    {
        name: 'Start',
        route: '/',
        color: 'bg-black text-white'
    },
    {
        name: 'Color',
        route: '/color',
        color: 'bg-yellow-500'
    },
    {
        name: 'Font',
        route: '/font',
        color: 'bg-gray-100'
    },
    {
        name: 'Spacing',
        route: '/spacing',
        color: 'bg-zwave-300'
    },
    {
        name: 'Border',
        route: '/border',
        color: 'bg-enocean-300'
    },
    {
        name: 'Grid',
        route: '/grid',
        color: 'bg-zigbee-300'
    },
    {
        name: 'Breakpoint',
        route: '/breakpoint',
        color: 'bg-pink-300'
    },
    {
        name: 'Overview',
        route: '/overview',
        color: 'bg-black text-white'
    }
]
export function Nav() {
    console.log(useLocation());
    let location = useLocation();
    location

    return <Container>
        <nav>
            <ul className="flex flex-wrap gap-x-md gap-y-sm">
                {
                    navConfig.map((item, index) => (
                        <li className={`py-xs px-sm cursor-pointer border border-black ${location.pathname === item.route ? item.color : ''}`} key={index}>
                            <Link to={item.route}>{item.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    </Container>
};
