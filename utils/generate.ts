import { faker } from '@faker-js/faker';

export interface Product {
    id: string;
    image: string;
    price: number;
    oldPrice?: number;
    brand: string;
    title: string;
}

export const generateFakeProduct = (id: string): Product => {

    const hasOldPrice = faker.datatype.boolean();
    const price = Number(faker.commerce.price({min: 10, max: 10000}));
    const oldPrice = hasOldPrice ? price + Number(faker.commerce.price({min: 10, max: 10000})) : undefined;
    return {
        id: id,
        image: faker.image.url(),
        price: Math.ceil(price),
        oldPrice: oldPrice ? Math.ceil(oldPrice) : undefined,
        brand: faker.company.name(),
        title: faker.commerce.productName(),
    };
};