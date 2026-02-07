'use client';

interface HeaderProps {
  language: 'en' | 'zh';
  onLanguageToggle: () => void;
  currentPage?: string;
}

export default function Header({ language, onLanguageToggle, currentPage = '' }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/75 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="bg-blue-900 text-white px-4 sm:px-6 py-2 font-bold text-lg sm:text-xl hover:bg-blue-800 transition-colors">
            AFRIGO
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-6 xl:gap-8">
            <a 
              href="/" 
              className={`text-sm hover:text-blue-900 transition-colors ${currentPage === 'home' ? 'text-blue-900 font-semibold' : 'text-gray-600'}`}
            >
              {language === 'en' ? 'Home' : '首页'}
            </a>
            <a 
              href="/about" 
              className={`text-sm hover:text-blue-900 transition-colors ${currentPage === 'about' ? 'text-blue-900 font-semibold' : 'text-gray-600'}`}
            >
              {language === 'en' ? 'About' : '关于'}
            </a>
            <a 
              href="/services" 
              className={`text-sm hover:text-blue-900 transition-colors ${currentPage === 'services' ? 'text-blue-900 font-semibold' : 'text-gray-600'}`}
            >
              {language === 'en' ? 'Services' : '服务'}
            </a>
            <a 
              href="/partners" 
              className={`text-sm hover:text-blue-900 transition-colors ${currentPage === 'partners' ? 'text-blue-900 font-semibold' : 'text-gray-600'}`}
            >
              {language === 'en' ? 'Partners' : '合作伙伴'}
            </a>
            <a 
              href="/promoter" 
              className={`text-sm hover:text-blue-900 transition-colors ${currentPage === 'promoter' ? 'text-blue-900 font-semibold' : 'text-gray-600'}`}
            >
              {language === 'en' ? 'Promoter' : '推广者'}
            </a>
            <a 
              href="/contact" 
              className={`text-sm hover:text-blue-900 transition-colors ${currentPage === 'contact' ? 'text-blue-900 font-semibold' : 'text-gray-600'}`}
            >
              {language === 'en' ? 'Contact' : '联系'}
            </a>
            <a 
              href="/news" 
              className={`text-sm hover:text-blue-900 transition-colors ${currentPage === 'news' ? 'text-blue-900 font-semibold' : 'text-gray-600'}`}
            >
              {language === 'en' ? 'News' : '新闻'}
            </a>
          </nav>

          {/* Language Toggle - Beautiful UI */}
          <button 
            onClick={onLanguageToggle}
            className="flex items-center gap-2 bg-white border-2 border-blue-900 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-blue-50 transition-all shadow-sm"
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

        {/* Mobile Navigation */}
        <nav className="lg:hidden flex flex-wrap gap-4 mt-4 pt-4 border-t border-gray-200">
          <a 
            href="/" 
            className={`text-xs hover:text-blue-900 ${currentPage === 'home' ? 'text-blue-900 font-semibold' : 'text-gray-600'}`}
          >
            {language === 'en' ? 'Home' : '首页'}
          </a>
          <a 
            href="/about" 
            className={`text-xs hover:text-blue-900 ${currentPage === 'about' ? 'text-blue-900 font-semibold' : 'text-gray-600'}`}
          >
            {language === 'en' ? 'About' : '关于'}
          </a>
          <a 
            href="/services" 
            className={`text-xs hover:text-blue-900 ${currentPage === 'services' ? 'text-blue-900 font-semibold' : 'text-gray-600'}`}
          >
            {language === 'en' ? 'Services' : '服务'}
          </a>
          <a 
            href="/partners" 
            className={`text-xs hover:text-blue-900 ${currentPage === 'partners' ? 'text-blue-900 font-semibold' : 'text-gray-600'}`}
          >
            {language === 'en' ? 'Partners' : '合作伙伴'}
          </a>
          <a 
            href="/promoter" 
            className={`text-xs hover:text-blue-900 ${currentPage === 'promoter' ? 'text-blue-900 font-semibold' : 'text-gray-600'}`}
          >
            {language === 'en' ? 'Promoter' : '推广者'}
          </a>
          <a 
            href="/contact" 
            className={`text-xs hover:text-blue-900 ${currentPage === 'contact' ? 'text-blue-900 font-semibold' : 'text-gray-600'}`}
          >
            {language === 'en' ? 'Contact' : '联系'}
          </a>
          <a 
            href="/news" 
            className={`text-xs hover:text-blue-900 ${currentPage === 'news' ? 'text-blue-900 font-semibold' : 'text-gray-600'}`}
          >
            {language === 'en' ? 'News' : '新闻'}
          </a>
        </nav>
      </div>
    </header>
  );
}