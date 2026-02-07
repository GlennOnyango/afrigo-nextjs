'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PartnerDirectoryPage() {
  const [language, setLanguage] = useState<'en' | 'zh'>('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Global Header */}
      <Header language={language} onLanguageToggle={toggleLanguage} currentPage="partners" />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-xs sm:text-sm text-gray-600">
            <a href="/" className="hover:text-blue-900">
              {language === 'en' ? 'Home' : '首页'}
            </a> &gt; <a href="/partners" className="hover:text-blue-900">
              {language === 'en' ? 'Resource Partners' : '资源合作伙伴'}
            </a> &gt; {language === 'en' ? 'Partner Directory' : '合作伙伴目录'}
          </p>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <section 
        className="py-12 sm:py-16 relative bg-cover bg-center bg-gray-700"
        style={{
          backgroundImage: "url('/images/afrigo_partners_directory.jpg')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {language === 'en' ? 'PARTNER DIRECTORY' : '合作伙伴目录'}
          </h1>
          <p className="text-base sm:text-lg text-white mb-6 sm:mb-8">
            {language === 'en'
              ? 'Browse 200+ verified service partners across Kenya'
              : '浏览肯尼亚200多个经过验证的服务合作伙伴'}
          </p>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-4xl mx-auto">
            <input 
              type="text" 
              placeholder={language === 'en'
                ? 'Search partners by name, service, or location...'
                : '按名称、服务或位置搜索合作伙伴...'}
              className="flex-1 bg-white border-2 border-white rounded px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
            />
            <select className="border-2 border-gray-300 rounded px-4 py-3 bg-white focus:outline-none focus:border-blue-900">
              <option>{language === 'en' ? 'All Categories' : '所有类别'}</option>
              <option>{language === 'en' ? 'Hotels & Accommodation' : '酒店和住宿'}</option>
              <option>{language === 'en' ? 'Transport & Logistics' : '运输和物流'}</option>
              <option>{language === 'en' ? 'Legal Services' : '法律服务'}</option>
              <option>{language === 'en' ? 'Financial Services' : '金融服务'}</option>
              <option>{language === 'en' ? 'Real Estate' : '房地产'}</option>
              <option>{language === 'en' ? 'Staffing & HR' : '人员配置和人力资源'}</option>
              <option>{language === 'en' ? 'Translation' : '翻译'}</option>
              <option>{language === 'en' ? 'Other' : '其他'}</option>
            </select>
            <button className="bg-orange-500 text-white px-6 sm:px-8 py-3 rounded hover:bg-orange-600 whitespace-nowrap">
              {language === 'en' ? 'Search' : '搜索'}
            </button>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 sm:gap-6 py-4 overflow-x-auto">
            <button className="bg-blue-900 text-white px-4 sm:px-6 py-2 rounded whitespace-nowrap text-sm sm:text-base">
              {language === 'en' ? 'All Partners (200+)' : '所有合作伙伴 (200+)'}
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 sm:px-6 py-2 rounded hover:bg-gray-300 whitespace-nowrap text-sm sm:text-base">
              {language === 'en' ? 'Hotels (28)' : '酒店 (28)'}
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 sm:px-6 py-2 rounded hover:bg-gray-300 whitespace-nowrap text-sm sm:text-base">
              {language === 'en' ? 'Transport (35)' : '运输 (35)'}
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 sm:px-6 py-2 rounded hover:bg-gray-300 whitespace-nowrap text-sm sm:text-base">
              {language === 'en' ? 'Legal (22)' : '法律 (22)'}
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 sm:px-6 py-2 rounded hover:bg-gray-300 whitespace-nowrap text-sm sm:text-base">
              {language === 'en' ? 'Financial (18)' : '金融 (18)'}
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 sm:px-6 py-2 rounded hover:bg-gray-300 whitespace-nowrap text-sm sm:text-base">
              {language === 'en' ? 'Real Estate (31)' : '房地产 (31)'}
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 sm:px-6 py-2 rounded hover:bg-gray-300 whitespace-nowrap text-sm sm:text-base">
              {language === 'en' ? 'Staffing (24)' : '人员配置 (24)'}
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 sm:px-6 py-2 rounded hover:bg-gray-300 whitespace-nowrap text-sm sm:text-base">
              {language === 'en' ? 'Translation (15)' : '翻译 (15)'}
            </button>
          </div>
        </div>
      </section>

      {/* Partner Grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <p className="text-gray-600 text-sm sm:text-base">
              {language === 'en' ? 'Showing 1-12 of 200+ partners' : '显示200多个合作伙伴中的1-12个'}
            </p>
            <select className="border-2 border-gray-300 rounded px-4 py-2 bg-white text-sm sm:text-base">
              <option>{language === 'en' ? 'Sort by: Highest Rated' : '排序：最高评分'}</option>
              <option>{language === 'en' ? 'Sort by: Most Reviews' : '排序：最多评论'}</option>
              <option>{language === 'en' ? 'Sort by: Newest' : '排序：最新'}</option>
              <option>{language === 'en' ? 'Sort by: A-Z' : '排序：A-Z'}</option>
            </select>
          </div>

          {/* Partner Cards Grid - 12 partners */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Nairobi Grand Hotel", category: language === 'en' ? "Hotels & Accommodation" : "酒店和住宿", rating: 4.9, reviews: 45, location: "Westlands, Nairobi" },
              { name: "Swift Transport KE", category: language === 'en' ? "Transport & Logistics" : "运输和物流", rating: 4.8, reviews: 38, location: "Nairobi CBD" },
              { name: "Legal Partners Ltd", category: language === 'en' ? "Legal Services" : "法律服务", rating: 4.7, reviews: 29, location: "Upper Hill" },
              { name: "Kenya Finance Co.", category: language === 'en' ? "Financial Services" : "金融服务", rating: 5.0, reviews: 52, location: "Westlands" },
              { name: "Prime Properties", category: language === 'en' ? "Real Estate" : "房地产", rating: 4.6, reviews: 41, location: "Karen" },
              { name: "Talent Solutions", category: language === 'en' ? "Staffing & HR" : "人员配置和人力资源", rating: 4.8, reviews: 33, location: "Parklands" },
              { name: "LingoBridge", category: language === 'en' ? "Translation" : "翻译", rating: 5.0, reviews: 27, location: "Kilimani" },
              { name: "Executive Suites", category: language === 'en' ? "Hotels & Accommodation" : "酒店和住宿", rating: 4.9, reviews: 36, location: "Upperhill" },
              { name: "Cargo Masters", category: language === 'en' ? "Transport & Logistics" : "运输和物流", rating: 4.7, reviews: 44, location: "Industrial Area" },
              { name: "Smith & Associates", category: language === 'en' ? "Legal Services" : "法律服务", rating: 4.8, reviews: 31, location: "CBD" },
              { name: "SafeBank Advisory", category: language === 'en' ? "Financial Services" : "金融服务", rating: 4.9, reviews: 28, location: "Westlands" },
              { name: "Urban Spaces", category: language === 'en' ? "Real Estate" : "房地产", rating: 4.6, reviews: 39, location: "Lavington" }
            ].map((partner, i) => (
              <div key={i} className="bg-gray-50 border-2 border-gray-300 rounded p-6 hover:shadow-lg transition-shadow">
                {/* Logo */}
                <div className="bg-gray-200 h-24 mb-4 flex items-center justify-center border border-gray-400">
                  <span className="text-gray-500 text-sm">LOGO</span>
                </div>

                {/* Partner Name */}
                <h3 className="font-bold text-lg mb-2">{partner.name}</h3>

                {/* Category Badge */}
                <div className="bg-blue-900 text-white text-xs px-3 py-1 rounded inline-block mb-3">
                  {partner.category}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-orange-500">
                    {"⭐".repeat(Math.floor(partner.rating))}
                  </div>
                  <span className="text-sm font-bold">{partner.rating}</span>
                  <span className="text-sm text-gray-600">({partner.reviews} {language === 'en' ? 'reviews' : '评论'})</span>
                </div>

                {/* Location */}
                <p className="text-sm text-gray-600 mb-4">📍 {partner.location}</p>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-900 text-white text-sm py-2 rounded hover:bg-blue-800">
                    {language === 'en' ? 'View Profile' : '查看资料'}
                  </button>
                  <button className="flex-1 bg-green-600 text-white text-sm py-2 rounded hover:bg-green-700">
                    {language === 'en' ? 'Contact' : '联系'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-wrap justify-center items-center gap-2">
            <button className="px-3 sm:px-4 py-2 border-2 border-gray-300 rounded hover:bg-gray-100 text-sm sm:text-base">
              {language === 'en' ? 'Previous' : '上一页'}
            </button>
            <button className="px-3 sm:px-4 py-2 bg-blue-900 text-white rounded text-sm sm:text-base">1</button>
            <button className="px-3 sm:px-4 py-2 border-2 border-gray-300 rounded hover:bg-gray-100 text-sm sm:text-base">2</button>
            <button className="px-3 sm:px-4 py-2 border-2 border-gray-300 rounded hover:bg-gray-100 text-sm sm:text-base">3</button>
            <button className="px-3 sm:px-4 py-2 border-2 border-gray-300 rounded hover:bg-gray-100 text-sm sm:text-base">4</button>
            <span className="px-2 sm:px-4 py-2 text-sm sm:text-base">...</span>
            <button className="px-3 sm:px-4 py-2 border-2 border-gray-300 rounded hover:bg-gray-100 text-sm sm:text-base">17</button>
            <button className="px-3 sm:px-4 py-2 border-2 border-gray-300 rounded hover:bg-gray-100 text-sm sm:text-base">
              {language === 'en' ? 'Next' : '下一页'}
            </button>
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="bg-blue-900 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {language === 'en'
              ? 'Want to Join Our Partner Network?'
              : '想加入我们的合作伙伴网络？'}
          </h2>
          <p className="text-white mb-6 sm:mb-8">
            {language === 'en'
              ? 'Get qualified leads and grow your business with AfriGo'
              : '获得合格的潜在客户并与AfriGo一起发展您的业务'}
          </p>
          <a 
            href="/partners#application-form"
            className="inline-block bg-orange-500 text-white px-10 sm:px-12 py-3 sm:py-4 text-base sm:text-lg rounded hover:bg-orange-600 transition-colors"
          >
            {language === 'en' ? 'Become a Partner →' : '成为合作伙伴 →'}
          </a>
        </div>
      </section>

      {/* Unified Contact CTA */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            {language === 'en' 
              ? "Let's Get You Started. Schedule a Free Consultation."
              : '让我们开始吧。安排免费咨询。'}
          </h2>
          <p className="text-gray-600 mb-12 text-base sm:text-lg">
            {language === 'en'
              ? 'Get in touch with our team for personalized support'
              : '联系我们的团队获得个性化支持'}
          </p>

          {/* 4 Contact Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Call Us Now */}
            <a 
              href="tel:+254XXXXXXXXX"
              className="bg-blue-900 text-white p-6 rounded-lg hover:bg-blue-800 transition-colors flex flex-col items-center gap-3 group"
            >
              <div className="text-4xl">📞</div>
              <span className="font-bold text-base">
                {language === 'en' ? 'Call Us Now' : '立即致电'}
              </span>
              <span className="text-xs opacity-80">
                {language === 'en' ? 'Phone Support' : '电话支持'}
              </span>
            </a>

            {/* Chat on WeChat */}
            <a 
              href="weixin://dl/chat?wechat_id_placeholder"
              className="bg-green-600 text-white p-6 rounded-lg hover:bg-green-700 transition-colors flex flex-col items-center gap-3 group"
            >
              <div className="text-4xl">💬</div>
              <span className="font-bold text-base">
                {language === 'en' ? 'Chat on WeChat' : '微信聊天'}
              </span>
              <span className="text-xs opacity-80">
                {language === 'en' ? 'Instant Messaging' : '即时消息'}
              </span>
            </a>

            {/* Chat on WhatsApp */}
            <a 
              href="https://wa.me/254XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white p-6 rounded-lg hover:bg-green-600 transition-colors flex flex-col items-center gap-3 group"
            >
              <div className="text-4xl">📱</div>
              <span className="font-bold text-base">
                {language === 'en' ? 'Chat on WhatsApp' : 'WhatsApp聊天'}
              </span>
              <span className="text-xs opacity-80">
                {language === 'en' ? '24/7 Available' : '24/7可用'}
              </span>
            </a>

            {/* Schedule Consultation */}
            <a 
              href="/contact"
              className="bg-orange-500 text-white p-6 rounded-lg hover:bg-orange-600 transition-colors flex flex-col items-center gap-3 group"
            >
              <div className="text-4xl">📅</div>
              <span className="font-bold text-base">
                {language === 'en' ? 'Schedule Consultation' : '安排咨询'}
              </span>
              <span className="text-xs opacity-80">
                {language === 'en' ? 'Book a Meeting' : '预约会议'}
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer language={language} />
    </div>
  );
}
