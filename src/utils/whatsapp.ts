import { photographer } from '../data/photographer';

export interface WhatsAppOptions {
  eventType?: string;
  name?: string;
  date?: string;
  location?: string;
  customMessage?: string;
}

export function buildWhatsAppUrl(options: WhatsAppOptions = {}): string {
  const phone = photographer.whatsapp.replace(/[^0-9]/g, '');

  let text = '';

  if (options.customMessage) {
    text = options.customMessage;
  } else if (options.eventType) {
    text = `Hi Charudatta, I am interested in ${options.eventType} Photography.`;
    if (options.name) text += ` My name is ${options.name}.`;
    if (options.date) text += ` Proposed date: ${options.date}.`;
    if (options.location) text += ` Location: ${options.location}.`;
    text += ` I would love to explore your availability and packages.`;
  } else {
    text = `Hi Charudatta Arya Studios, I found your photography portfolio and would love to enquire about scheduling a photoshoot session.`;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(text.trim())}`;
}
