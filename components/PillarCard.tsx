import React from 'react'

type Props = {
  title: string;
  description: string;
};

const PillarCard: React.FC<Props> = ({ title, description }) => {
  return (
    <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100">
      <h4 className="text-xl font-bold text-spi-primary mb-4">{title}</h4>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default React.memo(PillarCard);