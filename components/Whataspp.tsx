import React from 'react';
import Image from 'next/image';
import WhatsappIcon from '@/public/whatsapp-svgrepo-com.svg'; // Make sure the path is correct

const WhatsAppButton = () => {
  const phoneNumber = "9345336311"; // Replace with your business phone number
  const message = "Hello! I have a query."; // Replace with your desired default message
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-4 z-50 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110"
    >
      <Image 
        src={WhatsappIcon} 
        alt="WhatsApp" 
        width={30} 
        height={30} 
        className='text-white filter invert brightness-100'
      />
    </a>
  );
};

export default WhatsAppButton;