// Page copy lives here so service cards and contact details stay easy to update.
export interface ServiceItem {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly detail: string;
  readonly icon: 'service' | 'diagnostics' | 'tires';
}

export const SERVICES: readonly ServiceItem[] = [
  {
    id: 'service',
    number: '01',
    title: 'Service & underhåll',
    description: 'Jag går igenom bilen ordentligt och berättar vad som behöver göras.',
    detail: 'Oljebyte · bromsar · filter',
    icon: 'service',
  },
  {
    id: 'diagnostics',
    number: '02',
    title: 'Felsökning & reparation',
    description: 'Jag letar efter orsaken och pratar igenom nästa steg med dig innan jag börjar.',
    detail: 'Diagnos · motor · elektronik',
    icon: 'diagnostics',
  },
  {
    id: 'tires',
    number: '03',
    title: 'Däck & hjul',
    description: 'Hjulskifte och däckhjälp så att bilen känns trygg på vägen året runt.',
    detail: 'Hjulskifte · balansering · däck',
    icon: 'tires',
  },
];

export interface OpeningHour {
  readonly day: string;
  readonly hours: string;
}

// Replace these sample details with TCH's real contact information before launch.
export const CONTACT_INFO = {
  email: 'kontakt@tch.se',
  phone: '08–555 12 34',
  phoneLink: '+4685551234',
  street: 'Verkstadsgatan 12',
  city: '123 45 Stockholm',
} as const;

export const OPENING_HOURS: readonly OpeningHour[] = [
  { day: 'Måndag–fredag', hours: '07.00–17.00' },
  { day: 'Lördag', hours: 'Efter överenskommelse' },
  { day: 'Söndag', hours: 'Stängt' },
];
