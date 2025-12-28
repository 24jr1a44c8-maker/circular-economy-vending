export const identifyMaterial = async () => {
  // MOCK Gemini AI response
  const materials = ["Plastic", "Metal", "Glass"];
  const selected = materials[Math.floor(Math.random() * materials.length)];

  const coinValues = {
    Plastic: 5,
    Glass: 7,
    Metal: 10,
  };

  return {
    material: selected,
    coins: coinValues[selected],
  };
};
