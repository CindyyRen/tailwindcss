import React, { useState, useEffect } from 'react';
import feature from '../../assets/academic-faculty-positions.png';

const FeatureImage = () => {
  const texts = ['FIND OPPOTUNITY', 'FIND CONNECTIONS', 'FIND FULLFILLNIESS'];
  const [textIndex, setTextIndex] = useState(0);
  // 使用 useEffect 实现动态文本的过渡效果
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // 循环切换
    }, 2000); // 每2秒切换一次
    return () => clearInterval(interval); // 清理定时器
  }, [texts.length]);
  return (
    <div className="relative w-full flex justify-center p-8">
      <img src={feature} alt="Your" className="max-w-full h-auto" />
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-international-orange-500 via-international-orange-100 to-international-orange-500 opacity-50"></div> */}
      <div
        className="absolute top-0 left-0 w-full h-full flex justify-center items-center font-bold text-5xl text-international-orange-900"
        style={{
          background: 'radial-gradient(circle, #ffedd3, #812c0d)',
          opacity: 0.5,
        }}
      >
        {texts[textIndex]}
      </div>
    </div>
  );
};

export default FeatureImage;
