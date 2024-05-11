import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('В корзине должно быть пусто', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('Добавление фильма в корзину', () => {
  const cart = new Cart();
  const movie = new Movie(2001, 'Мстители', 2012, 'США', 'Avengers Assembly!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 1000);

  cart.add(movie);

  expect(cart.items.length).toBe(1);
  expect(cart.items[0]).toBe(movie);
});

test('Должен посчитать суммарную стоимость (без учёта скидки)', () => {
  const cart = new Cart();
  const movie = new Movie(2001, 'Мстители', 2012, 'США', 'Avengers Assembly!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 1000);

  cart.add(movie);

  expect(cart.calculateTotalCost()).toBe(1000);
});

test('Должен посчитать суммарную стоимость (с учётом скидки)', () => {
  const cart = new Cart();
  const movie = new Movie(2001, 'Мстители', 2012, 'США', 'Avengers Assembly!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 1000);

  cart.add(movie);

  expect(cart.calculateTotalCostWithDiscount(0.1)).toBe(900);
});

test('Удаляет item из корзины по id', () => {
  const cart = new Cart();
  const movie1 = new Movie(2001, 'Мстители', 2012, 'США', 'Avengers Assembly!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 1000);
  const movie2 = new Movie(2002, 'Лига справедливости', 2017, 'США', 'Нельзя спасти мир в одиночку', ['фантастика', 'боевик', 'фэнтези'], 110, 900);

  cart.add(movie1);
  cart.add(movie2);

  cart.removeItemById(2001);

  expect(cart.items.length).toBe(1);
  expect(cart.items[0].id).toBe(2002);
});