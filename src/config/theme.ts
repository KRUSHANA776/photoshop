export type ThemeMode = 'dark' | 'light' | 'warm';

export interface ThemeConfig {
  id: ThemeMode;
  name: string;
  tagline: string;
  colors: {
    bg: string;
    surface: string;
    surfaceHover: string;
    textPrimary: string;
    textSecondary: string;
    textMuted: string;
    accent: string;
    accentHover: string;
    border: string;
    borderSubtle: string;
    badgeBg: string;
  };
}

export const THEMES: Record<ThemeMode, ThemeConfig> = {
  dark: {
    id: 'dark',
    name: 'Dark Editorial',
    tagline: 'Deep obsidian & champagne gold',
    colors: {
      bg: '#0A0A0A',
      surface: '#121212',
      surfaceHover: '#1A1A1A',
      textPrimary: '#F5F5F0',
      textSecondary: '#A5A5A0',
      textMuted: '#6B6B67',
      accent: '#C5A880',
      accentHover: '#D9BE96',
      border: 'rgba(255, 255, 255, 0.12)',
      borderSubtle: 'rgba(255, 255, 255, 0.06)',
      badgeBg: 'rgba(197, 168, 128, 0.12)',
    },
  },
  light: {
    id: 'light',
    name: 'Light Editorial',
    tagline: 'Museum ivory & raw bronze',
    colors: {
      bg: '#F9F9F7',
      surface: '#FFFFFF',
      surfaceHover: '#F4F3EE',
      textPrimary: '#141413',
      textSecondary: '#666661',
      textMuted: '#9B9B94',
      accent: '#9A774B',
      accentHover: '#7F5E36',
      border: 'rgba(20, 20, 19, 0.12)',
      borderSubtle: 'rgba(20, 20, 19, 0.06)',
      badgeBg: 'rgba(154, 119, 75, 0.1)',
    },
  },
  warm: {
    id: 'warm',
    name: 'Warm Luxury',
    tagline: 'Smoked espresso & burnished gold',
    colors: {
      bg: '#12100E',
      surface: '#1A1714',
      surfaceHover: '#231F1B',
      textPrimary: '#F6F3EE',
      textSecondary: '#B5ADA2',
      textMuted: '#7D756A',
      accent: '#D4AF37',
      accentHover: '#E5C158',
      border: 'rgba(212, 175, 55, 0.18)',
      borderSubtle: 'rgba(212, 175, 55, 0.08)',
      badgeBg: 'rgba(212, 175, 55, 0.12)',
    },
  },
};
