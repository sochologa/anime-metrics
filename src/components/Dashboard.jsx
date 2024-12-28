import React, { useState } from 'react';
import { TrendingUp, Award, Star, Info, User, MessageCircle, Building2 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

// Colors from the image
const colors = {
  blue: '#3772FF',
  magenta: '#FD36FF',
  pink: '#EF70DD',
  green: '#04E824',
  cyan: '#70E4EF',
  dark: '#0D1221',
  white: '#FFFFFF'
};

const iconStyle = {
  color: '#EF70DD',
  filter: 'drop-shadow(0 0 4px rgba(239, 112, 221, 0.6))'
};

const generateYearlyData = (initial, growth, startYear, currentYear) => {
  const years = currentYear - startYear + 1;
  const yearlyGrowthRate = growth / years;
  
  return Array.from({ length: years }, (_, index) => {
    const yearRevenue = initial * (1 + (yearlyGrowthRate * index) / 100);
    return {
      year: startYear + index,
      revenue: parseFloat(yearRevenue.toFixed(1))
    };
  });
};

const AnimeCard = ({ anime }) => {
  const [showDetails, setShowDetails] = useState(false);
  const revenueData = generateYearlyData(anime.initialRevenue, anime.growthPercentage, anime.year, 2024);

  return (
    <div className="rounded-xl p-6 shadow-lg" 
         style={{ 
           backgroundColor: colors.dark,
           border: `2px solid ${colors.blue}`,
         }}>
      <h3 className="text-2xl font-bold mb-4" style={{ color: colors.blue }}>
        {anime.title}
      </h3>
      
      <div className="mb-4">
        <p className="flex items-center mb-2" style={{ color: colors.magenta }}>
          <User size={18} style={iconStyle} className="mr-2" />
          Director: {anime.director} ({anime.year})
        </p>
        <p className="flex items-center" style={{ color: colors.cyan }}>
          <Building2 size={18} style={iconStyle} className="mr-2" />
          Studio: {anime.studio}
        </p>
      </div>

      <div className="h-48 mb-6 p-4 rounded-lg" style={{ backgroundColor: '#111827' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke={colors.pink} opacity={0.2} />
            <XAxis 
              dataKey="year" 
              stroke={colors.blue}
              tick={{ fill: colors.blue }}
            />
            <YAxis 
              stroke={colors.blue}
              tick={{ fill: colors.blue }}
              tickFormatter={(value) => `$${value}M`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: colors.dark,
                border: `1px solid ${colors.magenta}`,
                borderRadius: '8px',
                color: colors.white
              }}
            />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke={colors.green}
              strokeWidth={2}
              dot={{ fill: colors.magenta, stroke: colors.magenta }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-lg" style={{ backgroundColor: '#111827' }}>
        <div className="flex items-center justify-center">
          <TrendingUp size={20} style={iconStyle} className="mr-2" />
          <span style={{ color: colors.cyan }}>{anime.growthPercentage}%</span>
        </div>
        <div className="flex items-center justify-center">
          <Award size={20} style={iconStyle} className="mr-2" />
          <span style={{ color: colors.cyan }}>{anime.awards.length}</span>
        </div>
        <div className="flex items-center justify-center">
          <Star size={20} style={iconStyle} className="mr-2" />
          <span style={{ color: colors.cyan }}>{anime.rating}/5</span>
        </div>
      </div>

      <button 
        onClick={() => setShowDetails(!showDetails)}
        className="w-full mb-4 flex items-center justify-center px-4 py-2 rounded-lg transition-colors"
        style={{ 
          backgroundColor: colors.blue,
          color: colors.white
        }}
      >
        <Info size={20} style={iconStyle} className="mr-2" />
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>

      {showDetails && (
        <div className="space-y-4">
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#111827' }}>
            <h4 className="font-bold mb-2 flex items-center" style={{ color: colors.blue }}>
              <Info size={20} style={iconStyle} className="mr-2" />
              Synopsis
            </h4>
            <p style={{ color: colors.cyan }}>{anime.synopsis}</p>
          </div>
          
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#111827' }}>
            <h4 className="font-bold mb-2 flex items-center" style={{ color: colors.blue }}>
              <User size={20} style={iconStyle} className="mr-2" />
              Director Bio
            </h4>
            <p style={{ color: colors.cyan }}>{anime.directorBio}</p>
          </div>

          <div className="p-4 rounded-lg" style={{ backgroundColor: '#111827' }}>
            <h4 className="font-bold mb-2 flex items-center" style={{ color: colors.blue }}>
              <MessageCircle size={20} style={iconStyle} className="mr-2" />
              Mari's Note
            </h4>
            <p className="italic" style={{ color: colors.cyan }}>{anime.mariNote}</p>
          </div>

          <div className="p-4 rounded-lg" style={{ backgroundColor: '#111827' }}>
            <h4 className="font-bold mb-2 flex items-center" style={{ color: colors.blue }}>
              <Award size={20} style={iconStyle} className="mr-2" />
              Awards
            </h4>
            <ul className="space-y-2">
              {anime.awards.map((award, index) => (
                <li key={index} className="flex items-start" style={{ color: colors.cyan }}>
                  <Star size={16} className="mr-2 mt-1" style={iconStyle} />
                  {award}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

const Dashboard = () => {
  const animeData = [
    {
      title: "Suzume (すずめの戸締まり)",
      director: "Makoto Shinkai",
      studio: "CoMix Wave Films",
      directorBio: "Makoto Shinkai is a renowned Japanese animator, filmmaker and manga artist. Known for his breathtaking visual style and emotional storytelling, he gained worldwide recognition with 'Your Name' (2016). His distinctive approach combines cutting-edge digital animation with traditional artistic sensibilities.",
      year: 2022,
      synopsis: "A 17-year-old girl crosses paths with a mysterious young man and follows him to discover a single weathered door standing upright amid ruins.",
      initialRevenue: 108.2,
      growthPercentage: 250,
      awards: ["Japan Academy Prize for Animation of the Year", "Annie Award Nomination"],
      rating: 4.5,
      mariNote: "The visual metaphors for trauma and healing through the journey resonated deeply with modern audiences, especially in a post-pandemic world."
    },
    {
      title: "The First Slam Dunk (ザ・ファースト・スラムダンク)",
      director: "Takehiko Inoue",
      studio: "Toei Animation",
      directorBio: "Takehiko Inoue is a Japanese manga artist, best known for creating 'Slam Dunk' and 'Vagabond'. His realistic art style and dynamic storytelling have influenced countless artists and creators in the manga industry. The First Slam Dunk marks his directorial debut in animation.",
      year: 2022,
      synopsis: "A reimagining of the classic basketball manga/anime that focuses on point guard Ryota Miyagi.",
      initialRevenue: 55.7,
      growthPercentage: 380,
      awards: ["Japan Academy Prize for Animation of the Year 2023"],
      rating: 4.8,
      mariNote: "The innovative blend of 2D and 3D animation techniques created a new standard for sports anime visualization."
    },
    {
      title: "Belle (竜とそばかすの姫)",
      director: "Mamoru Hosoda",
      studio: "Studio Chizu",
      directorBio: "Mamoru Hosoda is one of Japan's leading animation directors, known for works like 'Summer Wars' and 'Wolf Children'. He founded Studio Chizu in 2011 and has been pushing the boundaries of digital animation and storytelling ever since.",
      year: 2021,
      synopsis: "A high school student becomes a globally beloved singer after entering a vast virtual world.",
      initialRevenue: 58.2,
      growthPercentage: 190,
      awards: ["Annie Award Nomination", "14 Minutes Standing Ovation at Cannes"],
      rating: 4.3,
      mariNote: "A masterful exploration of how digital spaces can foster genuine human connection and self-discovery."
    }
  ];

  return (
    <div className="min-h-screen p-8 font-['Source_Code_Pro']" style={{ backgroundColor: colors.dark }}>
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12 p-6 rounded-xl" style={{ backgroundColor: '#111827' }}>
          <h1 className="text-4xl font-bold mb-4" style={{ color: colors.blue }}>
            DASHBOARD DE PELÍCULAS ANIMADAS JAPONESAS (2019-2024)
          </h1>
          <h2 className="text-2xl mb-4" style={{ color: colors.magenta }}>
            アニメ映画ダッシュボード
          </h2>
          <div className="space-y-2">
            <p className="text-xl" style={{ color: colors.cyan }}>
              Analyst: Mariana Rocío Linares Olivera
            </p>
            <p className="text-sm" style={{ color: colors.pink }}>
              Source: Box Office Mojo, The Numbers, Japanese Box Office Database (2024)
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {animeData.map((anime, index) => (
            <AnimeCard key={index} anime={anime} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
