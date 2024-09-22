import * as userService from "../services/user.service.js";

export const createUser = async (req, res) => {
  const { cant } = req.query || 0
  try {
    const response = await userService.createUsersMock(cant);
    res.status(201).json({
      message: `${cant} users created successfully`,
      users: response,
    });
  } catch (error) {
    console.error("Error creating users:", error);
    res.status(500).json({
      message: "Failed to create users",
      error: error.message,
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const response = await userService.getUsers();
    if (response.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json({ users: response });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      message: "Failed to retrieve users",
      error: error.message,
    });
  }
};
