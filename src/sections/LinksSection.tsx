const LinksSection: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-6 sm:gap-8 items-center justify-center sm:justify-start">
      <a
        href="https://github.com/richardyzhu"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 hover:bg-gray-700 text-white rounded-full flex items-center justify-center shadow-lg transition duration-300"
      >
        <i className="fab fa-github text-2xl sm:text-3xl"></i>
      </a>
      <a
        href="https://linkedin.com/in/richard-yunqi-zhu"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 hover:bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg transition duration-300"
      >
        <i className="fab fa-linkedin-in text-2xl sm:text-3xl"></i>
      </a>
      <a
        href="mailto:richard.yunqi.zhu@gmail.com"
        className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-500 hover:bg-gray-400 text-white rounded-full flex items-center justify-center shadow-lg transition duration-300"
      >
        <i className="fas fa-envelope text-2xl sm:text-3xl"></i>
      </a>
      <a
        href="/Richard_Zhu_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-1.5 px-4 sm:py-2 sm:px-6 rounded-full flex items-center justify-center shadow-lg transition duration-300">
          <span className="text-sm sm:text-lg">Resume</span>
        </button>
      </a>
    </div>
  );
};

export default LinksSection;
