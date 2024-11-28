export const initSpaceStars = () => {
  const COLORS = ["#fff2", "#fff4", "#fff7", "#fffc"];
  
  const space1 = document.querySelector(".space-1");
  const space2 = document.querySelector(".space-2");
  const space3 = document.querySelector(".space-3");
  const meteor = document.querySelector(".meteor");

  const getRandomCoordinates = () => {
    return {
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100),
    };
  };

  const generateSpaceLayer = (size, container, totalStars) => {
    const layer = new Array(totalStars).fill(null).map(() => {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const { x, y } = getRandomCoordinates();
      return `${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 100}vh 0 ${color}`;
    }).join(",");

    container.style.setProperty("--size", size);
    container.style.setProperty("--space-layer", layer);
  };

  const generateMeteorLayer = (size, container, totalMeteors) => {
    const layer = new Array(totalMeteors).fill(null).map(() => {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const { x, y } = getRandomCoordinates();
      return `${x}vw ${y}vh 0 ${color}`;
    }).join(",");

    container.style.setProperty("--size", size);
    container.style.setProperty("--meteor-layer", layer);
  };

  requestAnimationFrame(() => {
    generateSpaceLayer("2px", space1, 150);
    generateSpaceLayer("3px", space2, 75);
    generateSpaceLayer("6px", space3, 37);
    generateMeteorLayer("4px", meteor, 12);
  });
};
