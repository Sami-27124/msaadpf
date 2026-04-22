'use client';

import { FaWhatsapp } from 'react-icons/fa';
import styles from './WhatsApp.module.css';

export default function WhatsApp() {
  const phoneNumber = '923016235725'; // WhatsApp format: country code + number without +
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
      title="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}
