

import React from 'react';
import {NavIconButton, NavIcon, Text} from '../../index'
import { navItems } from './Nav.config'

export function Nav() {
    return <nav className="bg-black w-full md:grid md:grid-cols-md md:gap-md lg:block lg:py-md lg:h-full lg:col-start-1 xl:col-span-2">
        <ul className="flex w-full justify-between md:col-start-2 md:col-span-2 lg:flex-col">
            {navItems.map((navItem, index) => (
                <li className="lg:mb-sm lg:last:mb-0" key={index}>
                    <NavIconButton>
                        <NavIcon type={navItem.type}></NavIcon>
                        <Text colorClass="white">{navItem.text}</Text>
                    </NavIconButton>
                </li>
            ))}
        </ul>
    </nav>
};