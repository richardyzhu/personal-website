const LinksSection: React.FC = () => {
  return (
    <div className="flex gap-8 items-center">
      <a
        href="https://github.com/richardyzhu"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-gray-800 hover:bg-gray-700 text-white rounded-full flex items-center justify-center shadow-lg transition duration-300"
      >
        <i className="fab fa-github text-3xl"></i> {/* GitHub Icon */}
      </a>
      <a
        href="https://linkedin.com/in/richard-yunqi-zhu"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-blue-600 hover:bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg transition duration-300"
      >
        <i className="fab fa-linkedin-in text-3xl"></i> {/* LinkedIn Icon */}
      </a>
      <a
        href="mailto:richard.yunqi.zhu@gmail.com"
        className="w-16 h-16 bg-gray-500 hover:bg-gray-400 text-white rounded-full flex items-center justify-center shadow-lg transition duration-300"
      >
        <i className="fas fa-envelope text-3xl"></i> {/* Email Icon */}
      </a>
      <a
        href="/Richard_Zhu_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded-full flex items-center justify-center shadow-lg transition duration-300">
          <span className="text-lg">Resume</span>
        </button>
      </a>
    </div>
  );
};

export default LinksSection;
