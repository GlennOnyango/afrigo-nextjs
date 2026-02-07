'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NewsPage() {
  const [language, setLanguage] = useState<'en' | 'zh'>('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Global Header */}
      <Header language={language} onLanguageToggle={toggleLanguage} currentPage="news" />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-xs sm:text-sm text-gray-600">
            <a href="/" className="hover:text-blue-900">
              {language === 'en' ? 'Home' : '首页'}
            </a> &gt; {language === 'en' ? 'News' : '新闻'}
          </p>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <section 
        className="py-12 sm:py-16 relative bg-cover bg-center bg-gray-700"
        style={{
          backgroundImage: "url('/images/afrigo_news.jpg')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {language === 'en'
              ? 'KENYA-CHINA BUSINESS NEWS'
              : '肯尼亚-中国商业新闻'}
          </h1>
          <p className="text-base sm:text-lg text-white mb-6">
            {language === 'en'
              ? 'Stay informed with the latest updates from authoritative sources'
              : '从权威来源获取最新信息'}
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-white">
            <span>{language === 'en' ? 'Sources:' : '来源：'}</span>
            <span className="text-blue-300 font-semibold">Reuters</span>
            <span>|</span>
            <span className="text-blue-300 font-semibold">Bloomberg</span>
            <span>|</span>
            <span className="text-blue-300 font-semibold">Nation</span>
            <span>|</span>
            <span className="text-blue-300 font-semibold">Standard</span>
            <span>|</span>
            <span className="text-blue-300 font-semibold">Business Daily</span>
          </div>
        </div>
      </section>

      {/* Filter by Category */}
      <section className="bg-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-sm font-bold mb-3">
            {language === 'en' ? 'FILTER BY CATEGORY:' : '按类别筛选：'}
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <button className="bg-blue-900 text-white px-4 sm:px-6 py-2 rounded text-xs sm:text-sm">
              {language === 'en' ? 'All News' : '所有新闻'}
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 sm:px-6 py-2 rounded text-xs sm:text-sm hover:bg-gray-300">
              {language === 'en' ? 'Financial' : '金融'}
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 sm:px-6 py-2 rounded text-xs sm:text-sm hover:bg-gray-300">
              {language === 'en' ? 'Business/Commercial' : '商业/贸易'}
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 sm:px-6 py-2 rounded text-xs sm:text-sm hover:bg-gray-300">
              {language === 'en' ? 'Political & Security' : '政治与安全'}
            </button>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-6 sm:mb-8">
            {language === 'en' ? 'FEATURED NEWS' : '特色新闻'}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Large Featured */}
            <div className="bg-gray-200 rounded overflow-hidden">
              <div className="h-48 sm:h-64 bg-gray-300 flex items-center justify-center border-b border-gray-400">
                <span className="text-gray-500">[News Image]</span>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-green-600 text-white text-xs px-3 py-1 rounded">
                    {language === 'en' ? 'Financial' : '金融'}
                  </span>
                  <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded">Bloomberg</span>
                </div>
                <h3 className="font-bold text-base sm:text-lg mb-2">
                  {language === 'en'
                    ? 'Kenya Central Bank Adjusts Interest Rates for 2026 →'
                    : '肯尼亚中央银行调整2026年利率 →'}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === 'en' ? 'Dec 15, 2025' : '2025年12月15日'}
                </p>
              </div>
            </div>

            {/* Two smaller featured */}
            <div className="space-y-6">
              <div className="bg-blue-900 text-white rounded overflow-hidden">
                <div className="p-4 sm:p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded">
                      {language === 'en' ? 'Business/Commercial' : '商业/贸易'}
                    </span>
                    <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded">Reuters</span>
                  </div>
                  <h3 className="font-bold text-base sm:text-lg mb-2">
                    {language === 'en'
                      ? 'New Trade Agreement Signed Between Kenya and China'
                      : '肯尼亚与中国签署新贸易协定'}
                  </h3>
                  <p className="text-sm">
                    {language === 'en' ? 'Dec 18, 2025' : '2025年12月18日'}
                  </p>
                </div>
              </div>

              <div className="bg-blue-900 text-white rounded overflow-hidden">
                <div className="p-4 sm:p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-red-600 text-white text-xs px-3 py-1 rounded">
                      {language === 'en' ? 'Political & Security' : '政治与安全'}
                    </span>
                    <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded">Nation</span>
                  </div>
                  <h3 className="font-bold text-base sm:text-lg mb-2">
                    {language === 'en'
                      ? 'Enhanced Business Security Measures for Foreign Investors'
                      : '加强外国投资者商业安全措施'}
                  </h3>
                  <p className="text-sm">
                    {language === 'en' ? 'Dec 14, 2025' : '2025年12月14日'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial News */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-green-600">
              {language === 'en' ? 'FINANCIAL NEWS' : '金融新闻'}
            </h2>
            <a href="#" className="text-green-600 text-sm sm:text-base font-semibold hover:underline">
              {language === 'en' ? 'View All →' : '查看全部 →'}
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: language === 'en' ? 'KES Currency Strengthens Against Major Currencies' : '肯尼亚先令对主要货币走强', date: language === 'en' ? 'Dec 12, 2025' : '2025年12月12日' },
              { title: language === 'en' ? "Kenya's GDP Growth Projected at 6.2% for 2026" : '肯尼亚2026年GDP增长预计为6.2%', date: language === 'en' ? 'Dec 10, 2025' : '2025年12月10日' },
              { title: language === 'en' ? 'Nairobi Securities Exchange Reaches New High' : '内罗毕证券交易所达到新高', date: language === 'en' ? 'Dec 08, 2025' : '2025年12月8日' },
              { title: language === 'en' ? 'Chinese Direct Investment Increases 40% in Q4' : '第四季度中国直接投资增长40%', date: language === 'en' ? 'Dec 07, 2025' : '2025年12月7日' },
              { title: language === 'en' ? 'Central Bank Maintains Stable Monetary Policy' : '中央银行维持稳定的货币政策', date: language === 'en' ? 'Dec 05, 2025' : '2025年12月5日' },
              { title: language === 'en' ? 'Kenya-China Trade Volume Hits $10B Milestone' : '肯尼亚-中国贸易额达到100亿美元里程碑', date: language === 'en' ? 'Dec 03, 2025' : '2025年12月3日' }
            ].map((news, i) => (
              <div key={i} className="bg-white border-2 border-gray-300 rounded overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-32 bg-gray-300 flex items-center justify-center border-b border-gray-400">
                  <span className="text-gray-500 text-sm">[News Image]</span>
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                      {language === 'en' ? 'Financial' : '金融'}
                    </span>
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">Bloomberg</span>
                  </div>
                  <h3 className="font-bold text-sm mb-2">{news.title}</h3>
                  <p className="text-xs text-gray-600">{news.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business/Commercial News */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-orange-500">
              {language === 'en' ? 'BUSINESS/COMMERCIAL NEWS' : '商业/贸易新闻'}
            </h2>
            <a href="#" className="text-orange-500 text-sm sm:text-base font-semibold hover:underline">
              {language === 'en' ? 'View All →' : '查看全部 →'}
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: language === 'en' ? 'Major Chinese Retailer Opens 10 New Stores in Kenya' : '大型中国零售商在肯尼亚开设10家新店', date: language === 'en' ? 'Dec 11, 2025' : '2025年12月11日' },
              { title: language === 'en' ? 'Manufacturing Sector Reports Record Production' : '制造业报告创纪录生产', date: language === 'en' ? 'Dec 09, 2025' : '2025年12月9日' },
              { title: language === 'en' ? 'E-Commerce Growth Accelerates in East Africa' : '东非电子商务增长加速', date: language === 'en' ? 'Dec 08, 2025' : '2025年12月8日' },
              { title: language === 'en' ? "New Industrial Park Opens in Nairobi's SEZ" : '内罗毕经济特区新工业园开业', date: language === 'en' ? 'Dec 06, 2025' : '2025年12月6日' },
              { title: language === 'en' ? 'Kenya Becomes Regional Hub for Tech Startups' : '肯尼亚成为科技初创公司的区域中心', date: language === 'en' ? 'Dec 04, 2025' : '2025年12月4日' },
              { title: language === 'en' ? 'Logistics Infrastructure Investment Expansion' : '物流基础设施投资扩张', date: language === 'en' ? 'Dec 02, 2025' : '2025年12月2日' }
            ].map((news, i) => (
              <div key={i} className="bg-white border-2 border-gray-300 rounded overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-32 bg-gray-300 flex items-center justify-center border-b border-gray-400">
                  <span className="text-gray-500 text-sm">[News Image]</span>
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                      {language === 'en' ? 'Business/Commercial' : '商业/贸易'}
                    </span>
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">Reuters</span>
                  </div>
                  <h3 className="font-bold text-sm mb-2">{news.title}</h3>
                  <p className="text-xs text-gray-600">{news.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Political & Security News */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-red-600">
              {language === 'en' ? 'POLITICAL & SECURITY NEWS' : '政治与安全新闻'}
            </h2>
            <a href="#" className="text-red-600 text-sm sm:text-base font-semibold hover:underline">
              {language === 'en' ? 'View All →' : '查看全部 →'}
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: language === 'en' ? 'New Investment Laws Passed to Attract Foreign Capital' : '通过新投资法吸引外资', date: language === 'en' ? 'Dec 13, 2025' : '2025年12月13日' },
              { title: language === 'en' ? 'Kenya-China Bilateral Relations Strengthen' : '肯尼亚-中国双边关系加强', date: language === 'en' ? 'Dec 11, 2025' : '2025年12月11日' },
              { title: language === 'en' ? 'Enhanced Security Measures for Business Districts' : '加强商业区安全措施', date: language === 'en' ? 'Dec 10, 2025' : '2025年12月10日' },
              { title: language === 'en' ? 'Government Streamlines Business Registration' : '政府简化企业注册', date: language === 'en' ? 'Dec 08, 2025' : '2025年12月8日' },
              { title: language === 'en' ? 'Political Stability Attracts Foreign Investors' : '政治稳定吸引外国投资者', date: language === 'en' ? 'Dec 06, 2025' : '2025年12月6日' },
              { title: language === 'en' ? 'New Visa Policies Facilitate Business Travel' : '新签证政策促进商务旅行', date: language === 'en' ? 'Dec 04, 2025' : '2025年12月4日' }
            ].map((news, i) => (
              <div key={i} className="bg-white border-2 border-gray-300 rounded overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-32 bg-gray-300 flex items-center justify-center border-b border-gray-400">
                  <span className="text-gray-500 text-sm">[News Image]</span>
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
                      {language === 'en' ? 'Political & Security' : '政治与安全'}
                    </span>
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">Nation</span>
                  </div>
                  <h3 className="font-bold text-sm mb-2">{news.title}</h3>
                  <p className="text-xs text-gray-600">{news.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">
            {language === 'en'
              ? 'Have Questions About Kenya-China Business?'
              : '对肯尼亚-中国商业有疑问？'}
          </h2>
          <p className="text-gray-600 mb-6 sm:mb-8">
            {language === 'en'
              ? 'Our team is here to help. Get in touch for personalized support.'
              : '我们的团队在这里提供帮助。联系我们获得个性化支持。'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact"
              className="inline-block bg-blue-900 text-white px-10 py-3 rounded hover:bg-blue-800 transition-colors"
            >
              {language === 'en' ? 'Contact Us →' : '联系我们 →'}
            </a>
            <a 
              href="/contact"
              className="inline-block bg-orange-500 text-white px-10 py-3 rounded hover:bg-orange-600 transition-colors"
            >
              {language === 'en' ? 'Schedule Consultation' : '安排咨询'}
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-blue-900 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {language === 'en'
              ? 'Stay Updated with Kenya-China Business News'
              : '了解肯尼亚-中国商业新闻'}
          </h2>
          <p className="text-white mb-6 sm:mb-8">
            {language === 'en'
              ? 'Get weekly insights delivered to your inbox from trusted sources'
              : '从可信来源获取每周见解到您的收件箱'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder={language === 'en' ? 'Enter your email address' : '输入您的电子邮件地址'}
              className="flex-1 px-4 py-3 rounded focus:outline-none"
            />
            <button className="bg-orange-500 text-white px-6 sm:px-8 py-3 rounded hover:bg-orange-600 transition-colors whitespace-nowrap">
              {language === 'en' ? 'Subscribe' : '订阅'}
            </button>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer language={language} />
    </div>
  );
}
