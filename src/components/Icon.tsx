import React from 'react';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

const ICON_TYPES: { [key: string]: React.ReactNode; } = {
  "FaHtml5": <FaHtml5 className='icon' />,
  "FaJs": <FaJs className='icon' />,
  "FaReact": <FaReact className='icon' />,
  "Go": <i className="fa-brands fa-golang icon"></i>
};

const Icon = ({ type }: { type: string; }) => <>{ICON_TYPES[type]}</>;

export default Icon;
