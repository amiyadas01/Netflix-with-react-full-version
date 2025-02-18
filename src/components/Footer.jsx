

const Footer = () => {
  return (
    <footer className="bg-black h-[50vh] text-gray-400 text-sm 2xl:text-[28px] py-8">
      <div className="max-w-6xl 2xl:max-w-7xl ml-10 md:ml-25 lg:ml-40 2xl:ml-55 m-auto ">
        <p className="mb-4">Questions? Call <a href="tel:000-800-919-1743" className="underline">000-800-919-1743</a></p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="space-y-2">
            <a href="#" className="block hover:underline">FAQ</a>
            <a href="#" className="block hover:underline">Investor Relations</a>
            <a href="#" className="block hover:underline">Privacy</a>
            <a href="#" className="block hover:underline">Speed Test</a>
          </div>
          <div className="space-y-2">
            <a href="#" className="block hover:underline">Help Centre</a>
            <a href="#" className="block hover:underline">Jobs</a>
            <a href="#" className="block hover:underline">Cookie Preferences</a>
            <a href="#" className="block hover:underline">Legal Notices</a>
          </div>
          <div className="space-y-2">
            <a href="#" className="block hover:underline">Account</a>
            <a href="#" className="block hover:underline">Ways to Watch</a>
            <a href="#" className="block hover:underline">Corporate Information</a>
            <a href="#" className="block hover:underline">Only on Netflix</a>
          </div>
          <div className="space-y-2">
            <a href="#" className="block hover:underline">Media Centre</a>
            <a href="#" className="block hover:underline">Terms of Use</a>
            <a href="#" className="block hover:underline">Contact Us</a>
          </div>
        </div>

        <div className="mt-6">
          <button className="border hover:scale-101 cursor-pointer border-gray-500 px-4 py-1 rounded text-white flex items-center">
            🌐 English ▼
          </button>
        </div>

        <p className="mt-4">Netflix India</p>
      </div>
    </footer>
  );
};

export default Footer;