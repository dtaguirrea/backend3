import { UserModel } from '../models/user.model.js';
import { PetModel } from '../models/pet.model.js';
import { generateUser } from '../utils/user.utils.js';
import { generatePet } from '../utils/pet.utils.js';
export const generateMockUsers = async (cant = 50) => {
    try {
      const usersArray = [];
  
      for (let i = 0; i < cant; i++) {
        const user = await generateUser(); 
        usersArray.push(user);
      }
  
      const users = await UserModel.create(usersArray);
  
      return users;
    } catch (error) {
      console.error("Error creating mock users:", error);
      throw new Error('Failed to create mock users');
    }
  };

  export const generateData = async (userCount = 0, petCount = 0) => {
    try {
      const usersArray = await generateMockUsers(userCount);
  
      const petsArray = [];
      for (let i = 0; i < petCount; i++) {
        const pet = await generatePet();
        petsArray.push(pet);
      }
  
      const insertedPets = await PetModel.create(petsArray);
  
      return { usersArray, insertedPets };
    } catch (error) {
      console.error("Error creating mock data:", error);
      throw new Error('Failed to create mock data');
    }
  };