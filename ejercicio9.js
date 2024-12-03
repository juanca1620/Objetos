const productos = {
    'manzana': 2500,
    'leche': 3000,
    'pan': 1500,
    'huevos': 4000,
    'arroz': 2000
 };
 
 let producto = prompt('¿Qué producto deseas consultar? (manzana/leche/pan/huevos/arroz)');
 
 if (productos[producto]) {
    alert(`El precio de ${producto} es $${productos[producto]}`);
 } else {
    alert("Producto inexistente");
 }