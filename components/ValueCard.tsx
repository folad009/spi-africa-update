import React from 'react';

interface Props {
  title: string;
  text: string;
}

const ValueCard: React.FC<Props> = ({ title, text }) => (
  <div className="value-card bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all duration-300">
    <h4 className="text-2xl font-bold mb-4">{title}</h4>
    <p className="text-slate-400 leading-relaxed">{text}</p>
  </div>
);

export default ValueCard;