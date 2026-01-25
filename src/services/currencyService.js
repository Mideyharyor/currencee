const BASE_URL = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1';

export const fetchCurrencyList = async () => {
    try {
        const response = await fetch(`${BASE_URL}/currencies.json`);
        if (!response.ok) throw new Error('Failed to fetch currencies');
        return await response.json();
    } catch (error) {
        console.error(error);
        return {};
    }
};

export const fetchExchangeRates = async (baseCurrency) => {
    try {
        const response = await fetch(`${BASE_URL}/currencies/${baseCurrency}.json`);
        if (!response.ok) throw new Error('Failed to fetch rates');
        const data = await response.json();
        // The API returns { date: "...", "usd": { ...rates } }
        return data[baseCurrency];
    } catch (error) {
        console.error(error);
        return {};
    }
};

export const fetchHistoricalRates = async (baseCurrency, targetCurrency) => {
    const dates = [];
    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        dates.push(d.toISOString().split('T')[0]);
    }

    try {
        const results = await Promise.all(
            dates.map(async (date) => {
                const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${baseCurrency}.json`;
                const response = await fetch(url);
                if (!response.ok) return { date, rate: null };
                const data = await response.json();
                return { date, rate: data[baseCurrency][targetCurrency] };
            })
        );
        return results.filter(r => r.rate !== null);
    } catch (error) {
        console.error(error);
        return [];
    }
};
