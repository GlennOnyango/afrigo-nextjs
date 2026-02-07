'use client';

import { useState } from 'react';

interface RegistrationPopupProps {
  language: 'en' | 'zh';
  onLanguageToggle: () => void;
}

export default function RegistrationPopup({ language, onLanguageToggle }: RegistrationPopupProps) {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-[60] p-4 bg-cover bg-center"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Pop-up Container */}
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border-4 border-blue-900 relative z-10">
        {/* Language Toggle Button - Top Center */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
          <button 
            onClick={onLanguageToggle}
            className="flex items-center gap-2 bg-white border-2 border-blue-900 rounded-full px-4 py-2 hover:bg-blue-50 transition-all shadow-lg"
          >
            {language === 'en' ? (
              <>
                <span className="flex items-center gap-1">
                  <span className="w-5 h-5 rounded-full bg-blue-900 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">EN</span>
                  </span>
                </span>
                <span className="text-xs text-gray-400">中文</span>
              </>
            ) : (
              <>
                <span className="text-xs text-gray-400">EN</span>
                <span className="flex items-center gap-1">
                  <span className="w-5 h-5 rounded-full bg-blue-900 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">中</span>
                  </span>
                </span>
              </>
            )}
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 bg-gray-100 text-gray-600 w-8 h-8 rounded flex items-center justify-center hover:bg-gray-200 text-xl font-bold z-20"
        >
          ✕
        </button>

        {/* Header */}
        <div className="p-8 pt-16 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            {language === 'en' ? 'WELCOME TO AFRIGO!' : '欢迎来到AFRIGO！'}
          </h2>
          <p className="text-gray-600 mb-4">
            {language === 'en' 
              ? "Get Started with Kenya's #1 Business Entry Platform"
              : '开始使用肯尼亚第一商业入驻平台'}
          </p>
          <div className="flex justify-center gap-4 text-sm text-green-600">
            <span>✓ {language === 'en' ? '500+ Launches' : '500+次启动'}</span>
            <span>✓ {language === 'en' ? '24-Hour Response' : '24小时响应'}</span>
            <span>✓ {language === 'en' ? 'Free Consultation' : '免费咨询'}</span>
          </div>
        </div>

        {/* Form */}
        <form className="px-8 pb-8 space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-bold mb-2">
              {language === 'en' ? 'Full Name' : '全名'} <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900"
              placeholder={language === 'en' ? 'Enter your full name' : '输入您的全名'}
            />
          </div>

          {/* WeChat ID */}
          <div>
            <label className="block text-sm font-bold mb-2">
              {language === 'en' ? 'WeChat ID' : '微信号'} <span className="text-red-600">*</span> ({language === 'en' ? 'Priority Contact Method' : '优先联系方式'})
            </label>
            <input
              type="text"
              className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900"
              placeholder={language === 'en' ? 'Enter your WeChat ID' : '输入您的微信号'}
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-bold mb-2">
              {language === 'en' ? 'Email Address' : '电子邮件'} <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900"
              placeholder={language === 'en' ? 'Enter your email address' : '输入您的电子邮件'}
            />
          </div>

          {/* I am a... Dropdown */}
          <div>
            <label className="block text-sm font-bold mb-2">
              {language === 'en' ? 'I am a...' : '我是...'} <span className="text-red-600">*</span>
            </label>
            <select className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900 bg-white">
              <option value="">{language === 'en' ? 'Select option' : '选择选项'}</option>
              <option value="chinese-business">{language === 'en' ? 'Chinese Business' : '中国企业'}</option>
              <option value="kenyan-business">{language === 'en' ? 'Kenyan Business' : '肯尼亚企业'}</option>
              <option value="service-partner">{language === 'en' ? 'Service Partner' : '服务合作伙伴'}</option>
              <option value="other">{language === 'en' ? 'Other' : '其他'}</option>
            </select>
          </div>

          {/* Additional Requirements */}
          <div>
            <label className="block text-sm font-bold mb-2">
              {language === 'en' ? 'Additional Requirements' : '附加要求'}
            </label>
            <textarea
              className="w-full border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-900 h-24 resize-none"
              placeholder={language === 'en' ? 'Tell us what you need (optional)...' : '告诉我们您需要什么（可选）...'}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-4 rounded text-lg font-bold hover:bg-orange-600 transition-colors"
          >
            {language === 'en' ? 'Get Started →' : '开始 →'}
          </button>

          {/* Skip Link */}
          <div className="text-center">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-500 text-sm font-normal"
            >
              {language === 'en' ? 'Skip for now →' : '暂时跳过 →'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}