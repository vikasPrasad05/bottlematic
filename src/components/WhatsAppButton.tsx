import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    // Replace with the actual WhatsApp number
    const whatsappNumber = "+919724525604";
    const message = encodeURIComponent("Hello! I'm interested in pure water delivery services.");

    return (
        <Link
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 group flex items-center justify-center animate-bounce-slow"
            aria-label="Contact us on WhatsApp"
        >
            <MessageCircle className="w-7 h-7" />

            {/* Tooltip */}
            <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-medium py-1.5 px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                Chat with us!
                {/* Tooltip Arrow */}
                <span className="absolute top-1/2 -left-4 -mt-1 border-4 border-transparent border-l-white"></span>
            </span>

            {/* Ripple Effect Background */}
            <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75"></span>
        </Link>
    );
}
