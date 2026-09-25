import { contact } from '../site.config';

export const waLink = () =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`;

export const telLink = () => `tel:${contact.phone}`;

export const mailLink = (subject = 'Restaurant technology enquiry') =>
  `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`;
