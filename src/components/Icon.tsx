import React from 'react';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { SiPython, SiGo, SiRubyonrails, SiTypescript } from 'react-icons/si';
import { BiLogoTypescript } from "react-icons/bi";
import { FiDatabase } from "react-icons/fi";
import { DiNodejs } from "react-icons/di";




const ICON_TYPES: { [key: string]: React.ReactNode; } = {
  "FaHtml5": <FaHtml5 className='icon' />,
  "FaJs": <FaJs className='icon' />,
  "SiNodedotjs": <div className='multi-icon-container'><BiLogoTypescript className='icon' /><DiNodejs className='icon' /></div>,
  "FaReact": <FaReact className='icon' />,
  "SiGo": <SiGo className='icon bb' />,
  "Ruby": <SiRubyonrails className='icon bb' />,
  "SiPython": <SiPython className='icon' />,
  "FiDatabase": <FiDatabase className='icon' />
};

const Icon = ({ type }: { type: string; }) => <>{ICON_TYPES[type]}</>;

export default Icon;
