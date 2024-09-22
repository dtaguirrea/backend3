import * as petService from "../services/pet.service.js";

export const createPets = async (req, res) => {
  const { cant } = req.query || 0;
  try {
    const response = await petService.createPetsMock(cant);
    res.status(201).json({
      message: `${cant} pets created successfully`,
      pets: response,
    });
  } catch (error) {
    console.error("Error creating pets:", error);
    res.status(500).json({
      message: "Failed to create pets",
      error: error.message,
    });
  }
};

export const getPets = async (req, res) => {
  try {
    const response = await petService.getPets();
    if (response.length === 0) {
      return res.status(404).json({ message: "No pets found" });
    }
    res.status(200).json({ pets: response });
  } catch (error) {
    console.error("Error fetching pets:", error);
    res.status(500).json({
      message: "Failed to retrieve pets",
      error: error.message,
    });
  }
};
