export interface CurrencyMap {
  [code: string]: string;
}

export interface ExchangeRates {
  date: string;
  [currencyCode: string]: number | string | Record<string, number>; 
}

// Normalized rate object for internal use
export interface Rates {
  [currencyCode: string]: number;
}

export enum ImageSize {
  SIZE_1K = '1K',
  SIZE_2K = '2K',
  SIZE_4K = '4K'
}

export interface TravelImageConfig {
  size: ImageSize;
  prompt: string;
}
