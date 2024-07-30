import { faker } from "@faker-js/faker";

export interface Assigned {
    id: string;
    name: string;
    avatar: string;
}

export const mockAssigned = (opts?: Partial<Assigned>): Assigned => {
    return {
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/688.jpg",
        ...opts
    }
}