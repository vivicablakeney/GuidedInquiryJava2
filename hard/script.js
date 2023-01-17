const tom = {
    height: 9,
    mass: 8
  };
  
  const jerry = {
    height: 10,
    mass: 45
  };
  
  const tomBMI = tom.mass / (tom.height * tom.height);
  const jerryBMI = jerry.mass / (jerry.height * jerry.height);
  
  const tomHigherBMI = tomBMI > jerryBMI;
  console.log(`Is Tom's BMI higher than Jerry's? ${tomHigherBMI}`);
  