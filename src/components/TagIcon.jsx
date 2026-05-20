import React from 'react';
import { 
  SiReact, 
  SiTypescript, 
  SiJavascript, 
  SiNodedotjs, 
  SiMongodb, 
  SiGit,
  SiGithub,
  SiJest,
  SiTailwindcss,
  SiFirebase,
  SiSelenium,
  SiRedux,
  SiGraphql,
  SiAndroidstudio,
  SiApple,
  SiAsana
} from 'react-icons/si';
import { DiJava, DiAndroid } from 'react-icons/di';
import { TbApi, TbBrandKotlin, TbBrandHtml5, TbBrandCss3, TbBrandVite, TbDatabase } from 'react-icons/tb';
import { BiNetworkChart, BiMobile, BiMessageDetail } from 'react-icons/bi';
import { FiVideo, FiBell, FiTool, FiActivity } from 'react-icons/fi';
import { FaRocket } from 'react-icons/fa';

export const getSkillIcon = (skill) => {
  const s = skill.toLowerCase();
  
  if (s === 'react native' || s === 'react') return <SiReact />;
  if (s === 'typescript') return <SiTypescript />;
  if (s === 'javascript') return <SiJavascript />;
  if (s === 'node.js') return <SiNodedotjs />;
  if (s === 'mongodb') return <SiMongodb />;
  if (s === 'realm db') return <TbDatabase />;
  if (s === 'git') return <SiGit />;
  if (s === 'github') return <SiGithub />;
  if (s === 'jest') return <SiJest />;
  if (s === 'html') return <TbBrandHtml5 />;
  if (s === 'css') return <TbBrandCss3 />;
  if (s === 'vite') return <TbBrandVite />;
  if (s === 'tailwind') return <SiTailwindcss />;
  if (s === 'firebase' || s.includes('firebase')) return <SiFirebase />;
  if (s === 'appium') return <BiMobile />;
  if (s === 'selenium') return <SiSelenium />;
  if (s === 'redux') return <SiRedux />;
  if (s === 'graphql') return <SiGraphql />;
  if (s === 'expo') return <FaRocket />;
  if (s === 'native android' || s === 'android') return <DiAndroid />;
  if (s === 'java') return <DiJava size={18} />;
  if (s === 'kotlin') return <TbBrandKotlin />;
  if (s === 'xml') return <TbBrandHtml5 />; 
  if (s === 'rest apis') return <TbApi />;
  if (s === 'retrofit') return <BiNetworkChart />;
  if (s === 'sqlite' || s === 'roomdb') return <TbDatabase />;
  if (s === 'fcm' || s === 'apns' || s.includes('notification')) return <FiBell />;
  if (s === 'android studio') return <SiAndroidstudio />;
  if (s === 'vs code') return <FiTool />;
  if (s === 'gitlab') return <SiGit />;
  if (s === 'vsts') return <SiApple />;
  if (s === 'asana') return <SiAsana />;
  if (s === 'telemetry' || s === 'logging' || s.includes('trace')) return <FiActivity />;
  if (s === 'zoom sdk' || s === 'daily sdk' || s === 'video') return <FiVideo />;
  if (s === 'sockets' || s === 'voip' || s === 'chat') return <BiMessageDetail />;
  if (s === 'mobile development') return <BiMobile />;
  if (s === 'backend integration') return <TbApi />;
  if (s === 'monitoring') return <FiActivity />;

  return <FiTool />; // Default
};
