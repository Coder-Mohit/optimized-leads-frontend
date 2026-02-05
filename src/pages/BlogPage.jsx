import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  User,
  Tag,
  Clock,
  ArrowRight,
  Search,
  Filter,
  Heart,
  MessageCircle,
  Share2,
  TrendingUp,
  BookOpen,
  Zap,
  Target,
} from "lucide-react";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTag, setSelectedTag] = useState("all");

  // Dummy blog data
  const blogPosts = [
    {
      id: 1,
      title: "10 Proven Strategies to Generate High-Quality Real Estate Leads",
      excerpt:
        "Discover the most effective lead generation techniques that top real estate professionals use to consistently attract qualified buyers and sellers in today's competitive market.",
      author: "Rajesh Kumar",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Real Estate",
      tags: ["Lead Generation", "Real Estate", "Marketing"],
      image: "/api/placeholder/400/250",
      featured: true,
      likes: 245,
      comments: 18,
      views: 1520,
    },
    {
      id: 2,
      title:
        "The Future of Education Marketing: AI-Powered Student Acquisition",
      excerpt:
        "Explore how artificial intelligence is revolutionizing the way educational institutions attract and engage with prospective students in the digital age.",
      author: "Priya Sharma",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "Education",
      tags: ["AI", "Education", "Marketing"],
      image: "/api/placeholder/400/250",
      featured: true,
      likes: 189,
      comments: 23,
      views: 980,
    },
    {
      id: 3,
      title: "Maximizing ROI: A Guide to Cost-Effective Lead Generation",
      excerpt:
        "Learn how to optimize your lead generation budget and achieve maximum return on investment with data-driven strategies and smart resource allocation.",
      author: "Amit Patel",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "Marketing",
      tags: ["ROI", "Budget", "Strategy"],
      image: "/api/placeholder/400/250",
      featured: false,
      likes: 156,
      comments: 12,
      views: 760,
    },
    {
      id: 4,
      title: "Building Trust: How to Convert Leads into Long-Term Clients",
      excerpt:
        "Master the art of relationship building and learn proven techniques to nurture leads into loyal, long-term clients who consistently choose your services.",
      author: "Neha Gupta",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "Sales",
      tags: ["Trust Building", "Conversion", "Client Relations"],
      image: "/api/placeholder/400/250",
      featured: false,
      likes: 203,
      comments: 31,
      views: 1200,
    },
    {
      id: 5,
      title: "Digital Marketing Trends That Will Dominate 2024",
      excerpt:
        "Stay ahead of the competition with insights into the latest digital marketing trends and strategies that will shape the industry in the coming year.",
      author: "Rajesh Kumar",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "Marketing",
      tags: ["Trends", "Digital Marketing", "2024"],
      image: "/api/placeholder/400/250",
      featured: false,
      likes: 178,
      comments: 15,
      views: 890,
    },
    {
      id: 6,
      title: "The Psychology of Effective Lead Nurturing",
      excerpt:
        "Understanding the psychological triggers that influence lead behavior and how to leverage them for more effective nurturing campaigns.",
      author: "Priya Sharma",
      date: "2024-01-03",
      readTime: "11 min read",
      category: "Psychology",
      tags: ["Psychology", "Lead Nurturing", "Behavior"],
      image: "/api/placeholder/400/250",
      featured: false,
      likes: 134,
      comments: 8,
      views: 620,
    },
  ];

  const categories = [
    "all",
    "Real Estate",
    "Education",
    "Marketing",
    "Sales",
    "Psychology",
  ];
  const tags = [
    "all",
    "Lead Generation",
    "Real Estate",
    "Marketing",
    "AI",
    "Education",
    "ROI",
    "Budget",
    "Strategy",
    "Trust Building",
    "Conversion",
    "Client Relations",
    "Trends",
    "Digital Marketing",
    "2024",
    "Psychology",
    "Lead Nurturing",
    "Behavior",
  ];

  // Filter blog posts based on search, category, and tag
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    const matchesTag = selectedTag === "all" || post.tags.includes(selectedTag);

    return matchesSearch && matchesCategory && matchesTag;
  });

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold mb-6">
                <BookOpen className="w-4 h-4" />
                Insights & Resources
              </div>

              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6">
                Expert Insights on Lead Generation
              </h1>
              <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
                Stay ahead with proven strategies, industry trends, and expert
                tips to transform your lead generation efforts and drive
                business growth.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 text-gray-900 bg-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-500"
                    placeholder="Search articles, topics, or authors..."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-white/80 backdrop-blur-sm border-b border-gray-200 py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold text-indigo-600">
                  {blogPosts.length}
                </div>
                <div className="text-sm text-gray-600">Total Articles</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold text-purple-600">
                  {categories.length - 1}
                </div>
                <div className="text-sm text-gray-600">Categories</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold text-green-600">
                  {blogPosts
                    .reduce((acc, post) => acc + post.views, 0)
                    .toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Total Views</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold text-orange-600">
                  {blogPosts
                    .reduce((acc, post) => acc + post.likes, 0)
                    .toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Total Likes</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Filter className="w-4 h-4" />
                  <span>Category:</span>
                </div>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-indigo-600 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                    }`}
                  >
                    {category === "all" ? "All" : category}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Tag className="w-4 h-4" />
                  <span>Tags:</span>
                </div>
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="px-3 py-1 rounded-lg text-sm border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  {tags.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag === "all" ? "All Tags" : tag}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-2 mb-8">
                <TrendingUp className="w-5 h-5 text-indigo-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Featured Articles
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative h-48 bg-gradient-to-br from-indigo-500 to-purple-600">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-semibold rounded-full">
                          Featured
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-indigo-100 text-sm line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">
                              {post.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">
                              {post.author}
                            </div>
                            <div className="text-sm text-gray-500">
                              {formatDate(post.date)}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            <span>{post.likes}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>{post.comments}</span>
                          </div>
                        </div>
                      </div>

                      <Link
                        to={`/blog/${post.id}`}
                        className="mt-4 inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
                      >
                        Read Full Article
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Posts Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {selectedCategory === "all"
                ? "All Articles"
                : `${selectedCategory} Articles`}
              {searchTerm && ` matching "${searchTerm}"`}
            </h2>

            {regularPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative h-40 bg-gradient-to-br from-indigo-400 to-purple-500">
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-white/90 text-indigo-600 text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-xs">
                              {post.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div className="text-xs">
                            <div className="font-medium text-gray-900">
                              {post.author}
                            </div>
                            <div className="text-gray-500">
                              {formatDate(post.date)}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Heart className="w-3 h-3" />
                            <span>{post.likes}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-3 h-3" />
                            <span>{post.comments}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Zap className="w-3 h-3" />
                            <span>{post.views}</span>
                          </div>
                        </div>

                        <Link
                          to={`/blog/${post.id}`}
                          className="inline-flex items-center gap-1 text-indigo-600 font-semibold text-sm hover:text-indigo-700 transition-colors"
                        >
                          Read More
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No articles found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search terms or filters to find what you're
                  looking for.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6">
                <Target className="w-4 h-4" />
                Stay Updated
              </div>

              <h2 className="text-3xl font-bold mb-4">
                Get Expert Tips Delivered to Your Inbox
              </h2>
              <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who receive our weekly
                newsletter with proven lead generation strategies and industry
                insights.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 text-gray-900 bg-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-500"
                />
                <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                  Subscribe
                </button>
              </div>

              <p className="text-sm text-indigo-200 mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
