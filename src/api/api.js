const API_URL = "http://localhost:5000/api";

export const getServices = async () => {
  try {
    const response = await fetch(`${API_URL}/services`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des services");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
