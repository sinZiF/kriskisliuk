'use client'

import { IconContext } from "react-icons";

// nextjs component
import Link from "next/link";
// react hook
import { useState, useEffect } from "react";
// icons
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
//local font
import LocalFontTitleLayout from "@/ui/local-fonts/localFontTitleLayout";
import LocalFontLayout from "@/ui/local-fonts/localFontLayout";
import TextLogo from "@/ui/textLogo/TextLogo";

export default function Navbar() {
    type NavigationType = {
        name: string;
        id: string;
    }
    const navigationLinks: Array<NavigationType> = [
        {
            name: 'обо мне',
            id: '#about'
        },
        {
            name: 'услуги',
            id: '#services'
        },
        {
            name: 'кейсы',
            id: '#cases'
        },
        {
            name: 'отзывы',
            id: '#opinions'
        },
        {
            name: 'контакты',
            id: '#contacts'
        }
    ];

    return (
    <LocalFontLayout classNameSection={`bg-color-main-red relative`}>
        <LocalFontTitleLayout >
            {'S'}
        </LocalFontTitleLayout>
    </LocalFontLayout>
    )
}