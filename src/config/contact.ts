export const CONTACT_INFO = {
  phoneRaw: '5541987512176',
  phoneDisplay: '(41) 98751-2176',
  instagramUsername: '@covertech_consultoria',
  instagramUrl: 'https://www.instagram.com/covertech_consultoria',
  location: 'Curitiba e Região Metropolitana - PR',
  email: 'contato@covertechseguranca.com.br',
};

export const getWhatsAppUrl = (customText?: string) => {
  const defaultText = 'Olá! Vim pelo site da Covertech e gostaria de falar com um especialista em segurança.';
  const text = customText ? customText : defaultText;
  return `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
};
