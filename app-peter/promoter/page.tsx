'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PromoterPage() {
  const [language, setLanguage] = useState<'en' | 'zh'>('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Global Header */}
      <Header language={language} onLanguageToggle={toggleLanguage} currentPage="promoter" />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-xs sm:text-sm text-gray-600">
            <a href="/" className="hover:text-blue-900">
              {language === 'en' ? 'Home' : '首页'}
            </a> &gt; {language === 'en' ? 'Promoter Center' : '推广中心'}
          </p>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <section 
        className="py-12 sm:py-16 lg:py-20 relative bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/afrigo_promoter.jpg')",
          backgroundBlendMode: "overlay"
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">💰</div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 px-4">
            {language === 'en' ? 'EARN COMMISSIONS BY' : '通过连接企业'}
          </h1>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 px-4">
            {language === 'en' ? 'CONNECTING BUSINESSES' : '赚取佣金'}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-white mb-8 sm:mb-12 px-4 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Share your unique referral link and earn when businesses engage AfriGo services'
              : '分享您的专属推荐链接，当企业使用AfriGo服务时赚取佣金'}
          </p>

          {/* Stats */}
          <div className="bg-white border-2 border-gray-300 rounded p-4 sm:p-6 max-w-3xl mx-auto">
            <div className="grid grid-cols-2 gap-4 sm:gap-8">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">50+</p>
                <p className="text-xs sm:text-sm text-gray-600">
                  {language === 'en' ? 'Active Promoters' : '活跃推广者'}
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">$100K+</p>
                <p className="text-xs sm:text-sm text-gray-600">
                  {language === 'en' ? 'Paid in Commissions' : '已支付佣金'}
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mt-4">
              {language === 'en' 
                ? 'Join today and start earning immediately'
                : '立即加入并开始赚钱'}
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12 text-center">
            {language === 'en' ? 'HOW IT WORKS' : '如何运作'}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: 1, title: language === 'en' ? 'Register Free' : '免费注册', desc: language === 'en' ? 'Create your account' : '创建您的账户', badge: language === 'en' ? 'Takes 2 minutes' : '仅需2分钟' },
              { num: 2, title: language === 'en' ? 'Get Your Link & QR' : '获取链接和二维码', desc: language === 'en' ? 'Unique tracking' : '独特追踪', badge: language === 'en' ? 'Share anywhere' : '随处分享' },
              { num: 3, title: language === 'en' ? 'Share with Network' : '分享到网络', desc: language === 'en' ? 'Social media, email' : '社交媒体、邮件', badge: language === 'en' ? 'No limits' : '无限制' },
              { num: 4, title: language === 'en' ? 'Earn Commissions' : '赚取佣金', desc: language === 'en' ? 'When businesses use AfriGo' : '企业使用AfriGo时', badge: language === 'en' ? 'Automatic tracking' : '自动追踪' }
            ].map((step) => (
              <div key={step.num} className="border-2 border-gray-300 rounded p-6 text-center">
                <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold text-base sm:text-lg mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{step.desc}</p>
                <div className="bg-blue-900 text-white py-2 text-sm rounded">{step.badge}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Promoter Form */}
      <section id="promoter-form" className="py-12 sm:py-16 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
            {language === 'en' ? 'BECOME A PROMOTER TODAY' : '立即成为推广者'}
          </h2>
          <p className="text-white text-center mb-8 sm:mb-12 text-sm sm:text-base">
            {language === 'en' 
              ? 'Start earning in minutes. No experience required.'
              : '几分钟内开始赚钱。无需经验。'}
          </p>

          <form className="bg-white rounded p-6 sm:p-8 space-y-6">
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
                {language === 'en' ? 'Email Address *' : '电子邮件 *'}
              </label>
              <input 
                type="email" 
                className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                {language === 'en' ? 'Phone Number *' : '电话号码 *'}
              </label>
              <input 
                type="tel" 
                className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                {language === 'en' ? 'WeChat ID (optional)' : '微信号（可选）'}
              </label>
              <input 
                type="text" 
                className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                {language === 'en' 
                  ? 'How will you promote? (Social media, business network, events, etc.)'
                  : '您将如何推广？（社交媒体、商业网络、活动等）'}
              </label>
              <textarea 
                className="w-full border-2 border-gray-300 rounded px-4 py-3 h-32 resize-none focus:outline-none focus:border-blue-900"
                placeholder={language === 'en' 
                  ? 'Tell us about your network and how you plan to share AfriGo...'
                  : '告诉我们您的网络以及您计划如何分享AfriGo...'}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-orange-500 text-white py-3 sm:py-4 text-base sm:text-lg font-bold rounded hover:bg-orange-600 transition-colors"
            >
              {language === 'en' ? 'Join Promoter Program →' : '加入推广计划 →'}
            </button>

            <p className="text-center text-xs sm:text-sm text-gray-600">
              {language === 'en' ? 'Already a promoter?' : '已经是推广者？'}{' '}
              <a 
                href="#" 
                className="text-blue-900 font-semibold hover:underline"
                onClick={(e) => { 
                  e.preventDefault(); 
                  alert(language === 'en' ? 'Login feature coming soon!' : '登录功能即将推出！'); 
                }}
              >
                {language === 'en' ? 'Login to Dashboard' : '登录仪表板'}
              </a>
            </p>
          </form>
        </div>
      </section>

      {/* Why Become a Promoter */}
      <section className="py-12 sm:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12 text-center">
            {language === 'en' ? 'WHY BECOME AN AFRIGO PROMOTER?' : '为什么成为AFRIGO推广者？'}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: '💵', title: language === 'en' ? 'Earn Passive Income' : '赚取被动收入', desc: language === 'en' ? 'Generate commissions every time someone uses your referral link to engage AfriGo services' : '每次有人使用您的推荐链接使用AfriGo服务时赚取佣金' },
              { icon: '🎯', title: language === 'en' ? 'No Experience Needed' : '无需经验', desc: language === 'en' ? 'We provide all the tools, training, and support you need to succeed as a promoter' : '我们提供成为推广者所需的所有工具、培训和支持' },
              { icon: '📊', title: language === 'en' ? 'Real-Time Tracking' : '实时追踪', desc: language === 'en' ? 'Track your referrals, conversions, and earnings in your personal dashboard' : '在您的个人仪表板中跟踪推荐、转化和收入' },
              { icon: '🤝', title: language === 'en' ? 'Dedicated Support' : '专属支持', desc: language === 'en' ? 'Get help from our promoter success team whenever you need it' : '随时从我们的推广者成功团队获得帮助' },
              { icon: '🎁', title: language === 'en' ? 'Bonus Incentives' : '奖金激励', desc: language === 'en' ? 'Earn extra bonuses for top performance and milestone achievements' : '因优异表现和里程碑成就赚取额外奖金' },
              { icon: '🌍', title: language === 'en' ? 'Work From Anywhere' : '随处工作', desc: language === 'en' ? 'Promote AfriGo from anywhere in the world - it\'s completely flexible' : '在世界任何地方推广AfriGo - 完全灵活' }
            ].map((benefit, i) => (
              <div key={i} className="bg-white border-2 border-gray-300 rounded p-6 sm:p-8 text-center">
                <div className="text-4xl sm:text-5xl mb-4">{benefit.icon}</div>
                <h3 className="font-bold text-base sm:text-lg mb-3">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-8 sm:mb-12 text-center">
            {language === 'en' ? 'FREQUENTLY ASKED QUESTIONS' : '常见问题'}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-blue-900 mb-2 text-sm sm:text-base">
                  {language === 'en' ? 'Q: How much can I earn as a promoter?' : '问：作为推广者我能赚多少？'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  {language === 'en' ? 'Earnings vary based on referrals. Top promoters earn $2,000-5,000+ monthly.' : '收入因推荐而异。顶级推广者每月可赚取2,000-5,000美元以上。'}
                </p>
              </div>
              <div>
                <h3 className="font-bold text-blue-900 mb-2 text-sm sm:text-base">
                  {language === 'en' ? 'Q: When do I get paid?' : '问：我什么时候能拿到钱？'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  {language === 'en' ? 'Commissions are paid monthly via bank transfer or mobile money.' : '佣金每月通过银行转账或移动支付支付。'}
                </p>
              </div>
              <div>
                <h3 className="font-bold text-blue-900 mb-2 text-sm sm:text-base">
                  {language === 'en' ? 'Q: Is there a cost to join?' : '问：加入需要费用吗？'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  {language === 'en' ? 'No! The promoter program is completely free to join.' : '不！推广计划完全免费加入。'}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-blue-900 mb-2 text-sm sm:text-base">
                  {language === 'en' ? 'Q: What kind of support do I get?' : '问：我会得到什么样的支持？'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  {language === 'en' ? 'You get marketing materials, training resources, and a dedicated support manager.' : '您将获得营销材料、培训资源和专属支持经理。'}
                </p>
              </div>
              <div>
                <h3 className="font-bold text-blue-900 mb-2 text-sm sm:text-base">
                  {language === 'en' ? 'Q: Can I promote if I\'m not in Kenya?' : '问：如果我不在肯尼亚，我可以推广吗？'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  {language === 'en' ? 'Yes! You can promote from anywhere, especially if you have connections to Chinese businesses.' : '可以！您可以在任何地方推广，特别是如果您与中国企业有联系。'}
                </p>
              </div>
              <div>
                <h3 className="font-bold text-blue-900 mb-2 text-sm sm:text-base">
                  {language === 'en' ? 'Q: How do I track my referrals?' : '问：我如何追踪我的推荐？'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  {language === 'en' ? 'Your promoter dashboard shows real-time analytics on clicks, signups, and earnings.' : '您的推广者仪表板显示点击、注册和收入的实时分析。'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-900 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {language === 'en' ? 'Ready to Start Earning?' : '准备好开始赚钱了吗？'}
          </h2>
          <p className="text-white mb-6 sm:mb-8 text-sm sm:text-base">
            {language === 'en' ? 'Join 50+ promoters already earning commissions with AfriGo' : '加入已有50多位推广者在AfriGo赚取佣金'}
          </p>
          <a 
            href="#promoter-form"
            className="inline-block bg-orange-500 text-white px-8 sm:px-16 py-3 sm:py-4 text-base sm:text-lg rounded hover:bg-orange-600 transition-colors"
          >
            {language === 'en' ? 'Become a Promoter Today →' : '立即成为推广者 →'}
          </a>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-900 mb-4">
            {language === 'en' ? 'Have Questions About the Promoter Program?' : '对推广计划有疑问？'}
          </h2>
          <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
            {language === 'en' ? 'Our team is here to help you get started' : '我们的团队随时帮助您开始'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact"
              className="inline-block bg-blue-900 text-white px-8 sm:px-10 py-3 rounded hover:bg-blue-800 transition-colors text-sm sm:text-base"
            >
              {language === 'en' ? 'Contact Us →' : '联系我们 →'}
            </a>
            <a 
              href="/contact"
              className="inline-block bg-orange-500 text-white px-8 sm:px-10 py-3 rounded hover:bg-orange-600 transition-colors text-sm sm:text-base"
            >
              {language === 'en' ? 'Schedule Call' : '预约电话'}
            </a>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer language={language} />
    </div>
  );
}