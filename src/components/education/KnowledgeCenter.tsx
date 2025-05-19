
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Book, Download, Filter, Search } from 'lucide-react';

const categories = [
  "Energy Efficiency",
  "Water Conservation",
  "Soil Health",
  "Biodiversity",
  "Sustainable Building",
  "Organic Farming",
  "Composting"
];

const articles = [
  {
    id: 1,
    title: "Maximizing Solar Panel Efficiency in Agricultural Settings",
    excerpt: "Learn how to position and maintain solar panels for optimal energy generation in farm environments.",
    date: "2025-04-12",
    category: "Energy Efficiency",
    type: "article",
    downloadUrl: "#"
  },
  {
    id: 2,
    title: "Rainwater Harvesting Systems for Small Farms",
    excerpt: "A comprehensive guide to designing and implementing rainwater collection systems scaled for small agricultural operations.",
    date: "2025-03-28",
    category: "Water Conservation",
    type: "guide",
    downloadUrl: "#"
  },
  {
    id: 3,
    title: "Building Healthy Soil Through Cover Cropping",
    excerpt: "Explore the benefits of various cover crops and how to integrate them into your crop rotation.",
    date: "2025-03-15",
    category: "Soil Health",
    type: "tutorial",
    downloadUrl: "#"
  },
  {
    id: 4,
    title: "Creating Wildlife Habitats on Working Farms",
    excerpt: "Balance productive farming with biodiversity support through strategic habitat creation.",
    date: "2025-02-22",
    category: "Biodiversity",
    type: "article",
    downloadUrl: "#"
  },
  {
    id: 5,
    title: "Passive Solar Design for Farm Buildings",
    excerpt: "Using natural light and heat to reduce energy costs in agricultural structures.",
    date: "2025-02-10",
    category: "Sustainable Building",
    type: "guide",
    downloadUrl: "#"
  },
  {
    id: 6,
    title: "Advanced Composting Techniques for Farm Waste",
    excerpt: "Turn your agricultural waste into valuable resources with these composting methods.",
    date: "2025-01-25",
    category: "Composting",
    type: "tutorial",
    downloadUrl: "#"
  },
  {
    id: 7,
    title: "Organic Pest Management Strategies",
    excerpt: "Effective approaches to managing pests without synthetic chemicals.",
    date: "2025-01-15",
    category: "Organic Farming",
    type: "guide",
    downloadUrl: "#"
  }
];

const KnowledgeCenter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  
  const filteredArticles = articles.filter(article => {
    const matchesSearch = 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = 
      selectedCategories.length === 0 || 
      selectedCategories.includes(article.category);
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-background rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Knowledge Center</h2>
      
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search" 
            placeholder="Search articles, guides and tutorials..." 
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <Button 
          variant="outline"
          className="md:w-auto w-full"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="mr-2 h-4 w-4" />
          Filter
          {selectedCategories.length > 0 && (
            <span className="ml-2 rounded-full bg-primary w-5 h-5 flex items-center justify-center text-xs text-primary-foreground">
              {selectedCategories.length}
            </span>
          )}
        </Button>
      </div>
      
      <Collapsible open={showFilters} className="mb-6">
        <CollapsibleContent>
          <div className="bg-muted/50 p-4 rounded-md">
            <h3 className="font-medium mb-3">Filter by Category</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedCategories.includes(category)
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <div key={article.id} className="border rounded-lg overflow-hidden flex flex-col">
            <div className="p-4 flex-grow">
              <div className="flex items-center mb-3">
                <Book className="h-4 w-4 mr-2" />
                <span className="text-xs font-medium uppercase">{article.type}</span>
                <span className="ml-auto text-xs text-muted-foreground">{article.date}</span>
              </div>
              
              <h3 className="font-semibold mb-2">{article.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{article.excerpt}</p>
              
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary">
                {article.category}
              </span>
            </div>
            
            <div className="p-4 bg-muted/30 mt-auto border-t">
              <Button variant="outline" size="sm" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download {article.type === "article" ? "PDF" : article.type === "guide" ? "Guide" : "Tutorial"}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnowledgeCenter;
