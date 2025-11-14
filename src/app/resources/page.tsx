"use client";

import { useState } from "react";
import {
  Book,
  FileText,
  Download,
  ExternalLink,
  Search,
  BookOpen,
  Heart,
  Users,
  DollarSign,
  Lightbulb,
} from "lucide-react";

type ResourceCategory =
  | "all"
  | "bible-studies"
  | "devotionals"
  | "forms"
  | "giving"
  | "small-groups";

interface Resource {
  id: number;
  title: string;
  description: string;
  category: ResourceCategory;
  type: "pdf" | "link";
  url: string;
}

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] =
    useState<ResourceCategory>("all");

  // Static resources - can be replaced with dynamic data later
  const resources: Resource[] = [
    {
      id: 1,
      title: "New Member Information",
      description: "Learn about membership at Hopewell UMC",
      category: "forms",
      type: "pdf",
      url: "/old-site-downloads/pdfs/membership-info.pdf",
    },
    {
      id: 2,
      title: "Facility Use Request Form",
      description: "Request to use church facilities for events",
      category: "forms",
      type: "pdf",
      url: "/old-site-downloads/pdfs/facility-use-form.pdf",
    },
    {
      id: 3,
      title: "Online Giving Setup Guide",
      description: "Step-by-step guide to set up recurring giving",
      category: "giving",
      type: "pdf",
      url: "/old-site-downloads/pdfs/giving-guide.pdf",
    },
    {
      id: 4,
      title: "Small Group Leader Guide",
      description: "Resources for leading effective small groups",
      category: "small-groups",
      type: "pdf",
      url: "/old-site-downloads/pdfs/small-group-guide.pdf",
    },
    {
      id: 5,
      title: "Advent Devotional 2024",
      description: "Daily readings for the Advent season",
      category: "devotionals",
      type: "pdf",
      url: "/old-site-downloads/pdfs/advent-devotional.pdf",
    },
    {
      id: 6,
      title: "Gospel of John Study Guide",
      description: "6-week study through the Gospel of John",
      category: "bible-studies",
      type: "pdf",
      url: "/old-site-downloads/pdfs/john-study.pdf",
    },
  ];

  const externalResources = [
    {
      id: 1,
      title: "Bible Gateway",
      description: "Read the Bible in multiple translations",
      url: "https://www.biblegateway.com",
      icon: BookOpen,
    },
    {
      id: 2,
      title: "United Methodist Church",
      description: "Official UMC website and resources",
      url: "https://www.umc.org",
      icon: Heart,
    },
    {
      id: 3,
      title: "UM Discipleship Resources",
      description: "Bible studies, worship, and ministry resources",
      url: "https://www.umcdiscipleship.org",
      icon: Book,
    },
    {
      id: 4,
      title: "Upper Room Ministries",
      description: "Devotionals and spiritual formation resources",
      url: "https://www.upperroom.org",
      icon: Lightbulb,
    },
  ];

  const filteredResources = resources.filter((resource) => {
    const matchesCategory =
      activeCategory === "all" || resource.category === activeCategory;
    const matchesSearch =
      searchTerm === "" ||
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: ResourceCategory) => {
    switch (category) {
      case "bible-studies":
        return Book;
      case "devotionals":
        return Heart;
      case "forms":
        return FileText;
      case "giving":
        return DollarSign;
      case "small-groups":
        return Users;
      default:
        return FileText;
    }
  };

  const categories = [
    { id: "all", label: "All Resources", icon: FileText },
    { id: "bible-studies", label: "Bible Studies", icon: Book },
    { id: "devotionals", label: "Devotionals", icon: Heart },
    { id: "forms", label: "Forms & Documents", icon: FileText },
    { id: "giving", label: "Giving Resources", icon: DollarSign },
    { id: "small-groups", label: "Small Group Materials", icon: Users },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0b5a7f] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Resources</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Tools and materials to help you grow in faith
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b5a7f] focus:border-transparent text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Browse by Category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() =>
                      setActiveCategory(category.id as ResourceCategory)
                    }
                    className={`flex flex-col items-center gap-2 p-4 rounded-lg transition-all ${
                      isActive
                        ? "bg-[#0b5a7f] text-white shadow-lg"
                        : "bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200"
                    }`}
                  >
                    <Icon className="h-8 w-8" />
                    <span className="text-xs md:text-sm font-medium text-center">
                      {category.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                {activeCategory === "all"
                  ? "All Resources"
                  : categories.find((c) => c.id === activeCategory)?.label}
              </h2>
              <p className="text-gray-600">
                {filteredResources.length} resource
                {filteredResources.length !== 1 ? "s" : ""} available
              </p>
            </div>

            {filteredResources.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">No resources found</p>
                <p className="text-gray-500 text-sm mt-2">
                  Try adjusting your search or category filter
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource) => {
                  const Icon = getCategoryIcon(resource.category);
                  return (
                    <div
                      key={resource.id}
                      className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#0b5a7f] transition-all hover:shadow-lg group"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-[#0b5a7f] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#094e6d] transition-colors">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold mb-1 group-hover:text-[#0b5a7f] transition-colors">
                            {resource.title}
                          </h3>
                          <span className="text-xs font-semibold text-gray-500 uppercase">
                            {resource.category.replace("-", " ")}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {resource.description}
                      </p>
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#0b5a7f] font-semibold text-sm hover:underline"
                      >
                        <Download className="h-4 w-4" />
                        Download PDF
                      </a>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* External Resources Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                External Resources
              </h2>
              <p className="text-gray-600 text-lg">
                Helpful links to trusted Christian resources
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {externalResources.map((resource) => {
                const Icon = resource.icon;
                return (
                  <a
                    key={resource.id}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all border-2 border-gray-200 hover:border-[#0b5a7f] group"
                  >
                    <div className="w-16 h-16 bg-[#0b5a7f] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#094e6d] transition-colors">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-[#0b5a7f] transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {resource.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[#0b5a7f] font-semibold text-sm">
                      Visit Site
                      <ExternalLink className="h-4 w-4" />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Need Help Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#0b5a7f] to-[#094e6d] text-white rounded-lg shadow-lg p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need Additional Resources?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Can't find what you're looking for? Our staff is here to help
                connect you with the resources you need.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-[#0b5a7f] hover:bg-white/90 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
