const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const units = {
    'eters to feet': 3.28084,
    'feet to meters': 0.3048,
    'kilometers to miles': 0.621371,
    'iles to kilometers': 1.60934
  };
  
  const trigonometricFunctions = {
    sin: Math.sin,
    cos: Math.cos,
    tan: Math.tan,
    asin: Math.asin,
    acos: Math.acos,
    atan: Math.atan
  };
  
  function evaluateExpression(expression) {
    try {
      expression = expression.replace(/(sin|cos|tan|asin|acos|atan)\s*\(([^)]+)\)/g, (_, func, angle) => {
        return trigonometricFunctions[func](angle * (Math.PI / 180));
      });
      expression = expression.replace(/(\d+)\s*(meters to feet|feet to meters|kilometers to miles|miles to kilometers)/g, (_, value, unit) => {
        return value * units[unit];
      });
  
      const result = eval(expression);
      return result;
    } catch (error) {
      return 'Error: '
    }
  }
  
  function roadConstructionCalculation(length, width, depth) {
    const area = length * width;
    const volume = area * depth;
  
    const gravelVolume = area * 0.05; // in cubic meters
    const gravelNeeded = gravelVolume * 1.8; // in tons
  
    const asphaltVolume = area * 0.05; // in cubic meters
    const asphaltNeeded = asphaltVolume * 2.4; // in tons
  
    return {
      gravel: gravelNeeded.toFixed(2),
      asphalt: asphaltNeeded.toFixed(2)
    };
  }
  
  function calculator() {
    readline.question('Enter an expression (e.g., 2 + 3, sin(30), 10 meters to feet, road construction length width depth): ', (input) => {
      if (input.startsWith('road construction')) {
        const params = input.match(/road construction\s*(\d+)\s*(\d+)\s*(\d+)/);
        if (params) {
          const length = parseFloat(params[1]);
          const width = parseFloat(params[2]);
          const depth = parseFloat(params[3]);
          const materials = roadConstructionCalculation(length, width, depth);
          console.log(`Materials needed: Gravel = ${materials.gravel} tons, Asphalt = ${materials.asphalt} tons`);
        } else {
          console.log('Error: Invalid input for road construction');
        }
      } else {
        const result = evaluateExpression(input);
        console.log('Result:', result);
      }
      calculator(); 
    });
  }
  
  calculator();