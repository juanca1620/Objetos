const db = {
    '1234567': 'Juan Pérez',
    '2345678': 'María García',
    '3456789': 'Carlos López',
    '4567890': 'Ana Martínez',
    '5678901': 'Luis Rodríguez',
    '6789012': 'Sara Sánchez',
    '7890123': 'Pedro Ramírez',
    '8901234': 'Laura Torres',
    '9012345': 'Miguel Flores',
    '0123456': 'Diana Castro'
 };

 for (let documento in db) {
    console.log(db[documento]);
 }