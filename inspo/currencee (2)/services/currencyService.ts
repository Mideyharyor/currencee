import { CurrencyMap, Rates } from '../types';

const BASE_URL = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1';

export const fetchCurrencyList = async (): Promise<CurrencyMap> => {
  try {
    const response = await fetch(`${BASE_URL}/currencies.json`);
    if (!response.ok) throw new Error('Failed to fetch currencies');
    return await response.json();
  } catch (error) {
    console.error(error);
    return {};
  }
};

export const fetchExchangeRates = async (baseCurrency: string): Promise<Rates> => {
  try {
    const response = await fetch(`${BASE_URL}/currencies/${baseCurrency}.json`);
    if (!response.ok) throw new Error('Failed to fetch rates');
    const data = await response.json();
    // The API returns { date: "...", "usd": { ...rates } }
    return data[baseCurrency] as Rates;
  } catch (error) {
    console.error(error);
    return {};
  }
};
