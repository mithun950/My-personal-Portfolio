import { IoLogoWhatsapp } from "react-icons/io";

const Bot = () => {
  const handleWhatsApp = () => {
    const phone = "01943252411"; // Replace with your WhatsApp number
    const url = `https://wa.me/${phone}`;
    window.open(url, "_blank");
  };

  return (
    <div
      onClick={handleWhatsApp}
      className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce"
    >
      <IoLogoWhatsapp className="text-white text-3xl" /> {/* React icon with white color */}
    </div>
  );
};
export default Bot