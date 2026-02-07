'use client';

interface FooterProps {
  language: 'en' | 'zh';
}

export default function Footer({ language }: FooterProps) {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 text-sm sm:text-base">
              {language === 'en' ? 'Company' : '公司'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
              <li>
                <a href="/about" className="hover:text-blue-900">
                  {language === 'en' ? 'About Us' : '关于我们'}
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-900">
                  {language === 'en' ? 'Our Team' : '我们的团队'}
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-900">
                  {language === 'en' ? 'Contact' : '联系'}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-sm sm:text-base">
              {language === 'en' ? 'Services' : '服务'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
              <li>
                <a href="/services" className="hover:text-blue-900">
                  {language === 'en' ? 'All Services' : '所有服务'}
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-blue-900">
                  {language === 'en' ? 'Supply Chain' : '供应链'}
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-blue-900">
                  {language === 'en' ? 'Partnerships' : '合作关系'}
                </a>
              </li>
            </ul>
          </div>

          {/* For You */}
          <div>
            <h4 className="font-bold mb-4 text-sm sm:text-base">
              {language === 'en' ? 'For You' : '为您服务'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
              <li>
                <a href="/partners" className="hover:text-blue-900">
                  {language === 'en' ? 'Become a Partner' : '成为合作伙伴'}
                </a>
              </li>
              <li>
                <a href="/promoter" className="hover:text-blue-900">
                  {language === 'en' ? 'Promoter Center' : '推广中心'}
                </a>
              </li>
              <li>
                <a href="/news" className="hover:text-blue-900">
                  {language === 'en' ? 'Resources' : '资源'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-sm sm:text-base">
              {language === 'en' ? 'Contact' : '联系方式'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
              <li>info@afrigo.com</li>
              <li>+254 XXX XXX XXX</li>
              <li>
                {language === 'en' ? 'WeChat: AfriGo' : '微信：AfriGo'}
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs sm:text-sm text-gray-500 pt-6 border-t border-gray-300">
          {language === 'en' 
            ? '© 2026 AfriGo. All rights reserved.' 
            : '© 2026 AfriGo. 版权所有。'}
        </div>
      </div>
    </footer>
  );
}