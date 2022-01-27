export type SimpleObjectType = {
    [key: string]: any
}

export type ProductType = {
    sku: string;
    supplier: string;
    supplierId: number;
    category: number;
    tags: any[];
    shortDescription: string;
    id: number;
    barcode: string;
    stocks: { supplyPrice: { USD: number; first: string; ratio: { "UZS/USD": number; "USD/UZS": number }; order: string[]; UZS: number }; import: number; importCount: number; count: number; sellPrice: { USD: number; first: string; ratio: { "UZS/USD": number; "USD/UZS": number }; order: string[]; UZS: number }; transferCount: number; tracking: boolean; originalImport: number; transfer: any; composite: boolean; imported: string; supplier: number; originalImportCount: number; location: number; id: string; countable: boolean; properties: any[]; expirationDate: any }[];
    ingredients: any[];
    name: string;
    shippable: boolean;
    taxable: boolean;
    vatPercent?: any | number;
    cookable: boolean;
    sellable: boolean;
    countable: boolean;
    composite: boolean;
    scalable: boolean;
    product: number;
    images: ({ originalName: string; createdAt: string; urls: { "100x_": string; original: string; "800x_": string; "150x_": string; "50x_": string; "300x_": string }; zone: number; id: number; sort: number; brand: number; updatedAt: string; group: string })[];
    unit: string;
    brand: number;
    zone: number;
    videos?: any;
    properties: ({ name: string; value: string })[];
    productProperties: ({ name: string; id: string; value: string })[];
    area?: any;
    importRecord: {
        variationCountable: boolean; import: number; applied: boolean; variationTaxable: boolean; variation: number; productName: string; stockSupplyPrice: { USD: number; first: string; ratio: { "UZS/USD": number; "USD/UZS": number }; order: string[]; UZS: number }; categoryNames: string[]; productSku: string; variationName: string; orderPropertyPrices: any; landedCosts: any; approvals: { count: number; time: string }[]; variationScalable: boolean; variationBarcode: string; ingredients: any; id: number; stockSellPrice: { USD: number; first: string; ratio: { "UZS/USD": number; "USD/UZS": number }; order: string[]; UZS: number }; stock: string; productDescription: string; variationShippable: boolean; supplierName: string; stockExpirationDate: any; initialCount: number; stockProperties: any[]; images: any[]; productProperties: ({ name: string; value: string })[]; uploadedImages: any[]; count: number; variationSellable: boolean; landedCostPrice: { USD: number; first: string; ratio: { "UZS/USD": number; "USD/UZS": number }; order: string[]; UZS: number }; unit: string; areaNames: any; variationProperties: ({ name: string; value: string })[]; stockTracking: boolean; variationCookable: boolean; diffs: any; productTags: any
    };
    lastUpdateTime: string;
    showMarket: boolean;
    uploadedImages: any[];
    innerHitIds?: any;
    technicalCard: boolean;
    analogs: any[];
    modifiers: any[];
    baseUnitRatio?: any;
    recSupplierPrice?: any;
    recSellPrice?: any;
    minStockCount?: any;
    maxStockCount?: any;
    tracking?: any;
    importProperties: any[];
}