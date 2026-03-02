import React, { useState } from "react";
import { benefits } from "../data/benefitsData";

type TabKey = "professionals" | "organisations";

const AudienceTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("professionals");

  const tabs = [
    { key: "professionals", label: "For Sales Professionals" },
    { key: "organisations", label: "For Sales Organisations" },
  ];

  const content = benefits[activeTab];

  return (
    <section className="relative py-24 overflow-hidden">
      
      {/* Background Image / Texture */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80)",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-spi-primary/90 via-spi-primary/80 to-spi-primary/60" />

      {/* Content Layer */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-10">
            
            {/* Tabs */}
            <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-slate-200">
              <div role="tablist" className="flex md:flex-col">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.key;

                  return (
                    <button
                      key={tab.key}
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveTab(tab.key as TabKey)}
                      className={`
                        text-left px-6 py-4 font-semibold transition-all duration-200
                        border-b-2 md:border-b-0 md:border-l-4
                        ${
                          isActive
                            ? "bg-spi-primary/10 text-spi-primary border-spi-primary"
                            : "border-transparent text-slate-600 hover:bg-slate-50"
                        }
                      `}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Panel */}
            <div role="tabpanel" className="md:w-2/3">
              <div key={activeTab} className="space-y-8 animate-fade-in">
                {content.map((item, index) => (
                  <div key={index}>
                    <h3 className="text-xl md:text-2xl font-bold text-spi-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(AudienceTabs);