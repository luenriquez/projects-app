import { faker } from "@faker-js/faker";
import { Manager } from "./manager-mock";

export interface Project {
    id: string;
    name: string;
    createdAt: Date;
    description: string;
    assigned: {
        id: string;
        name: string;
        avatar: string;
    };
    manager: Manager;
    status?: string;
}

export const mockProject = (opts?: Partial<Project>): Project => {
    return {
        id: faker.string.uuid(),
        name: faker.company.name(),
        description: faker.lorem.sentence(),
        createdAt: faker.date.past(),
        assigned: {
            id: faker.string.uuid(),
            name: faker.person.fullName(),
            avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/688.jpg",
            ...opts?.assigned,
        },
        manager: {
            id: faker.string.uuid(),
            name: faker.person.fullName(),
            avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/688.jpg",
            ...opts?.manager,
        },
        status: 'Enabled',
        ...opts
    };
};
