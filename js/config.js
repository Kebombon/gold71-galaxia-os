// Configuración general de Gold 71 Café · Galaxia OS
// Este archivo concentra opciones de operación para no mezclarlas con la lógica principal.
window.GOLD71_CONFIG = {
  version: '4.0',
  ownerPassword: '7171',
  app: {
    packagingFee: 5,
    noPackaging: ['refresco','coca-zero','fuze-tea','agua-bonafont','agua-mineral'],
    origins: [
      ['mesa','🪑 Mesa'],
      ['llevar','🥡 Para llevar'],
      ['didi','🛵 DiDi Food'],
      ['uber','🛵 Uber Eats'],
      ['personal','👤 Personal']
    ],
    employees: ['Kevin','Bere','Alex','Elias'],
    quick: ['Sin azúcar','Sin cebolla','Sin jitomate','Sin lechuga','Extra queso','Poco hielo','Sin crema'],
    extras: {
      comida: [['Aguacate',20],['Queso',20],['Jamón',20],['Tocino',20],['Piña',20],['Aderezo',20],['Huevo',20],['Pollo',89],['Arrachera',89]],
      desayuno: [['Queso',20],['Jamón',20],['Tocino',20],['Huevo',20],['Pollo',89],['Arrachera',89]],
      ensalada: [['Aguacate',20],['Aderezo',20],['Pollo',89],['Arrachera',89]],
      hamburguesa: [['Queso',20],['Tocino',20],['Piña',20],['Aguacate',20],['Huevo',20],['Pollo',89],['Arrachera',89]],
      waffle: [['Queso',20],['Jamón',20],['Tocino',20],['Huevo',20],['Pollo',89],['Arrachera',89]]
    }
  },
  favorites: ['cafe-americano','capuchino-grande','lechero','frappe-oreo','panini-turco','hamb-regia-green','croissant-chicken','limonada-fresa'],
  categoryOrder: ['Entradas','Huevos','Ensaladas','Croissants','Sándwiches','Pastas','Hamburguesas','Paninis','Postres','Cafés fríos y frappés','Cafés','Bebidas','Tés','Waffles salados','Waffles dulces'],
  categoryLabels: {
    'Favoritos':'⭐ Favoritos',
    'Entradas':'🍟 Entradas',
    'Huevos':'🍳 Huevos',
    'Ensaladas':'🥗 Ensaladas',
    'Croissants':'🥐 Croissants',
    'Sándwiches':'🥪 Sándwiches',
    'Pastas':'🍝 Pastas',
    'Hamburguesas':'🍔 Hamburguesas',
    'Paninis':'🥖 Paninis',
    'Postres':'🍰 Postres',
    'Cafés fríos y frappés':'🧊 Cafés fríos',
    'Cafés':'☕ Cafés calientes',
    'Bebidas':'🥤 Bebidas',
    'Tés':'🍵 Tés',
    'Waffles salados':'🧇 Waffles salados',
    'Waffles dulces':'🧇 Waffles dulces'
  }
};
