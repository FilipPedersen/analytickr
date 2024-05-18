const API_KEY = "demo";
const BASE_URL = "https://eodhd.com/api/fundamentals";

export const getCompanyData = async (ticker: string) => {
    const url = `${BASE_URL}/${ticker}?api_token=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return {
        quarterly: data.Financials?.Income_Statement?.quarterly || {},
        annual: data.Financials?.Income_Statement?.annual || {},
        company: data.Company || {},
    };
};
