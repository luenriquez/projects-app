import { faker } from "@faker-js/faker";

export interface Manager {
    id: string;
    name: string;
    avatar: string;
}

export const mockManager = (opts?: Partial<Manager>): Manager => {
    return {
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/688.jpg",
        ...opts
    };
};