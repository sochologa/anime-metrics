# 🎬 Japanese Anime Movies Dashboard | 日本のアニメ映画ダッシュボード

![BelleAnimeGIF](https://github.com/user-attachments/assets/f4627101-64a5-4a4b-a748-6394b1387de4)


## 📊 Project Overview | プロジェクト概要
An interactive dashboard built with React that visualizes performance metrics and detailed information about recent notable Japanese animated films (2019-2024). This dashboard aims to analyze the Japanese animation market, tracking trends, performance metrics, and industry growth patterns.

## 🚀 Key Features | 主な機能
- Revenue growth visualization using interactive line charts
- Detailed movie cards with expandable information sections
- Comprehensive movie analytics including awards and ratings
- Cyberpunk-inspired UI with neon accents
- Responsive design for multiple screen sizes
- Bilingual headers (English/Japanese)

## 🎨 Design System | デザインシステム
### Color Palette | カラーパレット
```javascript
const colors = {
  blue: '#3772FF',    // Primary accent
  magenta: '#FD36FF', // Secondary accent
  pink: '#EF70DD',    // Tertiary accent
  green: '#04E824',   // Chart accent
  cyan: '#70E4EF',    // Text accent
  dark: '#0D1221',    // Background
  white: '#FFFFFF'    // Base text
}
```

## 🛠 Technical Stack | 技術スタック
- **React**: Core framework
- **Recharts**: Data visualization
- **Lucide React**: Icon system
- **Tailwind CSS**: Styling framework

## 📦 Components Structure | コンポーネント構造
### Main Components | メインコンポーネント
1. `Dashboard`: Parent component containing the overall layout and data management
2. `AnimeCard`: Reusable component for individual movie displays

### Features per Card | カード機能
- Revenue growth chart
- Key performance metrics
- Expandable details section including:
  - Synopsis
  - Director biography
  - Mari's analysis notes
  - Awards listing

## 📈 Data Structure | データ構造
```javascript
{
  title: string,
  director: string,
  studio: string,
  directorBio: string,
  year: number,
  synopsis: string,
  initialRevenue: number,
  growthPercentage: number,
  awards: string[],
  rating: number,
  mariNote: string
}
```

## 🔧 Implementation Notes | 実装メモ
- Charts are implemented using Recharts with custom styling
- Revenue data is dynamically generated based on initial values and growth percentages
- All icons feature a custom drop shadow effect for cyberpunk aesthetic
- Responsive grid system adapts from 1 to 3 columns based on viewport width

## 🎯 Usage | 使用方法
The dashboard is designed to be an analytical tool for tracking and comparing the performance of major anime film releases. Each card provides both quick metrics and detailed analysis for deeper investigation.

## 📊 Data Sources | データソース
- Box Office Mojo
- The Numbers
- Japanese Box Office Database (2024)

## 🔐 Best Practices | ベストプラクティス
- Consistent color system implementation
- Modular component structure
- Responsive design principles
- Bilingual support in headers
- Comprehensive error handling
- Performance optimized chart rendering

## 🌟 Future Enhancements | 今後の機能拡張
- Additional filtering options
- More detailed revenue breakdowns
- International market performance comparison
- Social media sentiment analysis
- Extended historical data coverage

## 🎯 Market Analysis Objectives | 市場分析の目的
This dashboard serves as a comprehensive tool for analyzing the Japanese animation market, focusing on:
- Box office performance trends
- Growth patterns in different markets
- Director and studio impact analysis
- Award recognition correlation with revenue
- Market response to different storytelling approaches
- Post-pandemic recovery patterns
- International market penetration metrics

---

Created with 💝 and code by Mari Lin | 愛とコードで作られた by Mari Lin

© 2024 Brutales XYZ
