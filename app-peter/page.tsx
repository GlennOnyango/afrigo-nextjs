'use client';

import { useState } from 'react';
import RegistrationPopup from './RegistrationPopup';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'zh'>('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <>
      <RegistrationPopup language={language} onLanguageToggle={toggleLanguage} />
      <div className="min-h-screen bg-white">
        {/* Global Header */}
        <Header language={language} onLanguageToggle={toggleLanguage} currentPage="home" />

        {/* Hero Section with Background Image */}
        <section 
          className="min-h-[80vh] py-16 sm:py-20 lg:py-24 relative bg-cover bg-center bg-gray-700 flex items-center"
          style={{
            backgroundImage: "url('/images/afrigo_home_hero.png')",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
          
          {/* Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              {language === 'en' 
                ? 'YOUR TRUSTED EXECUTION DESK IN KENYA'
                : '您在肯尼亚值得信赖的执行台'}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white mb-3 sm:mb-4">
              {language === 'en'
                ? 'Hassle-Free Market Entry | Supply Chain Excellence | Verified Local Partnerships'
                : '无忧市场进入 | 供应链卓越 | 经过验证的本地合作伙伴关系'}
            </p>
            <p className="text-xs sm:text-sm text-blue-300 mb-6 sm:mb-8">
              {language === 'en'
                ? '500+ Successful Launches | $50M+ in Facilitated Trade | ISO Certified'
                : '500+次成功启动 | 促成超过5000万美元的贸易 | ISO认证'}
            </p>
            <a 
              href="/services"
              className="inline-block bg-orange-500 text-white px-12 sm:px-16 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded hover:bg-orange-600 transition-colors"
            >
              {language === 'en' ? 'Our Services →' : '我们的服务 →'}
            </a>
            <div className="mt-6 sm:mt-8 bg-gray-800 bg-opacity-70 border border-gray-600 py-2 px-4 max-w-md mx-auto text-xs sm:text-sm text-white rounded">
              ▶ {language === 'en' 
                  ? 'Watch How We Help Businesses Launch in Kenya'
                  : '观看我们如何帮助企业在肯尼亚启动'}
            </div>
            <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-white">
              {language === 'en' ? 'Quick Start:' : '快速开始：'}{' '}
              <a href="/services" className="text-blue-300 font-semibold hover:underline">
                {language === 'en' ? 'View Services' : '查看服务'}
              </a> | 
              <a href="/partners/directory" className="text-blue-300 font-semibold hover:underline ml-1">
                {language === 'en' ? 'Partner Directory' : '合作伙伴目录'}
              </a> | 
              <a href="/news" className="text-blue-300 font-semibold hover:underline ml-1">
                {language === 'en' ? 'Latest News' : '最新消息'}
              </a>
            </div>
          </div>
        </section>

        {/* About AfriGo Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-8 sm:mb-12">
              {language === 'en' ? 'ABOUT AFRIGO' : '关于AFRIGO'}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div 
                className="h-64 sm:h-80 bg-cover bg-center rounded border border-gray-400"
                style={{
                  backgroundImage: "url('/images/afrigo_home_about.jpg')",
                }}
              ></div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-orange-500">
                  {language === 'en' ? "Kenya's Premier Business" : '肯尼亚首屈一指的商业'}
                </h3>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-orange-500">
                  {language === 'en' ? 'Facilitation Platform' : '促进平台'}
                </h3>
                <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                  {language === 'en'
                    ? 'Since 2020, AfriGo has been the trusted bridge between China and Kenya, helping 500+ businesses successfully enter and thrive in the Kenyan market.'
                    : '自2020年以来，AfriGo一直是中国和肯尼亚之间值得信赖的桥梁，帮助500多家企业成功进入并在肯尼亚市场蓬勃发展。'}
                </p>
                <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                  {language === 'en'
                    ? 'We provide end-to-end solutions: from supply chain management and verified partnerships to complete market entry support.'
                    : '我们提供端到端解决方案：从供应链管理和经过验证的合作伙伴关系到完整的市场进入支持。'}
                </p>
                <p className="text-gray-700 text-sm mb-6 sm:mb-8 leading-relaxed">
                  {language === 'en'
                    ? 'Our bilingual team handles everything - compliance, logistics, partnerships, and operations - so you can focus on growth.'
                    : '我们的双语团队处理一切 - 合规、物流、合作伙伴关系和运营 - 因此您可以专注于增长。'}
                </p>
                <a 
                  href="/about"
                  className="inline-block bg-blue-900 text-white px-6 sm:px-8 py-2 sm:py-3 text-sm rounded hover:bg-blue-800 transition-colors"
                >
                  {language === 'en' ? 'Learn More About Us →' : '了解更多关于我们 →'}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* The AfriGo Platform - 4 Boxes + Authority Badge */}
        <section className="bg-gray-100 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              {language === 'en' ? 'THE AFRIGO PLATFORM' : 'AFRIGO平台'}
            </h2>
            <p className="text-gray-600 mb-8 sm:mb-12">
              {language === 'en' ? 'Choose your pathway to success in Kenya' : '选择您在肯尼亚成功的途径'}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Box 1 */}
              <a 
                href="/services"
                className="bg-white border-2 border-blue-900 p-6 rounded hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl sm:text-5xl mb-4">🏢</div>
                <h3 className="font-bold text-base mb-3 text-orange-500">
                  {language === 'en' ? 'For Consulting Clients' : '咨询客户'}
                </h3>
                <p className="text-xs text-gray-600 mb-4">
                  {language === 'en' 
                    ? 'Complete market entry & operations support'
                    : '完整的市场进入和运营支持'}
                </p>
                <p className="text-blue-600 text-xs font-semibold">
                  {language === 'en' ? 'Click to Learn More →' : '点击了解更多 →'}
                </p>
              </a>

              {/* Box 2 */}
              <a 
                href="/partners"
                className="bg-white border-2 border-blue-900 p-6 rounded hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl sm:text-5xl mb-4">🤝</div>
                <h3 className="font-bold text-base mb-3 text-orange-500">
                  {language === 'en' ? 'For Resource Partners' : '资源合作伙伴'}
                </h3>
                <p className="text-xs text-gray-600 mb-4">
                  {language === 'en'
                    ? 'Join our verified partner network'
                    : '加入我们经过验证的合作伙伴网络'}
                </p>
                <p className="text-blue-600 text-xs font-semibold">
                  {language === 'en' ? 'Click to Learn More →' : '点击了解更多 →'}
                </p>
              </a>

              {/* Box 3 */}
              <a 
                href="/services"
                className="bg-white border-2 border-blue-900 p-6 rounded hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl sm:text-5xl mb-4">💼</div>
                <h3 className="font-bold text-base mb-3 text-orange-500">
                  {language === 'en' ? 'For Investors' : '投资者'}
                </h3>
                <p className="text-xs text-gray-600 mb-4">
                  {language === 'en'
                    ? 'Your trusted execution desk in Kenya'
                    : '您在肯尼亚值得信赖的执行台'}
                </p>
                <p className="text-blue-600 text-xs font-semibold">
                  {language === 'en' ? 'Click to Learn More →' : '点击了解更多 →'}
                </p>
              </a>

              {/* Box 4 */}
              <a 
                href="/promoter"
                className="bg-white border-2 border-blue-900 p-6 rounded hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl sm:text-5xl mb-4">💰</div>
                <h3 className="font-bold text-base mb-3 text-orange-500">
                  {language === 'en' ? 'For Promoters' : '推广者'}
                </h3>
                <p className="text-xs text-gray-600 mb-4">
                  {language === 'en'
                    ? 'Earn by referring businesses & partners'
                    : '通过推荐企业和合作伙伴赚钱'}
                </p>
                <p className="text-blue-600 text-xs font-semibold">
                  {language === 'en' ? 'Click to Learn More →' : '点击了解更多 →'}
                </p>
              </a>
            </div>

            {/* Authority Certified Badge - Centered */}
            <div className="flex justify-center mt-8">
              <div className="bg-green-600 text-white px-8 sm:px-12 py-3 rounded flex items-center gap-3">
                <div className="bg-white text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold">
                  ✓
                </div>
                <span className="text-base sm:text-lg font-bold">
                  {language === 'en' ? 'Authority Certified' : '权威认证'}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - 1x4 Desktop, 2x2 Mobile */}
        <section className="bg-gray-100 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-8 sm:mb-12">
              {language === 'en' ? 'HOW THE PLATFORM WORKS' : '平台如何运作'}
            </h2>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="bg-orange-500 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-2xl sm:text-3xl font-bold mb-4">
                  1
                </div>
                <h3 className="font-bold text-base mb-1">
                  {language === 'en' ? 'Register' : '注册'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === 'en' ? 'Create your account' : '创建您的账户'}
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="bg-orange-500 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-2xl sm:text-3xl font-bold mb-4">
                  2
                </div>
                <h3 className="font-bold text-base mb-1">
                  {language === 'en' ? 'Select Services' : '选择服务'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === 'en' ? 'Choose what you need' : '选择您需要的'}
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="bg-orange-500 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-2xl sm:text-3xl font-bold mb-4">
                  3
                </div>
                <h3 className="font-bold text-base mb-1">
                  {language === 'en' ? 'We Execute' : '我们执行'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === 'en' ? 'Sit back, we handle it' : '坐下来，我们处理'}
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center">
                <div className="bg-orange-500 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-2xl sm:text-3xl font-bold mb-4">
                  4
                </div>
                <h3 className="font-bold text-base mb-1">
                  {language === 'en' ? 'Launch & Grow' : '启动和成长'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === 'en' ? "You're operational" : '您已经运营'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2">
              {language === 'en' ? 'OUR SERVICES' : '我们的服务'}
            </h2>
            <p className="text-gray-600 text-sm mb-8 sm:mb-12">
              {language === 'en' 
                ? 'Comprehensive solutions for every stage of your journey'
                : '为您旅程的每个阶段提供全面的解决方案'}
            </p>
            
            <div className="space-y-6">
              {/* First Row - 3 tiles */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a href="/services" className="bg-blue-900 text-white p-6 rounded flex items-start gap-4 hover:bg-blue-800 transition-colors">
                  <div className="bg-white text-blue-900 p-3 rounded text-xl flex-shrink-0">☰</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      {language === 'en' ? 'Supply Chain Mgmt' : '供应链管理'}
                    </h3>
                    <p className="text-sm mb-3">
                      {language === 'en' ? 'Sourcing to distribution' : '采购到分销'}
                    </p>
                    <p className="text-sm">
                      {language === 'en' ? 'Learn More →' : '了解更多 →'}
                    </p>
                  </div>
                </a>

                <a href="/services" className="bg-blue-900 text-white p-6 rounded flex items-start gap-4 hover:bg-blue-800 transition-colors">
                  <div className="bg-white text-blue-900 p-3 rounded text-xl flex-shrink-0">☰</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      {language === 'en' ? 'Service Partnerships' : '服务合作伙伴关系'}
                    </h3>
                    <p className="text-sm mb-3">
                      {language === 'en' ? '200+ verified partners' : '200多个经过验证的合作伙伴'}
                    </p>
                    <p className="text-sm">
                      {language === 'en' ? 'Learn More →' : '了解更多 →'}
                    </p>
                  </div>
                </a>

                <a href="/services" className="bg-blue-900 text-white p-6 rounded flex items-start gap-4 hover:bg-blue-800 transition-colors">
                  <div className="bg-white text-blue-900 p-3 rounded text-xl flex-shrink-0">☰</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      {language === 'en' ? 'Resource Solutions' : '资源解决方案'}
                    </h3>
                    <p className="text-sm mb-3">
                      {language === 'en' ? 'Warehouses & offices' : '仓库和办公室'}
                    </p>
                    <p className="text-sm">
                      {language === 'en' ? 'Learn More →' : '了解更多 →'}
                    </p>
                  </div>
                </a>
              </div>

              {/* Second Row - 2 tiles centered */}
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <a href="/services" className="bg-blue-900 text-white p-6 rounded flex items-start gap-4 md:w-[calc(33.333%-1rem)] hover:bg-blue-800 transition-colors">
                  <div className="bg-white text-blue-900 p-3 rounded text-xl flex-shrink-0">☰</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      {language === 'en' ? 'Custom Solutions' : '定制解决方案'}
                    </h3>
                    <p className="text-sm mb-3">
                      {language === 'en' ? 'Tailored packages' : '量身定制的套餐'}
                    </p>
                    <p className="text-sm">
                      {language === 'en' ? 'Learn More →' : '了解更多 →'}
                    </p>
                  </div>
                </a>

                <a href="/services" className="bg-orange-500 text-white p-6 rounded flex items-start gap-4 md:w-[calc(33.333%-1rem)] hover:bg-orange-600 transition-colors">
                  <div className="bg-white text-orange-500 p-3 rounded text-xl flex-shrink-0">☰</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      {language === 'en' ? 'All Services →' : '所有服务 →'}
                    </h3>
                    <p className="text-sm mb-3">
                      {language === 'en' ? 'View complete list' : '查看完整列表'}
                    </p>
                    <p className="text-sm text-blue-900">
                      {language === 'en' ? 'Learn More →' : '了解更多 →'}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Opportunities */}
        <section className="bg-gray-100 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              {language === 'en' ? 'PARTNERSHIP OPPORTUNITIES' : '合作机会'}
            </h2>
            <p className="text-gray-600 mb-8 sm:mb-12">
              {language === 'en' 
                ? 'Join our growing network and grow your business'
                : '加入我们不断增长的网络并发展您的业务'}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Card 1 */}
              <div className="bg-white border-2 border-gray-300 rounded overflow-hidden">
                <div className="bg-blue-900 text-white py-3 px-4">
                  <h3 className="font-bold">
                    {language === 'en' ? 'Service Partner' : '服务合作伙伴'}
                  </h3>
                </div>
                <div className="p-6 text-left">
                  <p className="text-sm text-gray-700 mb-3">
                    {language === 'en' 
                      ? 'Provide services to Chinese businesses'
                      : '为中国企业提供服务'}
                  </p>
                  <p className="text-xs text-gray-600 mb-4">
                    {language === 'en'
                      ? 'Hotels, Transport, Legal, Finance, etc.'
                      : '酒店、交通、法律、金融等'}
                  </p>
                  <a href="/partners" className="text-blue-600 text-sm font-semibold block text-center hover:underline">
                    {language === 'en' ? 'Learn More →' : '了解更多 →'}
                  </a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white border-2 border-gray-300 rounded overflow-hidden">
                <div className="bg-blue-900 text-white py-3 px-4">
                  <h3 className="font-bold">
                    {language === 'en' ? 'Resource Provider' : '资源提供商'}
                  </h3>
                </div>
                <div className="p-6 text-left">
                  <p className="text-sm text-gray-700 mb-3">
                    {language === 'en'
                      ? 'Offer warehouses, offices, equipment'
                      : '提供仓库、办公室、设备'}
                  </p>
                  <p className="text-xs text-gray-600 mb-4">
                    {language === 'en'
                      ? 'Real estate, facilities, infrastructure'
                      : '房地产、设施、基础设施'}
                  </p>
                  <a href="/partners" className="text-blue-600 text-sm font-semibold block text-center hover:underline">
                    {language === 'en' ? 'Learn More →' : '了解更多 →'}
                  </a>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white border-2 border-gray-300 rounded overflow-hidden">
                <div className="bg-blue-900 text-white py-3 px-4">
                  <h3 className="font-bold">
                    {language === 'en' ? 'Rental/Lease Partner' : '租赁合作伙伴'}
                  </h3>
                </div>
                <div className="p-6 text-left">
                  <p className="text-sm text-gray-700 mb-3">
                    {language === 'en'
                      ? 'Property and equipment solutions'
                      : '物业和设备解决方案'}
                  </p>
                  <p className="text-xs text-gray-600 mb-4">
                    {language === 'en'
                      ? 'Commercial spaces, machinery, vehicles'
                      : '商业空间、机械、车辆'}
                  </p>
                  <a href="/partners" className="text-blue-600 text-sm font-semibold block text-center hover:underline">
                    {language === 'en' ? 'Learn More →' : '了解更多 →'}
                  </a>
                </div>
              </div>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/partners"
                className="inline-block bg-blue-900 text-white px-10 py-3 text-sm rounded hover:bg-blue-800 transition-colors"
              >
                {language === 'en' ? 'How to Be a Partner →' : '如何成为合作伙伴 →'}
              </a>
              <a 
                href="/partners/directory"
                className="inline-block bg-orange-500 text-white px-10 py-3 text-sm rounded hover:bg-orange-600 transition-colors"
              >
                {language === 'en' ? 'Visit Partner Directory →' : '访问合作伙伴目录 →'}
              </a>
            </div>
          </div>
        </section>

        {/* Trusted by Partners */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12">
              {language === 'en' ? 'TRUSTED BY 200+ VERIFIED PARTNERS' : '200多个经过验证的合作伙伴信任'}
            </h2>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="bg-white border-2 border-gray-300 h-20 sm:h-24 flex items-center justify-center text-gray-400 text-xs">
                  LOGO
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Earn by Referring */}
        <section className="bg-gray-100 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              {language === 'en' ? 'EARN BY REFERRING BUSINESSES' : '通过推荐企业赚钱'}
            </h2>
            <p className="text-gray-600 mb-8 sm:mb-12">
              {language === 'en'
                ? 'Join our promoter network and earn commissions on every successful referral'
                : '加入我们的推广者网络，每次成功推荐都能赚取佣金'}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-orange-500 text-white p-6 sm:p-8 rounded">
                <p className="text-2xl sm:text-3xl font-bold mb-2">5-10%</p>
                <p className="text-sm">
                  {language === 'en' ? 'Service Setup' : '服务设置'}
                </p>
              </div>
              <div className="bg-orange-500 text-white p-6 sm:p-8 rounded">
                <p className="text-2xl sm:text-3xl font-bold mb-2">3%</p>
                <p className="text-sm">
                  {language === 'en' ? 'Monthly Recurring' : '每月经常性'}
                </p>
              </div>
              <div className="bg-orange-500 text-white p-6 sm:p-8 rounded">
                <p className="text-2xl sm:text-3xl font-bold mb-2">$200-500</p>
                <p className="text-sm">
                  {language === 'en' ? 'Partner Referral' : '合作伙伴推荐'}
                </p>
              </div>
            </div>

            <a 
              href="/promoter"
              className="inline-block bg-blue-900 text-white px-12 py-3 text-sm rounded hover:bg-blue-800 transition-colors"
            >
              {language === 'en' ? 'Become a Promoter Today →' : '立即成为推广者 →'}
            </a>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              {language === 'en' ? 'SUCCESS STORIES' : '成功案例'}
            </h2>
            <p className="text-gray-600 mb-8 sm:mb-12">
              {language === 'en'
                ? "Real results from businesses we've helped launch in Kenya"
                : '我们帮助在肯尼亚启动的企业的真实结果'}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-gray-100 border-2 border-gray-300 rounded p-6">
                  <div className="bg-gray-300 h-32 flex items-center justify-center mb-4 text-4xl">
                    ▶
                  </div>
                  <p className="font-bold text-sm mb-2">
                    {language === 'en'
                      ? '"AfriGo helped us launch in 45 days"'
                      : '"AfriGo帮助我们在45天内启动"'}
                  </p>
                  <p className="text-xs text-gray-600">
                    {language === 'en' ? '— Company Name, Industry' : '— 公司名称，行业'}
                  </p>
                </div>
              ))}
            </div>
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

        {/* News CTA */}
        <section className="bg-blue-900 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {language === 'en' ? 'STAY INFORMED WITH LATEST NEWS' : '了解最新消息'}
            </h2>
            <p className="text-white mb-6 sm:mb-8">
              {language === 'en'
                ? 'Get updates on Kenya-China business, finance, and investment from trusted sources'
                : '从可信来源获取肯尼亚-中国商业、金融和投资的最新信息'}
            </p>
            <a 
              href="/news"
              className="inline-block bg-orange-500 text-white px-12 py-3 rounded hover:bg-orange-600 transition-colors"
            >
              {language === 'en' ? 'Read Latest News →' : '阅读最新消息 →'}
            </a>
          </div>
        </section>

        {/* Global Footer */}
        <Footer language={language} />
      </div>
    </>
  );
}
