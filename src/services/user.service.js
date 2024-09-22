import { UserModel } from '../models/user.model.js';
import { generateUser } from '../utils/user.utils.js';

export const createUsersMock = async (cant = 50) => {
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

export const getUsers = async () => {
  try {
    const users = await UserModel.find({});
    if (!users || users.length === 0) {
      throw new Error('No users found');
    }
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error('Failed to fetch users');
  }
};