import { faker } from '@faker-js/faker';

export interface Product {
    image: string;
    price: number;
    oldPrice?: number;
    brand: string;
    title: string;
}

export const generateFakeProduct = (): Product => {
    const hasOldPrice = faker.datatype.boolean();
    const price = Number(faker.commerce.price({min: 10, max: 10000}));
    const oldPrice = hasOldPrice ? price + Number(faker.commerce.price({min: 10, max: 10000})) : undefined;
    return {
        image: faker.image.url(),
        price: Number(price),
        oldPrice: oldPrice ? Number(Number(oldPrice).toFixed(2)) : undefined,
        brand: faker.company.name(),
        title: faker.commerce.productName(),
    };
};