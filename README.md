
# 🎓 InsightScholar - AI Research Assistant with Visual Data Analysis

<div align="center">
  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop&crop=center" alt="InsightScholar Banner" width="100%" style="border-radius: 15px; margin-bottom: 20px;" />
  
  [![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC.svg)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-5.0-646CFF.svg)](https://vitejs.dev/)
  [![Gemini AI](https://img.shields.io/badge/Gemini_AI-2.5_Flash-4285F4.svg)](https://ai.google.dev/)
</div>

## 🌟 Overview

**InsightScholar** is a comprehensive AI-powered research assistant that revolutionizes academic research workflows. Built with cutting-edge technologies, it analyzes academic papers, extracts key insights, and generates beautiful visual summaries with interactive charts and graphs.

### 🎯 Key Features

#### 📄 **PDF Document Analysis & Summarization**
- Upload research papers, PDFs, or paste text directly
- Advanced AI algorithms extract key insights and generate concise summaries
- Support for multiple document formats
- Real-time text processing with confidence scoring

#### 📊 **Interactive Data Visualization**
- **Bar Charts**: Publication and citation analysis
- **Line Charts**: Research trend analysis over time  
- **Pie Charts**: Research type distribution breakdown
- **Scatter Plots**: Impact factor vs citation correlation
- Exportable visualizations in PNG, SVG, and PDF formats

#### 🔗 **Citation Network Mapping**
- Visualize connections between papers and authors
- Discover research relationships and emerging trends
- Interactive network graphs with filtering capabilities
- Identify influential researchers and breakthrough papers

#### 💡 **AI-Powered Hypothesis Generation**
- Generate new research directions based on analyzed content
- Identify research gaps and opportunities
- Suggest potential collaborations and methodologies
- Smart keyword extraction and topic modeling

#### 🔍 **Smart Search & Analysis**
- Semantic search across document libraries
- Intelligent content categorization
- Multi-format document support (PDF, TXT, DOC)
- Real-time analysis with instant results

## 🛠️ Technologies Used

### Frontend Stack
- **React 18.3.1** - Modern component-based UI framework
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

### UI Components & Design
- **Shadcn/UI** - Beautiful, accessible component library
- **Recharts** - Powerful charting library for data visualization
- **Lucide React** - Modern icon library
- **Radix UI** - Unstyled, accessible UI primitives

### AI & Backend Integration
- **Google Gemini AI 2.5 Flash** - Advanced language model for text analysis
- **React Query** - Data fetching and state management
- **Sonner** - Beautiful toast notifications

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing and optimization
- **React Router** - Client-side routing

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AniruddhaAdak/insight-scholar.git
   cd insight-scholar
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to see the application

### Environment Setup

The application uses Google Gemini AI for text analysis. The API key is configured in the application, but for production use, consider setting up environment variables:

```bash
# .env.local (for local development)
VITE_GEMINI_API_KEY=your_api_key_here
```

## 📖 How to Use

### 1. **Upload Research Documents**
- Click the upload area or drag and drop files
- Supported formats: PDF, TXT, DOC
- Or paste text directly into the text area

### 2. **AI Analysis**
- Click "Analyze Research" to start processing
- AI extracts key findings, methodology, and insights
- Results include confidence scoring and keyword tagging

### 3. **Visualize Data**
- Navigate to the visualization section
- Choose from multiple chart types
- Interactive tooltips provide detailed information
- Export charts in various formats

### 4. **Explore Insights**
- Review AI-generated summaries and findings
- Explore suggested research directions
- Identify potential collaboration opportunities

## 🎨 Design Features

### Modern UI/UX
- **Gradient Backgrounds**: Beautiful color transitions
- **Glass Morphism**: Translucent cards with backdrop blur
- **Smooth Animations**: Floating elements and slide transitions
- **Responsive Design**: Optimized for all device sizes

### Interactive Elements
- **Hover Effects**: Dynamic scaling and color changes
- **Loading States**: Elegant spinners and progress indicators
- **Toast Notifications**: Real-time feedback messages
- **Smooth Scrolling**: Seamless navigation between sections

### Accessibility
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Friendly**: Proper ARIA labels
- **High Contrast**: Accessible color combinations
- **Responsive Text**: Scalable typography

## 📊 Sample Data Visualizations

The application includes interactive demos with:
- Research publication trends (2020-2024)
- Citation analysis across different fields
- Research methodology distribution
- Impact factor correlations

## 🔧 Configuration

### Customizing Colors
Update the color scheme in `tailwind.config.ts`:

```typescript
extend: {
  colors: {
    scholar: {
      blue: '#0066CC',
      purple: '#7C3AED',
      teal: '#0891B2',
      // Add your custom colors
    }
  }
}
```

### Adding New Chart Types
Extend the visualization component in `src/components/VisualizationDemo.tsx` to add new chart types and data sources.

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Use semantic commit messages
- Add tests for new features
- Update documentation for API changes

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 About the Creator

**Aniruddha Adak** - Full Stack Developer & AI Enthusiast

I'm passionate about building innovative tools that accelerate research and discovery. InsightScholar represents my vision of making AI-powered research assistance accessible to academics and researchers worldwide.

### Connect with Me

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/aniruddha-adak)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AniruddhaAdak)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/aniruddhadak)
[![Dev.to](https://img.shields.io/badge/Dev.to-0A0A0A?style=for-the-badge&logo=devdotto&logoColor=white)](https://dev.to/aniruddhaadak)
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://aniruddha-adak.vercel.app)

</div>

### 📧 Contact
- **Email**: aniruddhaadak80@gmail.com
- **Telegram**: [@aniruddhaadak](https://t.me/aniruddhaadak)
- **Linktree**: [linktr.ee/aniruddha.adak](https://linktr.ee/aniruddha.adak)

## 🙏 Acknowledgments

- **Google Gemini AI** for powerful language processing capabilities
- **Shadcn/UI** for beautiful, accessible components
- **Recharts** for excellent data visualization tools
- **Unsplash** for high-quality stock photography
- **The React Community** for continuous innovation

---

<div align="center">
  <strong>Built with ❤️ by Aniruddha Adak</strong>
  <br>
  <sub>Making AI-powered research accessible to everyone</sub>
</div>
