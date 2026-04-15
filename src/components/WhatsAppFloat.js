import { PiWhatsappLogoLight } from "react-icons/pi";
import { WHATSAPP_URL } from "./siteConfig";

function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Qumi-Ori on WhatsApp"
    >
      <PiWhatsappLogoLight />
    </a>
  );
}

export default WhatsAppFloat;
