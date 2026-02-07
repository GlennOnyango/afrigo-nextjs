'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ServicesPage() {
  const [language, setLanguage] = useState<'en' | 'zh'>('en');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Global Header */}
      <Header language={language} onLanguageToggle={toggleLanguage} currentPage="services" />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-xs sm:text-sm text-gray-600">
            <a href="/" className="hover:text-blue-900">
              {language === 'en' ? 'Home' : '首页'}
            </a> &gt; {language === 'en' ? 'Services' : '服务'}
          </p>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <section 
        className="py-12 sm:py-16 lg:py-20 relative bg-cover bg-center bg-gray-700"
        style={{
          backgroundImage: "url('/images/afrigo_services_hero.jpg')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {language === 'en'
              ? 'COMPREHENSIVE SOLUTIONS FOR KENYA-CHINA BUSINESS SUCCESS'
              : '肯尼亚-中国商业成功的综合解决方案'}
          </h1>
          <p className="text-base sm:text-lg text-white mb-6">
            {language === 'en'
              ? 'From market entry to full operations, we handle everything so you can focus on growth'
              : '从市场进入到全面运营，我们处理一切，让您专注于增长'}
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-white mb-8">
            <span>500+ {language === 'en' ? 'Successful Launches' : '成功启动'}</span>
            <span>|</span>
            <span>$50M+ {language === 'en' ? 'Trade Facilitated' : '促成贸易'}</span>
            <span>|</span>
            <span>30-60 {language === 'en' ? 'Day Average Setup' : '天平均设置'}</span>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#customize-solution"
              className="inline-block bg-orange-500 text-white px-8 sm:px-10 py-3 rounded hover:bg-orange-600 transition-colors"
            >
              {language === 'en' ? 'Customize Your Solution ↓' : '定制您的解决方案 ↓'}
            </a>
            <a 
              href="#contact-section"
              className="inline-block bg-white text-blue-900 border-2 border-blue-900 px-8 sm:px-10 py-3 rounded hover:bg-blue-50 transition-colors"
            >
              {language === 'en' ? 'Schedule Free Consultation' : '安排免费咨询'}
            </a>
          </div>
        </div>
      </section>

      {/* FOR CONSULTING CLIENTS */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">
            {language === 'en' ? 'FOR CONSULTING CLIENTS' : '咨询客户'}
          </h2>
          <p className="text-gray-600 mb-8 sm:mb-12">
            {language === 'en' ? 'Complete market entry & operations support' : '完整的市场进入和运营支持'}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Image */}
            <div 
              className="lg:col-span-5 h-64 lg:h-auto bg-cover bg-center rounded border border-gray-400"
              style={{
                backgroundImage: "url('/images/afrigo_services_consulting.jpg')",
              }}
            ></div>

            {/* Services */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Supply Chain Management */}
                <div className="border-2 border-blue-900 rounded p-6">
                  <div className="bg-blue-900 text-white p-3 rounded inline-block mb-4">
                    <span className="text-2xl">📦</span>
                  </div>
                  <h3 className="font-bold text-lg mb-3">
                    {language === 'en' ? 'Supply Chain Management' : '供应链管理'}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {language === 'en'
                      ? 'End-to-end sourcing, quality control, logistics, and distribution management'
                      : '端到端采购、质量控制、物流和分销管理'}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-green-600">✓ {language === 'en' ? 'Supplier sourcing' : '供应商采购'}</p>
                    <p className="text-sm text-green-600">✓ {language === 'en' ? 'Quality assurance' : '质量保证'}</p>
                    <p className="text-sm text-green-600">✓ {language === 'en' ? 'Logistics coordination' : '物流协调'}</p>
                  </div>

                  <p className="text-sm font-semibold mb-4">{language === 'en' ? 'From $X/month' : '从$X/月起'}</p>
                  <a 
                    href="#customize-solution"
                    className="block w-full bg-blue-900 text-white py-2 rounded text-sm text-center hover:bg-blue-800"
                  >
                    {language === 'en' ? 'Inquire About Service ↓' : '咨询服务 ↓'}
                  </a>
                </div>

                {/* Service Partnerships */}
                <div className="border-2 border-blue-900 rounded p-6">
                  <div className="bg-blue-900 text-white p-3 rounded inline-block mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="font-bold text-lg mb-3">
                    {language === 'en' ? 'Service Partnerships' : '服务合作伙伴关系'}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {language === 'en'
                      ? 'Access 200+ verified local service providers'
                      : '访问200多个经过验证的本地服务提供商'}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-green-600">✓ {language === 'en' ? 'Pre-vetted partners' : '预先审查的合作伙伴'}</p>
                    <p className="text-sm text-green-600">✓ {language === 'en' ? 'Quality guarantee' : '质量保证'}</p>
                    <p className="text-sm text-green-600">✓ {language === 'en' ? 'Bilingual support' : '双语支持'}</p>
                  </div>

                  <p className="text-sm font-semibold mb-4">{language === 'en' ? 'From $X/month' : '从$X/月起'}</p>
                  <a 
                    href="#customize-solution"
                    className="block w-full bg-blue-900 text-white py-2 rounded text-sm text-center hover:bg-blue-800"
                  >
                    {language === 'en' ? 'Inquire About Service ↓' : '咨询服务 ↓'}
                  </a>
                </div>

                {/* Resource Solutions */}
                <div className="border-2 border-blue-900 rounded p-6">
                  <div className="bg-blue-900 text-white p-3 rounded inline-block mb-4">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h3 className="font-bold text-lg mb-3">
                    {language === 'en' ? 'Resource Solutions' : '资源解决方案'}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {language === 'en'
                      ? 'Warehouses, offices, equipment and infrastructure'
                      : '仓库、办公室、设备和基础设施'}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-green-600">✓ {language === 'en' ? 'Prime locations' : '黄金地段'}</p>
                    <p className="text-sm text-green-600">✓ {language === 'en' ? 'Flexible terms' : '灵活条款'}</p>
                    <p className="text-sm text-green-600">✓ {language === 'en' ? 'Scalable solutions' : '可扩展解决方案'}</p>
                  </div>

                  <p className="text-sm font-semibold mb-4">{language === 'en' ? 'Custom pricing' : '定制定价'}</p>
                  <a 
                    href="#customize-solution"
                    className="block w-full bg-blue-900 text-white py-2 rounded text-sm text-center hover:bg-blue-800"
                  >
                    {language === 'en' ? 'Inquire About Service ↓' : '咨询服务 ↓'}
                  </a>
                </div>

                {/* Custom Solutions */}
                <div className="border-2 border-blue-900 rounded p-6">
                  <div className="bg-blue-900 text-white p-3 rounded inline-block mb-4">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <h3 className="font-bold text-lg mb-3">
                    {language === 'en' ? 'Custom Solutions' : '定制解决方案'}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {language === 'en'
                      ? 'Tailored packages for unique business needs'
                      : '为独特的业务需求量身定制的套餐'}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-green-600">✓ {language === 'en' ? 'Flexible approach' : '灵活方法'}</p>
                    <p className="text-sm text-green-600">✓ {language === 'en' ? 'Scalable packages' : '可扩展套餐'}</p>
                    <p className="text-sm text-green-600">✓ {language === 'en' ? 'Expert guidance' : '专家指导'}</p>
                  </div>

                  <p className="text-sm font-semibold mb-4">{language === 'en' ? 'Custom quote' : '定制报价'}</p>
                  <a 
                    href="#customize-solution"
                    className="block w-full bg-blue-900 text-white py-2 rounded text-sm text-center hover:bg-blue-800"
                  >
                    {language === 'en' ? 'Inquire About Service ↓' : '咨询服务 ↓'}
                  </a>
                </div>
              </div>

              {/* Complete Package */}
              <div className="bg-orange-500 text-white rounded p-6">
                <div className="bg-white text-orange-500 p-3 rounded inline-block mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="font-bold text-lg mb-3">
                  {language === 'en' ? 'COMPLETE PACKAGE' : '完整套餐'}
                </h3>
                <p className="text-sm mb-4">
                  {language === 'en'
                    ? 'All services included. Best value for full market entry'
                    : '包含所有服务。全面市场进入的最佳价值'}
                </p>
                
                <div className="space-y-2 mb-4">
                  <p className="text-sm">✓ {language === 'en' ? 'All services above' : '上述所有服务'}</p>
                  <p className="text-sm">✓ {language === 'en' ? 'Priority support' : '优先支持'}</p>
                  <p className="text-sm">✓ {language === 'en' ? 'Dedicated manager' : '专属经理'}</p>
                </div>

                <p className="text-sm font-semibold mb-4">{language === 'en' ? 'Contact for pricing' : '联系定价'}</p>
                <a 
                  href="#customize-solution"
                  className="block w-full bg-white text-orange-500 py-2 rounded text-sm text-center font-bold hover:bg-gray-100"
                >
                  {language === 'en' ? 'Get Complete Package ↓' : '获取完整套餐 ↓'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOR INVESTORS */}
      <section className="py-12 sm:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">
            {language === 'en' ? 'FOR INVESTORS' : '投资者'}
          </h2>
          <p className="text-gray-600 mb-8 sm:mb-12">
            {language === 'en' ? 'Your trusted execution desk in Kenya' : '您在肯尼亚值得信赖的执行台'}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Image */}
            <div 
              className="lg:col-span-5 h-64 lg:h-auto bg-cover bg-center rounded border border-gray-400"
              style={{
                backgroundImage: "url('/images/afrigo_services_investors.jpg')",
              }}
            ></div>

            {/* Services */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Market Entry Support */}
                <div className="bg-white border-2 border-blue-900 rounded p-6">
                  <div className="bg-blue-900 text-white p-3 rounded inline-block mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="font-bold text-lg mb-3">
                    {language === 'en' ? 'Market Entry Support' : '市场进入支持'}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {language === 'en'
                      ? 'Complete setup from registration to operations'
                      : '从注册到运营的完整设置'}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-green-600">✓ {language === 'en' ? 'Company registration' : '公司注册'}</p>
                    <p className="text-sm text-green-600">✓ {language === 'en' ? 'Bank account setup' : '银行账户设置'}</p>
                    <p className="text-sm text-green-600">✓ {language === 'en' ? 'Office establishment' : '办公室建立'}</p>
                  </div>

                  <a 
                    href="#customize-solution"
                    className="block w-full bg-blue-900 text-white py-2 rounded text-sm text-center hover:bg-blue-800"
                  >
                    {language === 'en' ? 'Inquire About Service ↓' : '咨询服务 ↓'}
                  </a>
                </div>

                {/* Regulatory Compliance */}
                <div className="bg-white border-2 border-blue-900 rounded p-6">
                  <div className="bg-blue-900 text-white p-3 rounded inline-block mb-4">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h3 className="font-bold text-lg mb-3">
                    {language === 'en' ? 'Regulatory Compliance' : '监管合规'}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {language === 'en'
                      ? 'Navigate Kenyan regulations with confidence'
                      : '自信地应对肯尼亚法规'}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-green-600">✓ {language === 'en' ? 'Licenses & permits' : '许可证和许可'}</p>
                    <p className="text-sm text-green-600">✓ {language === 'en' ? 'Tax registration' : '税务登记'}</p>
                    <p className="text-sm text-green-600">✓ {language === 'en' ? 'Legal compliance' : '法律合规'}</p>
                  </div>

                  <a 
                    href="#customize-solution"
                    className="block w-full bg-blue-900 text-white py-2 rounded text-sm text-center hover:bg-blue-800"
                  >
                    {language === 'en' ? 'Inquire About Service ↓' : '咨询服务 ↓'}
                  </a>
                </div>

                {/* Local Partners */}
                <div className="bg-white border-2 border-blue-900 rounded p-6">
                  <div className="bg-blue-900 text-white p-3 rounded inline-block mb-4">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h3 className="font-bold text-lg mb-3">
                    {language === 'en' ? 'Local Partner Sourcing' : '本地合作伙伴采购'}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {language === 'en'
                      ? 'Find and vet reliable local partners'
                      : '查找和审查可靠的本地合作伙伴'}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-green-600">✓ {language === 'en' ? 'Partner identification' : '合作伙伴识别'}</p>
                    <p className="text-sm text-green-600">✓ {language === 'en' ? 'Due diligence' : '尽职调查'}</p>
                    <p className="text-sm text-green-600">✓ {language === 'en' ? 'Relationship management' : '关系管理'}</p>
                  </div>

                  <a 
                    href="#customize-solution"
                    className="block w-full bg-blue-900 text-white py-2 rounded text-sm text-center hover:bg-blue-800"
                  >
                    {language === 'en' ? 'Inquire About Service ↓' : '咨询服务 ↓'}
                  </a>
                </div>

                {/* Operations Setup */}
                <div className="bg-white border-2 border-blue-900 rounded p-6">
                  <div className="bg-blue-900 text-white p-3 rounded inline-block mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="font-bold text-lg mb-3">
                    {language === 'en' ? 'Operations Setup' : '运营设置'}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {language === 'en'
                      ? 'Get your business running smoothly'
                      : '让您的业务顺利运行'}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-green-600">✓ {language === 'en' ? 'Staffing & HR' : '人员配置和人力资源'}</p>
                    <p className="text-sm text-green-600">✓ {language === 'en' ? 'Systems setup' : '系统设置'}</p>
                    <p className="text-sm text-green-600">✓ {language === 'en' ? 'Process optimization' : '流程优化'}</p>
                  </div>

                  <a 
                    href="#customize-solution"
                    className="block w-full bg-blue-900 text-white py-2 rounded text-sm text-center hover:bg-blue-800"
                  >
                    {language === 'en' ? 'Inquire About Service ↓' : '咨询服务 ↓'}
                  </a>
                </div>
              </div>

              {/* Investor Package */}
              <div className="bg-orange-500 text-white rounded p-6">
                <div className="bg-white text-orange-500 p-3 rounded inline-block mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="font-bold text-lg mb-3">
                  {language === 'en' ? 'INVESTOR PACKAGE' : '投资者套餐'}
                </h3>
                <p className="text-sm mb-4">
                  {language === 'en'
                    ? 'Complete solution for serious investors'
                    : '为认真的投资者提供完整解决方案'}
                </p>
                
                <div className="space-y-2 mb-4">
                  <p className="text-sm">✓ {language === 'en' ? 'All services above' : '上述所有服务'}</p>
                  <p className="text-sm">✓ {language === 'en' ? 'Dedicated account manager' : '专属客户经理'}</p>
                  <p className="text-sm">✓ {language === 'en' ? '30-60 day launch guarantee' : '30-60天启动保证'}</p>
                </div>

                <a 
                  href="#customize-solution"
                  className="block w-full bg-white text-orange-500 py-2 rounded text-sm text-center font-bold hover:bg-gray-100"
                >
                  {language === 'en' ? 'Get Investor Package ↓' : '获取投资者套餐 ↓'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOR RESOURCE PARTNERS - REDESIGNED */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">
            {language === 'en' ? 'FOR RESOURCE PARTNERS' : '资源合作伙伴'}
          </h2>
          <p className="text-gray-600 mb-8 sm:mb-12">
            {language === 'en' ? 'Join our verified partner network' : '加入我们经过验证的合作伙伴网络'}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Image Placeholder */}
            <div 
              className="lg:col-span-5 h-64 lg:h-auto bg-cover bg-center rounded border border-gray-400"
              style={{
                backgroundImage: "url('/images/afrigo_services_partners.jpg')",
              }}
            ></div>

            {/* Partner Information */}
            <div className="lg:col-span-7">
              <div className="bg-gray-50 border-2 border-gray-300 rounded p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-6">
                  {language === 'en' ? 'PARTNER BENEFITS' : '合作伙伴福利'}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
                  <div className="space-y-3">
                    <p className="text-green-600 text-sm sm:text-base flex items-start">
                      <span className="mr-2">✓</span>
                      <span>{language === 'en' ? 'Qualified leads from Chinese businesses' : '来自中国企业的合格潜在客户'}</span>
                    </p>
                    <p className="text-green-600 text-sm sm:text-base flex items-start">
                      <span className="mr-2">✓</span>
                      <span>{language === 'en' ? 'Earn revenue through referrals' : '通过推荐赚取收入'}</span>
                    </p>
                    <p className="text-green-600 text-sm sm:text-base flex items-start">
                      <span className="mr-2">✓</span>
                      <span>{language === 'en' ? 'Dedicated partner manager' : '专属合作伙伴经理'}</span>
                    </p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-green-600 text-sm sm:text-base flex items-start">
                      <span className="mr-2">✓</span>
                      <span>{language === 'en' ? '24/7 support' : '24/7支持'}</span>
                    </p>
                    <p className="text-green-600 text-sm sm:text-base flex items-start">
                      <span className="mr-2">✓</span>
                      <span>{language === 'en' ? 'Marketing exposure' : '营销曝光'}</span>
                    </p>
                    <p className="text-green-600 text-sm sm:text-base flex items-start">
                      <span className="mr-2">✓</span>
                      <span>{language === 'en' ? 'Grow your business with AfriGo' : '与AfriGo一起发展您的业务'}</span>
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-base sm:text-lg mb-4 text-blue-900">
                    {language === 'en' ? 'Partner Categories:' : '合作伙伴类别：'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-700">
                    <p className="flex items-center">
                      <span className="text-blue-900 mr-2">•</span>
                      {language === 'en' ? 'Hotels & Accommodation' : '酒店和住宿'}
                    </p>
                    <p className="flex items-center">
                      <span className="text-blue-900 mr-2">•</span>
                      {language === 'en' ? 'Transport & Logistics' : '运输和物流'}
                    </p>
                    <p className="flex items-center">
                      <span className="text-blue-900 mr-2">•</span>
                      {language === 'en' ? 'Legal Services' : '法律服务'}
                    </p>
                    <p className="flex items-center">
                      <span className="text-blue-900 mr-2">•</span>
                      {language === 'en' ? 'Financial Services' : '金融服务'}
                    </p>
                    <p className="flex items-center">
                      <span className="text-blue-900 mr-2">•</span>
                      {language === 'en' ? 'Real Estate' : '房地产'}
                    </p>
                    <p className="flex items-center">
                      <span className="text-blue-900 mr-2">•</span>
                      {language === 'en' ? 'Staffing & HR' : '人员配置和人力资源'}
                    </p>
                    <p className="flex items-center">
                      <span className="text-blue-900 mr-2">•</span>
                      {language === 'en' ? 'Translation Services' : '翻译服务'}
                    </p>
                    <p className="flex items-center">
                      <span className="text-blue-900 mr-2">•</span>
                      {language === 'en' ? 'IT & Technology' : 'IT和技术'}
                    </p>
                    <p className="flex items-center">
                      <span className="text-blue-900 mr-2">•</span>
                      {language === 'en' ? 'And more...' : '等等...'}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/partners"
                    className="flex-1 bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 transition-colors text-center font-semibold"
                  >
                    {language === 'en' ? 'Become a Partner →' : '成为合作伙伴 →'}
                  </a>
                  <a 
                    href="/partners/directory"
                    className="flex-1 bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition-colors text-center font-semibold"
                  >
                    {language === 'en' ? 'View Partner Directory →' : '查看合作伙伴目录 →'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOR PROMOTERS - REDESIGNED */}
      <section className="py-12 sm:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">
            {language === 'en' ? 'FOR PROMOTERS' : '推广者'}
          </h2>
          <p className="text-gray-600 mb-8 sm:mb-12">
            {language === 'en' ? 'Earn by referring businesses & partners' : '通过推荐企业和合作伙伴赚钱'}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Image Placeholder */}
            <div 
              className="lg:col-span-5 h-64 lg:h-auto bg-cover bg-center rounded border border-gray-400"
              style={{
                backgroundImage: "url('/images/afrigo_services_promoters.jpg')",
              }}
            ></div>

            {/* Promoter Information */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded p-6 sm:p-8 border-2 border-gray-300">
                <h3 className="font-bold text-xl sm:text-2xl mb-6 text-center text-blue-900">
                  {language === 'en' ? 'HOW IT WORKS:' : '如何运作：'}
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-gray-50 rounded">
                    <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-3">1</div>
                    <p className="text-sm font-semibold mb-2 text-blue-900">
                      {language === 'en' ? 'Sign up as promoter' : '注册为推广者'}
                    </p>
                    <p className="text-xs text-gray-600">
                      {language === 'en' ? 'Quick and easy registration' : '快速简便的注册'}
                    </p>
                  </div>
                  
                  <div className="text-center p-4 bg-gray-50 rounded">
                    <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-3">2</div>
                    <p className="text-sm font-semibold mb-2 text-blue-900">
                      {language === 'en' ? 'Get unique referral code/link' : '获取独特的推荐代码/链接'}
                    </p>
                    <p className="text-xs text-gray-600">
                      {language === 'en' ? 'Your personal tracking link' : '您的个人追踪链接'}
                    </p>
                  </div>
                  
                  <div className="text-center p-4 bg-gray-50 rounded">
                    <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-3">3</div>
                    <p className="text-sm font-semibold mb-2 text-blue-900">
                      {language === 'en' ? 'Refer businesses or partners' : '推荐企业或合作伙伴'}
                    </p>
                    <p className="text-xs text-gray-600">
                      {language === 'en' ? 'Share with your network' : '与您的网络分享'}
                    </p>
                  </div>
                  
                  <div className="text-center p-4 bg-gray-50 rounded">
                    <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-3">4</div>
                    <p className="text-sm font-semibold mb-2 text-blue-900">
                      {language === 'en' ? 'Earn commission on conversions' : '赚取转化佣金'}
                    </p>
                    <p className="text-xs text-gray-600">
                      {language === 'en' ? 'Get paid for successful referrals' : '为成功推荐获得报酬'}
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <a 
                    href="/promoter"
                    className="inline-block bg-blue-900 text-white px-10 py-4 text-lg rounded hover:bg-blue-800 transition-colors font-semibold"
                  >
                    {language === 'en' ? 'Become a Promoter Today →' : '立即成为推广者 →'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMIZE YOUR SOLUTION - NEW SECTION */}
      <section id="customize-solution" className="py-12 sm:py-16 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
            {language === 'en' ? 'CUSTOMIZE YOUR SOLUTION' : '定制您的解决方案'}
          </h2>
          <p className="text-white text-center mb-8 sm:mb-12 text-sm sm:text-base">
            {language === 'en' 
              ? 'Custom make your solution by selecting a bundle of services you are seeking'
              : '通过选择您寻求的服务套餐来定制您的解决方案'}
          </p>

          {/* How It Works Steps */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-3">1</div>
              <h3 className="font-bold text-white text-sm sm:text-base mb-1">
                {language === 'en' ? 'Select Services' : '选择服务'}
              </h3>
              <p className="text-xs text-gray-200">
                {language === 'en' ? 'Choose what you need' : '选择您需要的'}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-3">2</div>
              <h3 className="font-bold text-white text-sm sm:text-base mb-1">
                {language === 'en' ? 'Submit Request' : '提交请求'}
              </h3>
              <p className="text-xs text-gray-200">
                {language === 'en' ? 'Fill the form below' : '填写下面的表格'}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-3">3</div>
              <h3 className="font-bold text-white text-sm sm:text-base mb-1">
                {language === 'en' ? 'Get Custom Quote' : '获取定制报价'}
              </h3>
              <p className="text-xs text-gray-200">
                {language === 'en' ? 'Within 24 hours' : '24小时内'}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-3">4</div>
              <h3 className="font-bold text-white text-sm sm:text-base mb-1">
                {language === 'en' ? 'Launch & Succeed' : '启动和成功'}
              </h3>
              <p className="text-xs text-gray-200">
                {language === 'en' ? '30-60 day setup' : '30-60天设置'}
              </p>
            </div>
          </div>

          {/* Custom Solution Form */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
              {language === 'en' ? 'Custom Make Your Solution Now' : '立即定制您的解决方案'}
            </h3>

            <form className="bg-white rounded p-6 sm:p-8 space-y-6">
              {/* Services Selection */}
              <div>
                <label className="block text-sm font-bold mb-4 text-blue-900">
                  {language === 'en' ? 'Select Services You Need * (Check all that apply)' : '选择您需要的服务 *（选中所有适用项）'}
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Consulting Services */}
                  <div className="border-2 border-gray-200 rounded p-4 hover:border-blue-900 transition-colors">
                    <p className="font-semibold text-blue-900 mb-3 text-sm">
                      {language === 'en' ? 'Consulting Services:' : '咨询服务：'}
                    </p>
                    <label className="flex items-start mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="mr-3 mt-1" 
                        value="supply-chain"
                        checked={selectedServices.includes('supply-chain')}
                        onChange={(e) => handleServiceToggle(e.target.value)}
                      />
                      <span className="text-sm">{language === 'en' ? 'Supply Chain Management' : '供应链管理'}</span>
                    </label>
                    <label className="flex items-start mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="mr-3 mt-1"
                        value="service-partnerships"
                        checked={selectedServices.includes('service-partnerships')}
                        onChange={(e) => handleServiceToggle(e.target.value)}
                      />
                      <span className="text-sm">{language === 'en' ? 'Service Partnerships' : '服务合作伙伴关系'}</span>
                    </label>
                    <label className="flex items-start mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="mr-3 mt-1"
                        value="resource-solutions"
                        checked={selectedServices.includes('resource-solutions')}
                        onChange={(e) => handleServiceToggle(e.target.value)}
                      />
                      <span className="text-sm">{language === 'en' ? 'Resource Solutions' : '资源解决方案'}</span>
                    </label>
                    <label className="flex items-start cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="mr-3 mt-1"
                        value="custom-solutions"
                        checked={selectedServices.includes('custom-solutions')}
                        onChange={(e) => handleServiceToggle(e.target.value)}
                      />
                      <span className="text-sm">{language === 'en' ? 'Custom Solutions' : '定制解决方案'}</span>
                    </label>
                  </div>

                  {/* Investor Services */}
                  <div className="border-2 border-gray-200 rounded p-4 hover:border-blue-900 transition-colors">
                    <p className="font-semibold text-blue-900 mb-3 text-sm">
                      {language === 'en' ? 'Investor Services:' : '投资者服务：'}
                    </p>
                    <label className="flex items-start mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="mr-3 mt-1"
                        value="market-entry"
                        checked={selectedServices.includes('market-entry')}
                        onChange={(e) => handleServiceToggle(e.target.value)}
                      />
                      <span className="text-sm">{language === 'en' ? 'Market Entry Support' : '市场进入支持'}</span>
                    </label>
                    <label className="flex items-start mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="mr-3 mt-1"
                        value="regulatory-compliance"
                        checked={selectedServices.includes('regulatory-compliance')}
                        onChange={(e) => handleServiceToggle(e.target.value)}
                      />
                      <span className="text-sm">{language === 'en' ? 'Regulatory Compliance' : '监管合规'}</span>
                    </label>
                    <label className="flex items-start mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="mr-3 mt-1"
                        value="local-partners"
                        checked={selectedServices.includes('local-partners')}
                        onChange={(e) => handleServiceToggle(e.target.value)}
                      />
                      <span className="text-sm">{language === 'en' ? 'Local Partner Sourcing' : '本地合作伙伴采购'}</span>
                    </label>
                    <label className="flex items-start cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="mr-3 mt-1"
                        value="operations-setup"
                        checked={selectedServices.includes('operations-setup')}
                        onChange={(e) => handleServiceToggle(e.target.value)}
                      />
                      <span className="text-sm">{language === 'en' ? 'Operations Setup' : '运营设置'}</span>
                    </label>
                  </div>

                  {/* Package Options */}
                  <div className="md:col-span-2 border-2 border-orange-500 rounded p-4 bg-orange-50">
                    <p className="font-semibold text-orange-600 mb-3 text-sm">
                      {language === 'en' ? 'Complete Packages:' : '完整套餐：'}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <label className="flex items-start cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="mr-3 mt-1"
                          value="complete-package"
                          checked={selectedServices.includes('complete-package')}
                          onChange={(e) => handleServiceToggle(e.target.value)}
                        />
                        <span className="text-sm font-semibold">
                          {language === 'en' ? 'Complete Package (All Consulting Services)' : '完整套餐（所有咨询服务）'}
                        </span>
                      </label>
                      <label className="flex items-start cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="mr-3 mt-1"
                          value="investor-package"
                          checked={selectedServices.includes('investor-package')}
                          onChange={(e) => handleServiceToggle(e.target.value)}
                        />
                        <span className="text-sm font-semibold">
                          {language === 'en' ? 'Investor Package (All Investor Services)' : '投资者套餐（所有投资者服务）'}
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-sm font-bold mb-2">
                  {language === 'en' ? 'Full Name *' : '全名 *'}
                </label>
                <input 
                  type="text" 
                  required
                  className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900" 
                />
              </div>

              {/* WeChat ID */}
              <div>
                <label className="block text-sm font-bold mb-2">
                  {language === 'en' ? 'WeChat ID * (Priority Contact Method)' : '微信号 *（优先联系方式）'}
                </label>
                <input 
                  type="text" 
                  required
                  className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900" 
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold mb-2">
                  {language === 'en' ? 'Email Address *' : '电子邮件地址 *'}
                </label>
                <input 
                  type="email" 
                  required
                  className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900" 
                />
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-sm font-bold mb-2">
                  {language === 'en' ? 'Company Name' : '公司名称'}
                </label>
                <input 
                  type="text" 
                  className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900" 
                />
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-bold mb-2">
                  {language === 'en' ? 'Industry *' : '行业 *'}
                </label>
                <select 
                  required
                  className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900 bg-white"
                >
                  <option value="">{language === 'en' ? 'Select Industry' : '选择行业'}</option>
                  <option>{language === 'en' ? 'Manufacturing' : '制造业'}</option>
                  <option>{language === 'en' ? 'Retail' : '零售'}</option>
                  <option>{language === 'en' ? 'Technology' : '技术'}</option>
                  <option>{language === 'en' ? 'Logistics' : '物流'}</option>
                  <option>{language === 'en' ? 'Construction' : '建筑'}</option>
                  <option>{language === 'en' ? 'Agriculture' : '农业'}</option>
                  <option>{language === 'en' ? 'Other' : '其他'}</option>
                </select>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-sm font-bold mb-2">
                  {language === 'en' ? 'Estimated Budget Range' : '估计预算范围'}
                </label>
                <select className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900 bg-white">
                  <option value="">{language === 'en' ? 'Select Range' : '选择范围'}</option>
                  <option>{language === 'en' ? 'Under $10,000' : '低于$10,000'}</option>
                  <option>$10,000 - $50,000</option>
                  <option>$50,000 - $100,000</option>
                  <option>$100,000 - $250,000</option>
                  <option>$250,000+</option>
                </select>
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-sm font-bold mb-2">
                  {language === 'en' ? 'When do you want to start? *' : '您想什么时候开始？*'}
                </label>
                <select 
                  required
                  className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900 bg-white"
                >
                  <option value="">{language === 'en' ? 'Select Timeline' : '选择时间表'}</option>
                  <option>{language === 'en' ? 'Immediately' : '立即'}</option>
                  <option>{language === 'en' ? 'Within 1 month' : '1个月内'}</option>
                  <option>{language === 'en' ? '1-3 months' : '1-3个月'}</option>
                  <option>{language === 'en' ? '3-6 months' : '3-6个月'}</option>
                  <option>{language === 'en' ? 'Just exploring' : '只是探索'}</option>
                </select>
              </div>

              {/* Additional Details */}
              <div>
                <label className="block text-sm font-bold mb-2">
                  {language === 'en' ? 'Additional Details / Specific Requirements' : '附加详情/具体要求'}
                </label>
                <textarea 
                  className="w-full border-2 border-gray-300 rounded px-4 py-3 h-32 resize-none focus:outline-none focus:border-blue-900"
                  placeholder={language === 'en' ? 'Tell us more about your needs...' : '告诉我们更多关于您的需求...'}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-orange-500 text-white py-4 text-lg font-bold rounded hover:bg-orange-600 transition-colors"
              >
                {language === 'en' ? 'Get Custom Quote & Budget Estimate →' : '获取定制报价和预算估算 →'}
              </button>

              <p className="text-xs text-gray-600 text-center">
                {language === 'en' 
                  ? 'By submitting this form, you agree to be contacted by AfriGo regarding your inquiry.'
                  : '提交此表格即表示您同意AfriGo就您的询问与您联系。'}
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* TRUSTED BY 500+ BUSINESSES */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12 text-center">
            {language === 'en' ? 'TRUSTED BY 500+ BUSINESSES' : '500多家企业信赖'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: language === 'en' ? 'Launched in 45 days, saved 40% on logistics' : '45天内启动，物流节省40%', company: language === 'en' ? 'Manufacturing Co.' : '制造公司', service: language === 'en' ? 'Complete Package' : '完整套餐' },
              { quote: language === 'en' ? 'Seamless office setup and staff recruitment' : '无缝办公室设置和员工招聘', company: language === 'en' ? 'Tech Startup' : '科技初创公司', service: language === 'en' ? 'Investor Package' : '投资者套餐' },
              { quote: language === 'en' ? 'Outstanding support throughout entire process' : '整个过程中的出色支持', company: language === 'en' ? 'Retail Business' : '零售业务', service: language === 'en' ? 'Supply Chain Mgmt' : '供应链管理' }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-50 border-2 border-gray-300 rounded p-6 hover:border-blue-900 transition-colors">
                <div className="text-orange-500 mb-3">⭐⭐⭐⭐⭐</div>
                <p className="font-bold text-sm mb-3">"{testimonial.quote}"</p>
                <p className="text-xs text-gray-600 mb-1">— {testimonial.company}</p>
                <p className="text-xs text-blue-600">{testimonial.service} {language === 'en' ? 'used' : '使用'}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12 text-center">
            {language === 'en' ? 'FREQUENTLY ASKED QUESTIONS' : '常见问题'}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded border-2 border-gray-200">
                <h3 className="font-bold text-blue-900 mb-2 text-sm sm:text-base">
                  {language === 'en' ? 'Q: How much do your services cost?' : '问：您的服务费用是多少？'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  {language === 'en' 
                    ? 'A: Pricing varies by service and scope. Request a quote to get a detailed estimate tailored to your needs.'
                    : '答：定价因服务和范围而异。请求报价以获得根据您的需求定制的详细估算。'}
                </p>
              </div>

              <div className="bg-white p-6 rounded border-2 border-gray-200">
                <h3 className="font-bold text-blue-900 mb-2 text-sm sm:text-base">
                  {language === 'en' ? 'Q: How long does setup take?' : '问：设置需要多长时间？'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  {language === 'en'
                    ? 'A: Typically 30-60 days for full market entry. Timeline depends on complexity and service selection.'
                    : '答：完整市场进入通常需要30-60天。时间表取决于复杂性和服务选择。'}
                </p>
              </div>

              <div className="bg-white p-6 rounded border-2 border-gray-200">
                <h3 className="font-bold text-blue-900 mb-2 text-sm sm:text-base">
                  {language === 'en' ? 'Q: Do you handle all the paperwork?' : '问：您处理所有文书工作吗？'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  {language === 'en'
                    ? 'A: Yes, we handle all legal, regulatory, and administrative requirements on your behalf.'
                    : '答：是的，我们代表您处理所有法律、监管和行政要求。'}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded border-2 border-gray-200">
                <h3 className="font-bold text-blue-900 mb-2 text-sm sm:text-base">
                  {language === 'en' ? 'Q: What support do I get after launch?' : '问：启动后我能得到什么支持？'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  {language === 'en'
                    ? 'A: Ongoing support, account management, and access to our partner network for continued growth.'
                    : '答：持续支持、账户管理和访问我们的合作伙伴网络以实现持续增长。'}
                </p>
              </div>

              <div className="bg-white p-6 rounded border-2 border-gray-200">
                <h3 className="font-bold text-blue-900 mb-2 text-sm sm:text-base">
                  {language === 'en' ? 'Q: Can I start with one service and add more?' : '问：我可以从一项服务开始并添加更多服务吗？'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  {language === 'en'
                    ? 'A: Absolutely! Start small and scale as your business grows. We\'re flexible to your needs.'
                    : '答：当然可以！从小规模开始，随着业务增长而扩展。我们灵活满足您的需求。'}
                </p>
              </div>

              <div className="bg-white p-6 rounded border-2 border-gray-200">
                <h3 className="font-bold text-blue-900 mb-2 text-sm sm:text-base">
                  {language === 'en' ? 'Q: Do you work with businesses of all sizes?' : '问：您与各种规模的企业合作吗？'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  {language === 'en'
                    ? 'A: Yes! From startups to established corporations, we tailor our services to fit your needs and budget.'
                    : '答：是的！从初创公司到成熟企业，我们根据您的需求和预算定制服务。'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Contact CTA */}
      <section id="contact-section" className="bg-white py-16">
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
