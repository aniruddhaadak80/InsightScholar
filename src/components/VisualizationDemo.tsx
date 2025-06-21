
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';
import { useState } from "react";
import { BarChart3, TrendingUp, PieChart as PieChartIcon, Activity } from "lucide-react";

const VisualizationDemo = () => {
  const [activeChart, setActiveChart] = useState('bar');

  // Sample data for different chart types
  const barData = [
    { name: 'AI Research', papers: 1250, citations: 8500 },
    { name: 'Machine Learning', papers: 980, citations: 6200 },
    { name: 'Data Science', papers: 850, citations: 5100 },
    { name: 'Computer Vision', papers: 720, citations: 4800 },
    { name: 'NLP', papers: 650, citations: 4200 },
  ];

  const lineData = [
    { year: '2020', publications: 450, impact: 3.2 },
    { year: '2021', publications: 580, impact: 3.8 },
    { year: '2022', publications: 720, impact: 4.1 },
    { year: '2023', publications: 890, impact: 4.5 },
    { year: '2024', publications: 1050, impact: 4.8 },
  ];

  const pieData = [
    { name: 'Theoretical', value: 35, color: '#0066CC' },
    { name: 'Applied', value: 40, color: '#7C3AED' },
    { name: 'Experimental', value: 20, color: '#0891B2' },
    { name: 'Review', value: 5, color: '#059669' },
  ];

  const scatterData = [
    { x: 2.1, y: 150, field: 'AI' },
    { x: 3.5, y: 280, field: 'ML' },
    { x: 4.2, y: 420, field: 'CV' },
    { x: 3.8, y: 320, field: 'NLP' },
    { x: 4.8, y: 550, field: 'DS' },
    { x: 2.9, y: 200, field: 'Robotics' },
    { x: 4.1, y: 380, field: 'DL' },
    { x: 3.2, y: 240, field: 'NN' },
  ];

  const chartTypes = [
    { id: 'bar', label: 'Bar Chart', icon: BarChart3, description: 'Publication & Citation Analysis' },
    { id: 'line', label: 'Trend Analysis', icon: TrendingUp, description: 'Research Impact Over Time' },
    { id: 'pie', label: 'Distribution', icon: PieChartIcon, description: 'Research Type Breakdown' },
    { id: 'scatter', label: 'Correlation', icon: Activity, description: 'Impact vs Citation Analysis' },
  ];

  const renderChart = () => {
    switch (activeChart) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
              <XAxis dataKey="name" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Legend />
              <Bar dataKey="papers" fill="#0066CC" name="Papers Published" radius={[4, 4, 0, 0]} />
              <Bar dataKey="citations" fill="#7C3AED" name="Total Citations" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
              <XAxis dataKey="year" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="publications" 
                stroke="#0066CC" 
                strokeWidth={3}
                dot={{ fill: '#0066CC', strokeWidth: 2, r: 6 }}
                name="Publications"
              />
              <Line 
                type="monotone" 
                dataKey="impact" 
                stroke="#7C3AED" 
                strokeWidth={3}
                dot={{ fill: '#7C3AED', strokeWidth: 2, r: 6 }}
                name="Impact Factor"
              />
            </LineChart>
          </ResponsiveContainer>
        );
      
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        );
      
      case 'scatter':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <ScatterChart data={scatterData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
              <XAxis dataKey="x" name="Impact Factor" stroke="#64748b" />
              <YAxis dataKey="y" name="Citations" stroke="#64748b" />
              <Tooltip 
                cursor={{ strokeDasharray: '3 3' }}
                contentStyle={{
                  backgroundColor: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
                formatter={(value, name) => [value, name === 'x' ? 'Impact Factor' : 'Citations']}
              />
              <Scatter dataKey="y" fill="#0891B2" />
            </ScatterChart>
          </ResponsiveContainer>
        );
      
      default:
        return null;
    }
  };

  return (
    <section id="visualization" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-scholar-blue to-scholar-purple bg-clip-text text-transparent">
            Interactive Data Visualization
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your research data into beautiful, interactive visualizations that reveal insights and patterns
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Chart Type Selector */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Visualization Types</h3>
            {chartTypes.map((chart) => (
              <Card 
                key={chart.id}
                className={`p-4 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  activeChart === chart.id 
                    ? 'border-scholar-blue bg-scholar-lightBlue' 
                    : 'bg-white/80 backdrop-blur-sm border-gray-200'
                }`}
                onClick={() => setActiveChart(chart.id)}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${
                    activeChart === chart.id ? 'bg-scholar-blue' : 'bg-gray-100'
                  }`}>
                    <chart.icon className={`h-5 w-5 ${
                      activeChart === chart.id ? 'text-white' : 'text-gray-600'
                    }`} />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${
                      activeChart === chart.id ? 'text-scholar-blue' : 'text-gray-800'
                    }`}>
                      {chart.label}
                    </h4>
                    <p className="text-sm text-gray-600">{chart.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Chart Display */}
          <div className="lg:col-span-3">
            <Card className="p-8 bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {chartTypes.find(c => c.id === activeChart)?.label}
                  </h3>
                  <p className="text-gray-600">
                    {chartTypes.find(c => c.id === activeChart)?.description}
                  </p>
                </div>
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-500">
                  Interactive
                </Badge>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6">
                {renderChart()}
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-scholar-blue">1,250+</div>
                  <div className="text-sm text-gray-600">Papers Analyzed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-scholar-purple">85%</div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-scholar-teal">15ms</div>
                  <div className="text-sm text-gray-600">Processing Speed</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Interactive Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Real-time Updates",
              description: "Charts update dynamically as new data is processed",
              icon: Activity,
              color: "from-scholar-blue to-blue-600"
            },
            {
              title: "Export Options",
              description: "Download visualizations in PNG, SVG, or PDF formats",
              icon: BarChart3,
              color: "from-scholar-purple to-purple-600"
            },
            {
              title: "Interactive Tooltips",
              description: "Hover over data points for detailed information",
              icon: TrendingUp,
              color: "from-scholar-teal to-teal-600"
            }
          ].map((feature, index) => (
            <Card key={feature.title} className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualizationDemo;
