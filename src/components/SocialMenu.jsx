import { useState } from 'react';
import { 
  FaShareAlt, FaTimes,
  FaWhatsapp, FaFacebookF, 
  FaLinkedinIn, FaYoutube, FaInstagram, 
  FaRedditAlien, FaDiscord, FaTelegram 
} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const SocialMenu = () => {
  const [isActive, setIsActive] = useState(false);

  const socialLinks = [
    { icon: <FaWhatsapp />, title: "WhatsApp", color: "#25D366", url: "https://wa.me/+254115647545" },
    { icon: <FaFacebookF />, title: "Facebook", color: "#1877F2", url: "https://www.facebook.com/Koech Cleophas" },
    {
      icon: <FaXTwitter />,
      title: "Twitter",
      color: "#000000", // X branding is black
      url: "https://X.com/im_cleophas",
    },
    { icon: <FaLinkedinIn />, title: "LinkedIn", color: "#0077B5", url: "#" },
    { icon: <FaYoutube />, title: "YouTube", color: "#FF0000", url: "https://youtube.com/@im_cleophas" },
    { icon: <FaInstagram />, title: "Instagram", color: "#E4405F", url: "https://instagram.com/im_cleophas" },
    { icon: <FaRedditAlien />, title: "Reddit", color: "#FF5700", url: "#" },
    { icon: <FaDiscord />, title: "Discord", color: "#5865F2", url: "#" },
    { icon: <FaTelegram />, title: "Telegram", color: "#0088cc", url: "https://t.me/im_cleophas" }
  ];

  return (
    <div className={`social-hub ${isActive ? 'active' : ''}`}>
      <button 
        className="hub-button pulse"
        onClick={() => setIsActive(!isActive)}
        aria-label={isActive ? 'Close social menu' : 'Open social menu'}
      >
        {isActive ? <FaTimes /> : <FaShareAlt />}
      </button>
      
      <ul className="social-links">
        {socialLinks.map((link, index) => (
          <li 
            key={index}
            data-index={index + 1}
            style={{ '--i': index }}
          >
            <a 
              href={link.url} 
              title={link.title}
              style={{ '--color': link.color }}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMenu;