// Explicit image choices: a page must never inherit an unrelated model photo.
export const imageCredit = name => name?.startsWith('concept/') ? 'ИИ-иллюстрация' : name?.startsWith('editorial/') ? 'Художественная обработка фото' : 'Фото продукции компании';
export const pageVisuals = {
  catalog: { image: 'catalog/334-2', imageAlt: 'Рабочий костюм «Строитель» из каталога — дополнительный ракурс' },
  custom: { image: 'concept/pattern-table', imageAlt: 'Лекала, ткань и инструменты для подготовки пошива — ИИ-иллюстрация' },
  services: { image: 'real/overalls', imageAlt: 'Полукомбинезон из фотосъёмки компании' },
  order: { image: 'concept/order-parcel', imageAlt: 'Комплектация одежды для самовывоза — ИИ-иллюстрация' },
  projects: { image: 'real/vest-red', imageAlt: 'Сигнальный жилет из реальной съёмки продукции' },
  about: { image: 'real/fabric-blue', imageAlt: 'Образцы тканей для согласования материала изделия' },
};
export const serviceVisuals = {
  workwear: { image: 'real/signal-orange-side', imageAlt: 'Сигнальный жилет — боковой ракурс из съёмки компании', directionImage: 'editorial/vest-still', directionAlt: 'Предметная композиция сигнального жилета' },
  uniform: { image: 'concept/uniform-set', imageAlt: 'Поло и фартук как пример корпоративной формы — ИИ-иллюстрация', directionImage: 'concept/uniform-set', directionAlt: 'Иллюстрация корпоративной формы: поло и фартук' },
  basic: { image: 'catalog/364-2', imageAlt: 'Футболка из ассортимента — пример базового изделия', directionImage: 'catalog/373-1', directionAlt: 'Базовая чёрная футболка из ассортимента' },
  merch: { image: 'concept/merch-set', imageAlt: 'Худи, футболка и бирка — ИИ-иллюстрация мерча', directionImage: 'concept/merch-set', directionAlt: 'Иллюстрация мерча: худи, футболка и бирка' },
  branding: { image: 'concept/branding-layout', imageAlt: 'Согласование расположения знака на одежде — ИИ-иллюстрация', directionImage: 'concept/branding-layout', directionAlt: 'Иллюстрация согласования макета нанесения' },
};
export const catalogVisuals = {
  all: pageVisuals.catalog,
  suits: { image: 'catalog/325-2', imageAlt: 'Рабочий костюм — дополнительный ракурс' },
  trousers: { image: 'catalog/486-2', imageAlt: 'Рабочие брюки из каталога' },
  overalls: { image: 'catalog/351-2', imageAlt: 'Полукомбинезон из каталога' },
  vests: { image: 'real/vest-insulated-side', imageAlt: 'Утеплённый жилет — боковой ракурс' },
  tshirts: { image: 'catalog/364-3', imageAlt: 'Футболка из каталога — вид сзади' },
  shoes: { image: 'catalog/419-2', imageAlt: 'Обувь из каталога — дополнительный ракурс' },
};
export const gallerySets = {
  home: [
    ['real/workwear-back', 'Рабочий костюм · вид сзади', '/catalog/category/suits/'],
    ['real/signal-yellow-back', 'Сигнальные элементы', '/catalog/category/vests/'],
    ['real/vest-red-side', 'Посадка и детали', '/catalog/category/vests/'],
  ],
  custom: [
    ['real/orange-suit-back', 'Конструкция костюма', '/catalog/category/suits/'],
    ['real/vest-green-side', 'Посадка жилета', '/catalog/category/vests/'],
    ['real/vest-orange', 'Утеплённое исполнение', '/catalog/category/vests/'],
  ],
  workwear: [
    ['real/workwear-black', 'Рабочий костюм', '/catalog/category/suits/'],
    ['real/overalls', 'Полукомбинезон', '/catalog/category/overalls/'],
    ['real/vest-signal-black', 'Сигнальный жилет', '/catalog/category/vests/'],
  ],
  basic: [
    ['catalog/416-1', 'Футболка красная', '/catalog/category/tshirts/'],
    ['catalog/414-1', 'Футболка синяя', '/catalog/category/tshirts/'],
    ['catalog/412-1', 'Футболка зелёная', '/catalog/category/tshirts/'],
  ],
  full: [
    ['real/workwear', 'Рабочий костюм', '/catalog/category/suits/'],
    ['real/orange-suit-back', 'Костюм · вид сзади', '/catalog/category/suits/'],
    ['real/vest-black', 'Утеплённый жилет', '/catalog/category/vests/'],
    ['real/vest-insulated-side', 'Жилет · боковой ракурс', '/catalog/category/vests/'],
    ['real/vest-blue', 'Сигнальное исполнение', '/catalog/category/vests/'],
    ['real/vest-green-side', 'Цвет и посадка', '/catalog/category/vests/'],
  ],
};
