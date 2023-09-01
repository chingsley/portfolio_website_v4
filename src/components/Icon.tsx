import React from 'react';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { SiPython, SiNodedotjs, SiGo, SiRubyonrails } from 'react-icons/si';

const ICON_TYPES: { [key: string]: React.ReactNode; } = {
  "FaHtml5": <FaHtml5 className='icon' />,
  "FaJs": <FaJs className='icon' />,
  "SiNodedotjs": <SiNodedotjs className='icon' />,
  "FaReact": <FaReact className='icon' />,
  "SiGo": <SiGo className='icon bb' />,
  "Ruby": <SiRubyonrails className='icon bb' />,
  "SiPython": <SiPython className='icon' />,
};

const Icon = ({ type }: { type: string; }) => <>{ICON_TYPES[type]}</>;

export default Icon;
