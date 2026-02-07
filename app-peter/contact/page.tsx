'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [language, setLanguage] = useState<'en' | 'zh'>('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Global Header */}
      <Header language={language} onLanguageToggle={toggleLanguage} currentPage="contact" />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-xs sm:text-sm text-gray-600">
            <a href="/" className="hover:text-blue-900">
              {language === 'en' ? 'Home' : '首页'}
            </a> &gt; {language === 'en' ? 'Contact Us' : '联系我们'}
          </p>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <section 
        className="py-12 sm:py-16 relative bg-cover bg-center bg-gray-700"
        style={{
          backgroundImage: "url('/images/afrigo_contact.jpg')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {language === 'en'
              ? 'GET IN TOUCH WITH AFRIGO'
              : '联系AFRIGO'}
          </h1>
          <p className="text-base sm:text-lg text-white mb-6 sm:mb-8">
            {language === 'en'
              ? "We're here to help you succeed in Kenya"
              : '我们在这里帮助您在肯尼亚取得成功'}
          </p>
          <div className="inline-block bg-orange-500 text-white px-8 sm:px-10 py-3 rounded font-semibold">
            {language === 'en' ? 'Response within Minutes' : '几分钟内回复'}
          </div>
        </div>
      </section>

      {/* Multiple Ways to Reach Us */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12 text-center">
            {language === 'en' ? 'MULTIPLE WAYS TO REACH US' : '多种联系方式'}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone */}
            <div className="border-2 border-gray-300 rounded p-6 text-center">
              <div className="text-4xl sm:text-5xl mb-4">📱</div>
              <h3 className="font-bold mb-3">
                {language === 'en' ? 'Phone' : '电话'}
              </h3>
              <p className="text-sm text-gray-600 mb-2">+254 XXX XXX XXX</p>
              <p className="text-xs text-gray-500 mb-4">
                {language === 'en' ? '(Mon-Fri, 8AM-6PM EAT)' : '(周一至周五，8AM-6PM EAT)'}
              </p>
              <a 
                href="tel:+254XXXXXXXXX"
                className="block bg-orange-500 text-white px-6 py-2 text-sm rounded hover:bg-orange-600 transition-colors"
              >
                {language === 'en' ? 'Call Now' : '立即致电'}
              </a>
            </div>

            {/* Email */}
            <div className="border-2 border-gray-300 rounded p-6 text-center">
              <div className="text-4xl sm:text-5xl mb-4">✉️</div>
              <h3 className="font-bold mb-3">
                {language === 'en' ? 'Email' : '电子邮件'}
              </h3>
              <p className="text-sm text-gray-600 mb-2">info@afrigo.com</p>
              <p className="text-xs text-gray-500 mb-4">
                {language === 'en' ? '(We reply within 4 hours)' : '(我们在4小时内回复)'}
              </p>
              <a 
                href="mailto:info@afrigo.com"
                className="block bg-blue-900 text-white px-6 py-2 text-sm rounded hover:bg-blue-800 transition-colors"
              >
                {language === 'en' ? 'Send Email' : '发送电子邮件'}
              </a>
            </div>

            {/* WeChat */}
            <div className="border-2 border-gray-300 rounded p-6 text-center">
              <div className="text-4xl sm:text-5xl mb-4">💬</div>
              <h3 className="font-bold mb-3">
                {language === 'en' ? 'WeChat' : '微信'}
              </h3>
              <p className="text-sm text-gray-600 mb-2">AfriGo_Official</p>
              <p className="text-xs text-gray-500 mb-4">
                {language === 'en' ? '(Instant messaging)' : '(即时消息)'}
              </p>
              <a 
                href="weixin://dl/chat?AfriGo_Official"
                className="block bg-green-600 text-white px-6 py-2 text-sm rounded hover:bg-green-700 transition-colors"
              >
                {language === 'en' ? 'Chat on WeChat' : '微信聊天'}
              </a>
            </div>

            {/* WhatsApp */}
            <div className="border-2 border-gray-300 rounded p-6 text-center">
              <div className="text-4xl sm:text-5xl mb-4">📲</div>
              <h3 className="font-bold mb-3">
                {language === 'en' ? 'WhatsApp' : 'WhatsApp'}
              </h3>
              <p className="text-sm text-gray-600 mb-2">+254 XXX XXX XXX</p>
              <p className="text-xs text-gray-500 mb-4">
                {language === 'en' ? '(24/7 Available)' : '(24/7可用)'}
              </p>
              <a 
                href="https://wa.me/254XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-500 text-white px-6 py-2 text-sm rounded hover:bg-green-600 transition-colors"
              >
                {language === 'en' ? 'Chat on WhatsApp' : 'WhatsApp聊天'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Our Office */}
      <section className="py-12 sm:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12 text-center">
            {language === 'en' ? 'VISIT OUR OFFICE' : '访问我们的办公室'}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="bg-gray-300 border-2 border-gray-400 rounded p-8 sm:p-12 flex flex-col items-center justify-center h-64 sm:h-96">
              <div className="text-5xl sm:text-6xl mb-4">📍</div>
              <p className="text-gray-600 font-bold text-sm sm:text-base">
                {language === 'en' ? 'Interactive Map' : '互动地图'}
              </p>
              <p className="text-xs sm:text-sm text-gray-500">(Google Maps Embed)</p>
            </div>

            {/* Office Info */}
            <div className="bg-white border-2 border-gray-300 rounded p-6 sm:p-8">
              <h3 className="font-bold text-lg sm:text-xl mb-6">AfriGo International</h3>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="font-bold text-sm mb-1">
                    📍 {language === 'en' ? 'Address:' : '地址：'}
                  </p>
                  <p className="text-sm text-gray-700">[Building Name]</p>
                  <p className="text-sm text-gray-700">[Street Address]</p>
                  <p className="text-sm text-gray-700">
                    {language === 'en' ? 'Nairobi, Kenya' : '肯尼亚内罗毕'}
                  </p>
                </div>

                <div>
                  <p className="font-bold text-sm mb-1">
                    🕐 {language === 'en' ? 'Business Hours:' : '营业时间：'}
                  </p>
                  <p className="text-sm text-gray-700">
                    {language === 'en' 
                      ? 'Monday – Friday: 8:00 AM – 6:00 PM'
                      : '周一至周五：8:00 AM – 6:00 PM'}
                  </p>
                  <p className="text-sm text-gray-700">
                    {language === 'en'
                      ? 'Saturday: 9:00 AM – 2:00 PM'
                      : '周六：9:00 AM – 2:00 PM'}
                  </p>
                  <p className="text-sm text-gray-700">
                    {language === 'en' ? 'Sunday: Closed' : '周日：关闭'}
                  </p>
                </div>
              </div>

              <button className="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600 transition-colors">
                {language === 'en' ? 'Get Directions →' : '获取路线 →'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Send Us a Message Form */}
      <section className="py-12 sm:py-16 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
            {language === 'en' ? 'SEND US A MESSAGE' : '给我们留言'}
          </h2>
          <p className="text-white text-center mb-8 sm:mb-12">
            {language === 'en'
              ? "We'll respond within 4 hours during business hours"
              : '我们将在营业时间内4小时内回复'}
          </p>

          <form className="bg-white rounded p-6 sm:p-8 space-y-6">
            {/* Row 1: Full Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-2">
                  {language === 'en' ? 'Full Name *' : '全名 *'}
                </label>
                <input 
                  type="text" 
                  className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">
                  {language === 'en' ? 'Email Address *' : '电子邮件地址 *'}
                </label>
                <input 
                  type="email" 
                  className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900"
                />
              </div>
            </div>

            {/* Row 2: Phone + WeChat */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-2">
                  {language === 'en' ? 'Phone Number' : '电话号码'}
                </label>
                <input 
                  type="tel" 
                  className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">
                  {language === 'en' ? 'WeChat ID (📱 Priority)' : '微信号（📱优先）'}
                </label>
                <input 
                  type="text" 
                  className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-bold mb-2">
                {language === 'en' ? 'Subject *' : '主题 *'}
              </label>
              <select className="w-full border-2 border-gray-300 rounded px-4 py-3 bg-white focus:outline-none focus:border-blue-900">
                <option>{language === 'en' ? 'Select topic' : '选择主题'}</option>
                <option>{language === 'en' ? 'General Inquiry' : '一般查询'}</option>
                <option>{language === 'en' ? 'Service Request' : '服务请求'}</option>
                <option>{language === 'en' ? 'Partnership Opportunity' : '合作机会'}</option>
                <option>{language === 'en' ? 'Promoter Program' : '推广者计划'}</option>
                <option>{language === 'en' ? 'Technical Support' : '技术支持'}</option>
                <option>{language === 'en' ? 'Other' : '其他'}</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-bold mb-2">
                {language === 'en' ? 'Your Message *' : '您的留言 *'}
              </label>
              <textarea 
                className="w-full border-2 border-gray-300 rounded px-4 py-3 h-32 sm:h-40 resize-none focus:outline-none focus:border-blue-900"
                placeholder={language === 'en' ? 'Tell us how we can help...' : '告诉我们我们如何帮助您...'}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-orange-500 text-white py-4 text-lg font-bold rounded hover:bg-orange-600 transition-colors"
            >
              {language === 'en' ? 'Send Message →' : '发送留言 →'}
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12 text-center">
            {language === 'en' ? 'FREQUENTLY ASKED QUESTIONS' : '常见问题'}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-blue-900 mb-2 text-sm sm:text-base">
                  {language === 'en'
                    ? 'Q: How quickly will I get a response?'
                    : '问：我多快能得到回复？'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  {language === 'en'
                    ? 'We respond within 4 hours during business hours.'
                    : '我们在营业时间内4小时内回复。'}
                </p>
              </div>

              <div>
                <h3 className="font-bold text-blue-900 mb-2 text-sm sm:text-base">
                  {language === 'en'
                    ? 'Q: Can I visit your office?'
                    : '问：我可以访问您的办公室吗？'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  {language === 'en'
                    ? 'Yes! We welcome visits. Please schedule in advance.'
                    : '可以！我们欢迎访问。请提前预约。'}
                </p>
              </div>

              <div>
                <h3 className="font-bold text-blue-900 mb-2 text-sm sm:text-base">
                  {language === 'en'
                    ? 'Q: What if I need help after hours?'
                    : '问：如果我在下班后需要帮助怎么办？'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  {language === 'en'
                    ? 'Contact us via WhatsApp for urgent matters. We monitor it 24/7.'
                    : '通过WhatsApp联系我们处理紧急事项。我们24/7监控。'}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-blue-900 mb-2 text-sm sm:text-base">
                  {language === 'en'
                    ? 'Q: Do you offer consultations?'
                    : '问：你们提供咨询吗？'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  {language === 'en'
                    ? 'Yes! Free 30-minute consultations for new clients.'
                    : '是的！新客户可获得30分钟免费咨询。'}
                </p>
              </div>

              <div>
                <h3 className="font-bold text-blue-900 mb-2 text-sm sm:text-base">
                  {language === 'en'
                    ? 'Q: What are your service fees?'
                    : '问：你们的服务费是多少？'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  {language === 'en'
                    ? 'Custom pricing. Request a free quote via our contact form.'
                    : '定制定价。通过我们的联系表格请求免费报价。'}
                </p>
              </div>

              <div>
                <h3 className="font-bold text-blue-900 mb-2 text-sm sm:text-base">
                  {language === 'en'
                    ? 'Q: What languages do you support?'
                    : '问：你们支持哪些语言？'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  {language === 'en'
                    ? 'English, Chinese (Mandarin), and Swahili.'
                    : '英语、中文（普通话）和斯瓦希里语。'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Need Immediate Help */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">
            {language === 'en' ? 'Need Immediate Help?' : '需要立即帮助？'}
          </h2>
          <p className="text-gray-600 mb-6 sm:mb-8">
            {language === 'en'
              ? 'Our live chat team is available during business hours'
              : '我们的在线聊天团队在营业时间内可用'}
          </p>
          <a 
            href="https://wa.me/254XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-10 sm:px-12 py-3 sm:py-4 text-base sm:text-lg rounded hover:bg-green-700 transition-colors"
          >
            {language === 'en' ? 'Start Live Chat 💬' : '开始在线聊天 💬'}
          </a>
        </div>
      </section>

      {/* Global Footer */}
      <Footer language={language} />
    </div>
  );
}
