import { PetModel } from '../models/pet.model.js';
import { generatePet } from '../utils/pet.utils.js';

export const createPetsMock = async (cant = 50) => {
  try {
    const petsArray = [];

    for (let i = 0; i < cant; i++) {
      const pet = await generatePet();  
      petsArray.push(pet);
    }

    const pets = await PetModel.create(petsArray);

    return pets;
  } catch (error) {
    console.error("Error creating mock pets:", error);
    throw new Error('Failed to create mock pets');
  }
};

export const getPets = async () => {
  try {
    const pets = await PetModel.find({});
    if (!pets || pets.length === 0) {
      throw new Error('No pets found');
    }
    return pets;
  } catch (error) {
    console.error("Error fetching pets:", error);
    throw new Error('Failed to fetch pets');
  }
};
