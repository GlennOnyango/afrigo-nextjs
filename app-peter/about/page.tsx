'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  const [language, setLanguage] = useState<'en' | 'zh'>('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Global Header */}
      <Header language={language} onLanguageToggle={toggleLanguage} currentPage="about" />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-xs sm:text-sm text-gray-600">
            <a href="/" className="hover:text-blue-900">
              {language === 'en' ? 'Home' : '首页'}
            </a> &gt; {language === 'en' ? 'About' : '关于'}
          </p>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <section 
        className="py-12 sm:py-16 lg:py-20 relative bg-cover bg-center bg-gray-700"
        style={{
          backgroundImage: "url('/images/afrigo_about_hero.jpg')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {language === 'en' 
              ? 'BRIDGING KENYA & CHINA SINCE 2020'
              : '自2020年以来连接肯尼亚和中国'}
          </h1>
          <p className="text-base sm:text-lg text-white mb-8 sm:mb-12">
            {language === 'en'
              ? 'Your Partner in Cross-Border Business Success'
              : '您的跨境业务成功合作伙伴'}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-blue-900 text-white p-4 sm:p-6 rounded">
              <p className="text-3xl sm:text-4xl font-bold mb-2">6+</p>
              <p className="text-xs sm:text-sm">
                {language === 'en' ? 'Years Experience' : '年经验'}
              </p>
            </div>
            <div className="bg-blue-900 text-white p-4 sm:p-6 rounded">
              <p className="text-3xl sm:text-4xl font-bold mb-2">500+</p>
              <p className="text-xs sm:text-sm">
                {language === 'en' ? 'Successful Launches' : '成功启动'}
              </p>
            </div>
            <div className="bg-blue-900 text-white p-4 sm:p-6 rounded">
              <p className="text-3xl sm:text-4xl font-bold mb-2">$50M+</p>
              <p className="text-xs sm:text-sm">
                {language === 'en' ? 'Trade Facilitated' : '促成的贸易'}
              </p>
            </div>
            <div className="bg-blue-900 text-white p-4 sm:p-6 rounded">
              <p className="text-3xl sm:text-4xl font-bold mb-2">200+</p>
              <p className="text-xs sm:text-sm">
                {language === 'en' ? 'Verified Partners' : '经过验证的合作伙伴'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About AfriGo & Our Founders */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12">
            {language === 'en' ? 'ABOUT AFRIGO & OUR FOUNDERS' : '关于AFRIGO及我们的创始人'}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Founder Photo */}
            <div 
              className="h-64 sm:h-80 lg:h-96 bg-cover bg-center rounded border border-gray-400"
              style={{
                backgroundImage: "url('/images/afrigo_about_intro.jpg')",
              }}
            ></div>

            {/* Company Story */}
            <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>
                {language === 'en'
                  ? 'AfriGo was founded in 2020 by [Founder Name], who envisioned fostering fruitful challenges Chinese businesses face when entering the Kenyan market.'
                  : 'AfriGo由[创始人姓名]于2020年创立，他设想促进中国企业进入肯尼亚市场时面临的富有成效的挑战。'}
              </p>
              <p>
                {language === 'en'
                  ? 'Our mission is simple: Make cross-border business effortless. We bridge the gap between China and Kenya, providing end-to-end support for market entry, operations, and growth.'
                  : '我们的使命很简单：让跨境业务变得轻松。我们弥合中国和肯尼亚之间的差距，为市场进入、运营和增长提供端到端支持。'}
              </p>
              <p>
                {language === 'en'
                  ? "Today, we're proud to have helped 500+ businesses successfully launch in Kenya, facilitated over $50M in trade, and built a network of 200+ verified partners."
                  : '今天，我们自豪地帮助500多家企业成功在肯尼亚启动，促成超过5000万美元的贸易，并建立了200多个经过验证的合作伙伴网络。'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AfriGo Services */}
      <section className="bg-gray-100 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12">
            {language === 'en' ? 'AFRIGO SERVICES' : 'AFRIGO服务'}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 */}
            <a href="/services" className="bg-blue-900 text-white p-6 rounded hover:bg-blue-800 transition-colors">
              <div className="bg-white text-blue-900 p-3 rounded inline-block mb-4">
                <span className="text-2xl">☰</span>
              </div>
              <h3 className="font-bold text-lg mb-2">
                {language === 'en' ? 'Supply Chain Mgmt' : '供应链管理'}
              </h3>
              <p className="text-sm mb-4">
                {language === 'en' ? 'Brief description of service' : '服务简介'}
              </p>
              <span className="text-sm hover:underline">
                {language === 'en' ? 'Learn More →' : '了解更多 →'}
              </span>
            </a>

            {/* Service 2 */}
            <a href="/services" className="bg-blue-900 text-white p-6 rounded hover:bg-blue-800 transition-colors">
              <div className="bg-white text-blue-900 p-3 rounded inline-block mb-4">
                <span className="text-2xl">☰</span>
              </div>
              <h3 className="font-bold text-lg mb-2">
                {language === 'en' ? 'Service Partnerships' : '服务合作伙伴关系'}
              </h3>
              <p className="text-sm mb-4">
                {language === 'en' ? 'Brief description of service' : '服务简介'}
              </p>
              <span className="text-sm hover:underline">
                {language === 'en' ? 'Learn More →' : '了解更多 →'}
              </span>
            </a>

            {/* Service 3 */}
            <a href="/services" className="bg-blue-900 text-white p-6 rounded hover:bg-blue-800 transition-colors">
              <div className="bg-white text-blue-900 p-3 rounded inline-block mb-4">
                <span className="text-2xl">☰</span>
              </div>
              <h3 className="font-bold text-lg mb-2">
                {language === 'en' ? 'Resource Solutions' : '资源解决方案'}
              </h3>
              <p className="text-sm mb-4">
                {language === 'en' ? 'Brief description of service' : '服务简介'}
              </p>
              <span className="text-sm hover:underline">
                {language === 'en' ? 'Learn More →' : '了解更多 →'}
              </span>
            </a>

            {/* Service 4 */}
            <a href="/services" className="bg-blue-900 text-white p-6 rounded hover:bg-blue-800 transition-colors">
              <div className="bg-white text-blue-900 p-3 rounded inline-block mb-4">
                <span className="text-2xl">☰</span>
              </div>
              <h3 className="font-bold text-lg mb-2">
                {language === 'en' ? 'Custom Solutions' : '定制解决方案'}
              </h3>
              <p className="text-sm mb-4">
                {language === 'en' ? 'Brief description of service' : '服务简介'}
              </p>
              <span className="text-sm hover:underline">
                {language === 'en' ? 'Learn More →' : '了解更多 →'}
              </span>
            </a>

            {/* All Services */}
            <a href="/services" className="bg-orange-500 text-white p-6 rounded hover:bg-orange-600 transition-colors">
              <div className="bg-white text-orange-500 p-3 rounded inline-block mb-4">
                <span className="text-2xl">☰</span>
              </div>
              <h3 className="font-bold text-lg mb-2">
                {language === 'en' ? 'All Services →' : '所有服务 →'}
              </h3>
              <p className="text-sm mb-4">
                {language === 'en' ? 'View complete service list' : '查看完整服务列表'}
              </p>
              <span className="text-sm text-blue-900 hover:underline">
                {language === 'en' ? 'Learn More →' : '了解更多 →'}
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* How AfriGo Works */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12 text-center">
            {language === 'en' ? 'HOW AFRIGO WORKS' : 'AFRIGO如何运作'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Chinese Businesses */}
            <div className="border-2 border-gray-300 rounded overflow-hidden">
              <div className="bg-blue-900 text-white text-center py-3">
                <h3 className="font-bold">
                  {language === 'en' ? 'Chinese Businesses' : '中国企业'}
                </h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <p className="text-orange-500 font-bold mb-2">
                    {language === 'en' ? 'Market Entry Support' : '市场进入支持'}
                  </p>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• {language === 'en' ? 'Supply chain' : '供应链'}</li>
                  <li>• {language === 'en' ? 'Local partners' : '本地合作伙伴'}</li>
                  <li>• {language === 'en' ? 'Compliance' : '合规'}</li>
                </ul>
              </div>
            </div>

            {/* Service Partners */}
            <div className="border-2 border-gray-300 rounded overflow-hidden">
              <div className="bg-blue-900 text-white text-center py-3">
                <h3 className="font-bold">
                  {language === 'en' ? 'Service Partners' : '服务合作伙伴'}
                </h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <p className="text-orange-500 font-bold mb-2">
                    {language === 'en' ? 'Qualified Leads' : '合格的潜在客户'}
                  </p>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• {language === 'en' ? 'Direct referrals' : '直接推荐'}</li>
                  <li>• {language === 'en' ? 'Competitive model' : '竞争模式'}</li>
                  <li>• {language === 'en' ? 'Support' : '支持'}</li>
                </ul>
              </div>
            </div>

            {/* Kenyan Businesses */}
            <div className="border-2 border-gray-300 rounded overflow-hidden">
              <div className="bg-blue-900 text-white text-center py-3">
                <h3 className="font-bold">
                  {language === 'en' ? 'Kenyan Businesses' : '肯尼亚企业'}
                </h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <p className="text-orange-500 font-bold mb-2">
                    {language === 'en' ? 'Chinese Connections' : '中国联系'}
                  </p>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• {language === 'en' ? 'Supplier access' : '供应商访问'}</li>
                  <li>• {language === 'en' ? 'Investment links' : '投资联系'}</li>
                  <li>• {language === 'en' ? 'Trade support' : '贸易支持'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment/Partnership CTA */}
      <section className="bg-blue-900 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {language === 'en'
              ? 'Looking to Explore/Invest in Kenya?'
              : '想探索/投资肯尼亚？'}
          </h2>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {language === 'en'
              ? 'We Will Help You Get Started.'
              : '我们将帮助您开始。'}
          </h2>
          <p className="text-white text-base sm:text-lg mb-6 sm:mb-8 opacity-90">
            {language === 'en'
              ? 'With you through the entire Journey.'
              : '陪伴您走过整个旅程'}
          </p>
          <a 
            href="#contact-section"
            className="inline-block bg-orange-500 text-white px-10 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded hover:bg-orange-600 transition-colors"
          >
            {language === 'en' ? 'Get Started →' : '开始 →'}
          </a>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="bg-gray-100 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4 text-center">
            {language === 'en' ? 'MEET OUR TEAM' : '认识我们的团队'}
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12">
            {language === 'en' 
              ? 'Chinese & Kenyan Experts Working Together'
              : '中国和肯尼亚专家共同合作'}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="text-center">
                <div 
                  className="h-32 sm:h-40 mb-3 bg-cover bg-center border border-gray-400 rounded"
                  style={{
                    backgroundImage: `url('/images/afrigo_team_member_${i + 1}.jpg')`,
                  }}
                ></div>
                <p className="font-bold text-xs sm:text-sm">
                  {language === 'en' ? 'Name' : '姓名'}
                </p>
                <p className="text-xs text-gray-600">CEO</p>
                <p className="text-xs text-gray-500">
                  {language === 'en' ? 'Nationality (Kenyan)' : '国籍（肯尼亚）'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12 text-center">
            {language === 'en' ? 'CERTIFICATIONS & COMPLIANCE' : '认证与合规'}
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Cert 1 */}
            <div className="border-2 border-gray-300 rounded p-6 text-center">
              <div className="bg-blue-900 h-20 sm:h-24 mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">📜</span>
              </div>
              <p className="font-bold text-sm sm:text-base">ISO 9001</p>
            </div>

            {/* Cert 2 */}
            <div className="border-2 border-gray-300 rounded p-6 text-center">
              <div className="bg-blue-900 h-20 sm:h-24 mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">📋</span>
              </div>
              <p className="font-bold text-sm sm:text-base">
                {language === 'en' ? 'Business Registration' : '企业注册'}
              </p>
            </div>

            {/* Cert 3 */}
            <div className="border-2 border-gray-300 rounded p-6 text-center">
              <div className="bg-blue-900 h-20 sm:h-24 mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">🏆</span>
              </div>
              <p className="font-bold text-sm sm:text-base">
                {language === 'en' ? 'Industry Member' : '行业成员'}
              </p>
            </div>

            {/* Cert 4 */}
            <div className="border-2 border-gray-300 rounded p-6 text-center">
              <div className="bg-blue-900 h-20 sm:h-24 mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">🔒</span>
              </div>
              <p className="font-bold text-sm sm:text-base">
                {language === 'en' ? 'Data Protected' : '数据保护'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Contact CTA */}
      <section id="contact-section" className="bg-gray-100 py-16">
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
