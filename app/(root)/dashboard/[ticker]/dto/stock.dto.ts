export interface StockDto {
    symbol: string;
    companyName: string;
    ticker: string;
    logoUrl: string;
    marketCap: number;
    priceTarget: number;
    shortInterestPercentage?: number;
    stockPrice: number;
    stockPriceChange: number;
    moneyVolume: number;
}
