import { faker } from '@faker-js/faker';

export const generatePet = () => {
  const types = ['dog', 'cat', 'bird'];
  const randomType = types[Math.floor(Math.random() * types.length)];

  return {
    name: faker.animal[`${randomType}`](),  
    type: randomType,  
  };
};