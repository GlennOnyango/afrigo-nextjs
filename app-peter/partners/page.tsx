'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ResourcePartnersPage() {
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
            </a> &gt; {language === 'en' ? 'Resource Partners' : '资源合作伙伴'}
          </p>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <section 
        className="py-12 sm:py-16 relative bg-cover bg-center bg-gray-700"
        style={{
          backgroundImage: "url('/images/afrigo_partners.jpg')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {language === 'en'
              ? 'BECOME AN AFRIGO RESOURCE PARTNER'
              : '成为AFRIGO资源合作伙伴'}
          </h1>
          <p className="text-base sm:text-lg text-white mb-8 sm:mb-12">
            {language === 'en'
              ? 'Join 200+ verified partners earning through qualified client referrals'
              : '加入200多个经过验证的合作伙伴，通过合格的客户推荐赚钱'}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="bg-blue-900 text-white p-4 sm:p-6 rounded">
              <p className="text-3xl sm:text-4xl font-bold mb-2">200+</p>
              <p className="text-sm">{language === 'en' ? 'Active Partners' : '活跃合作伙伴'}</p>
            </div>
            <div className="bg-blue-900 text-white p-4 sm:p-6 rounded">
              <p className="text-3xl sm:text-4xl font-bold mb-2">500+</p>
              <p className="text-sm">{language === 'en' ? 'Monthly Leads' : '每月潜在客户'}</p>
            </div>
            <div className="bg-blue-900 text-white p-4 sm:p-6 rounded">
              <p className="text-3xl sm:text-4xl font-bold mb-2">95%</p>
              <p className="text-sm">{language === 'en' ? 'Satisfaction Rate' : '满意度'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner with AfriGo */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12 text-center">
            {language === 'en' ? 'WHY PARTNER WITH AFRIGO?' : '为什么与AFRIGO合作？'}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Benefit 1 */}
            <div className="border-2 border-gray-300 rounded p-6 text-center">
              <div className="text-4xl sm:text-5xl mb-4">🎯</div>
              <h3 className="font-bold mb-3">
                {language === 'en' ? 'Qualified Leads' : '合格的潜在客户'}
              </h3>
              <p className="text-sm text-gray-600">
                {language === 'en'
                  ? 'Access Chinese businesses ready to invest in Kenya'
                  : '访问准备在肯尼亚投资的中国企业'}
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="border-2 border-gray-300 rounded p-6 text-center">
              <div className="text-4xl sm:text-5xl mb-4">💰</div>
              <h3 className="font-bold mb-3">
                {language === 'en' ? 'Earn Revenue' : '赚取收入'}
              </h3>
              <p className="text-sm text-gray-600">
                {language === 'en'
                  ? 'Commission on every successful client referral'
                  : '每次成功的客户推荐都有佣金'}
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="border-2 border-gray-300 rounded p-6 text-center">
              <div className="text-4xl sm:text-5xl mb-4">🤝</div>
              <h3 className="font-bold mb-3">
                {language === 'en' ? 'Support' : '支持'}
              </h3>
              <p className="text-sm text-gray-600">
                {language === 'en'
                  ? 'Dedicated partner manager & 24/7 assistance'
                  : '专属合作伙伴经理和24/7协助'}
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="border-2 border-gray-300 rounded p-6 text-center">
              <div className="text-4xl sm:text-5xl mb-4">📈</div>
              <h3 className="font-bold mb-3">
                {language === 'en' ? 'Grow Together' : '共同成长'}
              </h3>
              <p className="text-sm text-gray-600">
                {language === 'en'
                  ? "Scale your business with AfriGo's network"
                  : '利用AfriGo的网络扩大您的业务'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-12 sm:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">
            {language === 'en' ? 'PARTNER CATEGORIES' : '合作伙伴类别'}
          </h2>
          <p className="text-gray-600 mb-8 sm:mb-12">
            {language === 'en'
              ? 'We welcome partners across multiple service categories'
              : '我们欢迎跨多个服务类别的合作伙伴'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Category 1 */}
            <div className="bg-white border-2 border-gray-300 rounded p-6">
              <div className="text-3xl mb-3">🏨</div>
              <h3 className="font-bold mb-2">
                {language === 'en' ? 'Hotels & Accommodation' : '酒店和住宿'}
              </h3>
              <p className="text-xs text-gray-600">
                {language === 'en'
                  ? 'Serviced apartments, hotels, guesthouses'
                  : '服务式公寓、酒店、宾馆'}
              </p>
            </div>

            {/* Category 2 */}
            <div className="bg-white border-2 border-gray-300 rounded p-6">
              <div className="text-3xl mb-3">🚗</div>
              <h3 className="font-bold mb-2">
                {language === 'en' ? 'Transport & Logistics' : '运输和物流'}
              </h3>
              <p className="text-xs text-gray-600">
                {language === 'en'
                  ? 'Car rentals, drivers, freight'
                  : '汽车租赁、司机、货运'}
              </p>
            </div>

            {/* Category 3 */}
            <div className="bg-white border-2 border-gray-300 rounded p-6">
              <div className="text-3xl mb-3">⚖️</div>
              <h3 className="font-bold mb-2">
                {language === 'en' ? 'Legal Services' : '法律服务'}
              </h3>
              <p className="text-xs text-gray-600">
                {language === 'en'
                  ? 'Company registration, contracts, compliance'
                  : '公司注册、合同、合规'}
              </p>
            </div>

            {/* Category 4 */}
            <div className="bg-white border-2 border-gray-300 rounded p-6">
              <div className="text-3xl mb-3">💼</div>
              <h3 className="font-bold mb-2">
                {language === 'en' ? 'Financial Services' : '金融服务'}
              </h3>
              <p className="text-xs text-gray-600">
                {language === 'en'
                  ? 'Banking, accounting, tax advisory'
                  : '银行、会计、税务咨询'}
              </p>
            </div>

            {/* Category 5 */}
            <div className="bg-white border-2 border-gray-300 rounded p-6">
              <div className="text-3xl mb-3">🏢</div>
              <h3 className="font-bold mb-2">
                {language === 'en' ? 'Real Estate' : '房地产'}
              </h3>
              <p className="text-xs text-gray-600">
                {language === 'en'
                  ? 'Office space, warehouses, land'
                  : '办公空间、仓库、土地'}
              </p>
            </div>

            {/* Category 6 */}
            <div className="bg-white border-2 border-gray-300 rounded p-6">
              <div className="text-3xl mb-3">👔</div>
              <h3 className="font-bold mb-2">
                {language === 'en' ? 'Staffing & HR' : '人员配置和人力资源'}
              </h3>
              <p className="text-xs text-gray-600">
                {language === 'en'
                  ? 'Recruitment, payroll, training'
                  : '招聘、工资、培训'}
              </p>
            </div>

            {/* Category 7 */}
            <div className="bg-white border-2 border-gray-300 rounded p-6">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="font-bold mb-2">
                {language === 'en' ? 'Translation' : '翻译'}
              </h3>
              <p className="text-xs text-gray-600">
                {language === 'en'
                  ? 'Document translation, interpretation'
                  : '文件翻译、口译'}
              </p>
            </div>

            {/* Category 8 */}
            <div className="bg-white border-2 border-gray-300 rounded p-6">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="font-bold mb-2">
                {language === 'en' ? 'Other Services' : '其他服务'}
              </h3>
              <p className="text-xs text-gray-600">
                {language === 'en'
                  ? 'IT, marketing, consulting, etc.'
                  : 'IT、营销、咨询等'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse Partner Directory */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2 text-center">
            {language === 'en' ? 'BROWSE OUR PARTNER DIRECTORY' : '浏览我们的合作伙伴目录'}
          </h2>
          <p className="text-gray-600 mb-6 sm:mb-8 text-center">
            {language === 'en'
              ? 'Explore our network of 200+ verified service partners'
              : '探索我们200多个经过验证的服务合作伙伴网络'}
          </p>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-4xl mx-auto">
            <input 
              type="text" 
              placeholder={language === 'en' 
                ? 'Search partners by name, service, or location...'
                : '按名称、服务或位置搜索合作伙伴...'}
              className="flex-1 border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900"
            />
            <select className="border-2 border-gray-300 rounded px-4 py-3 bg-white focus:outline-none focus:border-blue-900">
              <option>{language === 'en' ? 'Category Filter' : '类别筛选'}</option>
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

          {/* Partner Cards Preview (3 shown) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { name: 'Nairobi Grand Hotel', category: language === 'en' ? 'Hotels & Accommodation' : '酒店和住宿', rating: '⭐⭐⭐⭐⭐ (45 reviews)', location: 'Westlands' },
              { name: 'Swift Transport KE', category: language === 'en' ? 'Transport & Logistics' : '运输和物流', rating: '⭐⭐⭐⭐⭐ (38 reviews)', location: 'Nairobi' },
              { name: 'Legal Partners Ltd', category: language === 'en' ? 'Legal Services' : '法律服务', rating: '⭐⭐⭐⭐ (29 reviews)', location: 'CBD' }
            ].map((partner, i) => (
              <div key={i} className="bg-gray-50 border-2 border-gray-300 rounded p-6">
                <div className="bg-gray-200 h-20 mb-4 flex items-center justify-center border border-gray-400">
                  <span className="text-gray-500 text-xs">LOGO</span>
                </div>
                <h3 className="font-bold mb-2">{partner.name}</h3>
                <div className="bg-blue-900 text-white text-xs px-3 py-1 rounded inline-block mb-3">
                  {partner.category}
                </div>
                <p className="text-sm text-orange-500 mb-2">{partner.rating}</p>
                <p className="text-sm text-gray-600 mb-4">📍 {partner.location}</p>
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

          {/* Browse Directory Button */}
          <div className="text-center">
            <a 
              href="/partners/directory"
              className="inline-block bg-blue-900 text-white px-10 sm:px-12 py-3 sm:py-4 text-base sm:text-lg rounded hover:bg-blue-800 transition-colors"
            >
              {language === 'en' ? 'Browse Partner Directory →' : '浏览合作伙伴目录 →'}
            </a>
          </div>
        </div>
      </section>

      {/* Application Process - 1x4 Desktop, 2x2 Mobile */}
      <section className="py-12 sm:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12 text-center">
            {language === 'en' ? 'APPLICATION PROCESS' : '申请流程'}
          </h2>

          {/* Grid: 2x2 on mobile/tablet, 1x4 on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold mb-2 text-sm sm:text-base">
                {language === 'en' ? 'Submit Application' : '提交申请'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                {language === 'en' ? 'Fill the form below' : '填写下面的表格'}
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold mb-2 text-sm sm:text-base">
                {language === 'en' ? 'Verification' : '验证'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                {language === 'en' ? '48-72 hour review' : '48-72小时审查'}
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold mb-2 text-sm sm:text-base">
                {language === 'en' ? 'Approval' : '批准'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                {language === 'en' ? 'Set up your profile' : '设置您的个人资料'}
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-bold mb-2 text-sm sm:text-base">
                {language === 'en' ? 'Start Earning' : '开始赚钱'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                {language === 'en' ? 'Receive leads immediately' : '立即获得潜在客户'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Application Form */}
      <section className="py-12 sm:py-16 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
            {language === 'en' ? 'PARTNER APPLICATION FORM' : '合作伙伴申请表'}
          </h2>
          <p className="text-white text-center mb-8 sm:mb-12">
            {language === 'en'
              ? 'Join our network of verified service providers'
              : '加入我们经过验证的服务提供商网络'}
          </p>

          <form className="bg-white rounded p-6 sm:p-8 space-y-6">
            {/* Company Information Section */}
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-4">
                {language === 'en' ? 'Company Information' : '公司信息'}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-2">
                    {language === 'en' ? 'Company Name *' : '公司名称 *'}
                  </label>
                  <input type="text" className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900" />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    {language === 'en' ? 'Contact Person *' : '联系人 *'}
                  </label>
                  <input type="text" className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900" />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    {language === 'en' ? 'Position *' : '职位 *'}
                  </label>
                  <input type="text" className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900" />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    {language === 'en' ? 'Phone/Email *' : '电话/电子邮件 *'}
                  </label>
                  <input type="text" className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900" />
                </div>
              </div>
            </div>

            {/* Business Details Section */}
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-4">
                {language === 'en' ? 'Business Details' : '业务详情'}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-2">
                    {language === 'en' ? 'Business Category *' : '业务类别 *'}
                  </label>
                  <select className="w-full border-2 border-gray-300 rounded px-4 py-3 bg-white focus:outline-none focus:border-blue-900">
                    <option>{language === 'en' ? 'Select Category' : '选择类别'}</option>
                    <option>{language === 'en' ? 'Hotels & Accommodation' : '酒店和住宿'}</option>
                    <option>{language === 'en' ? 'Transport & Logistics' : '运输和物流'}</option>
                    <option>{language === 'en' ? 'Legal Services' : '法律服务'}</option>
                    <option>{language === 'en' ? 'Financial Services' : '金融服务'}</option>
                    <option>{language === 'en' ? 'Real Estate' : '房地产'}</option>
                    <option>{language === 'en' ? 'Staffing & HR' : '人员配置和人力资源'}</option>
                    <option>{language === 'en' ? 'Translation' : '翻译'}</option>
                    <option>{language === 'en' ? 'Other' : '其他'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    {language === 'en' ? 'Years in Operation *' : '运营年限 *'}
                  </label>
                  <input type="text" className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900" />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    {language === 'en' ? 'Services Offered *' : '提供的服务 *'}
                  </label>
                  <textarea 
                    className="w-full border-2 border-gray-300 rounded px-4 py-3 h-24 resize-none focus:outline-none focus:border-blue-900" 
                    placeholder={language === 'en' ? 'Describe your services...' : '描述您的服务...'}
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    {language === 'en' ? 'Location/Coverage Area *' : '位置/覆盖区域 *'}
                  </label>
                  <input type="text" className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900" />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    {language === 'en' ? 'Business Registration Number *' : '企业注册号 *'}
                  </label>
                  <input type="text" className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900" />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    {language === 'en' ? 'Website (optional)' : '网站（可选）'}
                  </label>
                  <input type="text" className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900" />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    {language === 'en' ? 'Why do you want to partner with AfriGo? *' : '为什么要与AfriGo合作？*'}
                  </label>
                  <textarea className="w-full border-2 border-gray-300 rounded px-4 py-3 h-32 resize-none focus:outline-none focus:border-blue-900"></textarea>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-orange-500 text-white py-4 text-lg font-bold rounded hover:bg-orange-600 transition-colors">
              {language === 'en' ? 'Submit Application →' : '提交申请 →'}
            </button>
          </form>
        </div>
      </section>

      {/* Partner Success Stories */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12 text-center">
            {language === 'en' ? 'PARTNER SUCCESS STORIES' : '合作伙伴成功故事'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                quote: language === 'en' ? '+85% Occupancy Increase' : '+85%入住率增长', 
                detail: language === 'en' ? 'Through AfriGo referrals in 6 months' : '6个月内通过AfriGo推荐', 
                partner: language === 'en' ? 'Hotel Partner' : '酒店合作伙伴' 
              },
              { 
                quote: language === 'en' ? 'Consistent Monthly Contracts' : '稳定的月度合同', 
                detail: language === 'en' ? 'New Chinese clients every week' : '每周都有新的中国客户', 
                partner: language === 'en' ? 'Logistics Co.' : '物流公司' 
              },
              { 
                quote: language === 'en' ? 'Zero Marketing Cost' : '零营销成本', 
                detail: language === 'en' ? 'Premium clients from quality leads' : '来自优质潜在客户的高级客户', 
                partner: language === 'en' ? 'Real Estate' : '房地产' 
              }
            ].map((story, i) => (
              <div key={i} className="border-2 border-gray-300 rounded p-6">
                <p className="font-bold text-lg mb-2">"{story.quote}"</p>
                <p className="text-sm text-gray-600 mb-4">{story.detail}</p>
                <p className="text-sm text-blue-900">— {story.partner}</p>
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

      {/* Global Footer */}
      <Footer language={language} />
    </div>
  );
}
