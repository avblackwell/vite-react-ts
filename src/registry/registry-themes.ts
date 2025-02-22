import { type Registry } from '@/registry/types'

export const themes: Registry['items'] = [
  {
    name: 'theme-daylight',
    type: 'registry:theme',
    cssVars: {
      light: {
        background: '36 39% 88%',
        foreground: '36 45% 15%',
        primary: '36 45% 70%',
        'primary-foreground': '36 45% 11%',
        secondary: '40 35% 77%',
        'secondary-foreground': '36 45% 25%',
        accent: '36 64% 57%',
        'accent-foreground': '36 72% 17%',
        destructive: '0 84% 37%',
        'destructive-foreground': '0 0% 98%',
        muted: '36 33% 75%',
        'muted-foreground': '36 45% 25%',
        card: '36 46% 82%',
        'card-foreground': '36 45% 20%',
        popover: '0 0% 100%',
        'popover-foreground': '240 10% 3.9%',
        border: '36 45% 60%',
        input: '36 45% 60%',
        ring: '36 45% 30%',
        'chart-1': '25 34% 28%',
        'chart-2': '26 36% 34%',
        'chart-3': '28 40% 40%',
        'chart-4': '31 41% 48%',
        'chart-5': '35 43% 53%',
      },
      dark: {
        background: '36 39% 88%',
        foreground: '36 45% 15%',
        primary: '36 45% 70%',
        'primary-foreground': '36 45% 11%',
        secondary: '40 35% 77%',
        'secondary-foreground': '36 45% 25%',
        accent: '36 64% 57%',
        'accent-foreground': '36 72% 17%',
        destructive: '0 84% 37%',
        'destructive-foreground': '0 0% 98%',
        muted: '36 33% 75%',
        'muted-foreground': '36 45% 25%',
        card: '36 46% 82%',
        'card-foreground': '36 45% 20%',
        popover: '0 0% 100%',
        'popover-foreground': '240 10% 3.9%',
        border: '36 45% 60%',
        input: '36 45% 60%',
        ring: '36 45% 30%',
        'chart-1': '25 34% 28%',
        'chart-2': '26 36% 34%',
        'chart-3': '28 40% 40%',
        'chart-4': '31 41% 48%',
        'chart-5': '35 43% 53%',
      },
    },
  },
  {
    name: 'theme-midnight',
    type: 'registry:theme',
    cssVars: {
      light: {
        background: '240 5% 6%',
        foreground: '60 5% 90%',
        primary: '240 0% 90%',
        'primary-foreground': '60 0% 0%',
        secondary: '240 4% 15%',
        'secondary-foreground': '60 5% 85%',
        accent: '240 0% 13%',
        'accent-foreground': '60 0% 100%',
        destructive: '0 60% 50%',
        'destructive-foreground': '0 0% 98%',
        muted: '240 5% 25%',
        'muted-foreground': '60 5% 85%',
        card: '240 4% 10%',
        'card-foreground': '60 5% 90%',
        popover: '240 5% 15%',
        'popover-foreground': '60 5% 85%',
        border: '240 6% 20%',
        input: '240 6% 20%',
        ring: '240 5% 90%',
        'chart-1': '359 2% 90%',
        'chart-2': '240 1% 74%',
        'chart-3': '240 1% 58%',
        'chart-4': '240 1% 42%',
        'chart-5': '240 2% 26%',
      },
      dark: {
        background: '240 5% 6%',
        foreground: '60 5% 90%',
        primary: '240 0% 90%',
        'primary-foreground': '60 0% 0%',
        secondary: '240 4% 15%',
        'secondary-foreground': '60 5% 85%',
        accent: '240 0% 13%',
        'accent-foreground': '60 0% 100%',
        destructive: '0 60% 50%',
        'destructive-foreground': '0 0% 98%',
        muted: '240 5% 25%',
        'muted-foreground': '60 5% 85%',
        card: '240 4% 10%',
        'card-foreground': '60 5% 90%',
        popover: '240 5% 15%',
        'popover-foreground': '60 5% 85%',
        border: '240 6% 20%',
        input: '240 6% 20%',
        ring: '240 5% 90%',
        'chart-1': '359 2% 90%',
        'chart-2': '240 1% 74%',
        'chart-3': '240 1% 58%',
        'chart-4': '240 1% 42%',
        'chart-5': '240 2% 26%',
      },
    },
  },
  {
    name: 'theme-emerald',
    type: 'registry:theme',
    cssVars: {
      light: {
        background: '0 0% 100%',
        foreground: '240 10% 3.9%',
        card: '0 0% 100%',
        'card-foreground': '240 10% 3.9%',
        popover: '0 0% 100%',
        'popover-foreground': '240 10% 3.9%',
        primary: '142 86% 28%',
        'primary-foreground': '356 29% 98%',
        secondary: '240 4.8% 95.9%',
        'secondary-foreground': '240 5.9% 10%',
        muted: '240 4.8% 95.9%',
        'muted-foreground': '240 3.8% 45%',
        accent: '240 4.8% 95.9%',
        'accent-foreground': '240 5.9% 10%',
        destructive: '0 72% 51%',
        'destructive-foreground': '0 0% 98%',
        border: '240 5.9% 90%',
        input: '240 5.9% 90%',
        ring: '142 86% 28%',
        'chart-1': '139 65% 20%',
        'chart-2': '140 74% 44%',
        'chart-3': '142 88% 28%',
        'chart-4': '137 55% 15%',
        'chart-5': '141 40% 9%',
      },
      dark: {
        background: '240 10% 3.9%',
        foreground: '0 0% 98%',
        card: '240 10% 3.9%',
        'card-foreground': '0 0% 98%',
        popover: '240 10% 3.9%',
        'popover-foreground': '0 0% 98%',
        primary: '142 86% 28%',
        'primary-foreground': '356 29% 98%',
        secondary: '240 4.8% 95.9%',
        'secondary-foreground': '240 5.9% 10%',
        muted: '240 3.7% 15.9%',
        'muted-foreground': '240 5% 64.9%',
        accent: '240 3.7% 15.9%',
        'accent-foreground': '0 0% 98%',
        destructive: '0 72% 51%',
        'destructive-foreground': '0 0% 98%',
        border: '240 3.7% 15.9%',
        input: '240 3.7% 15.9%',
        ring: '142 86% 28%',
        'chart-1': '142 88% 28%',
        'chart-2': '139 65% 20%',
        'chart-3': '140 74% 24%',
        'chart-4': '137 55% 15%',
        'chart-5': '141 40% 9%',
      },
    },
  },
]
