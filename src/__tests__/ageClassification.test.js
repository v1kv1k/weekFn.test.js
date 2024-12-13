const ageClassification = require('../ageClassification');

describe('ageClassification', () => {
  test('повертає null для від\'ємних чисел', () => {
    expect(ageClassification(-1)).toBe(null);
  });

  test('правильно класифікує "Дитинство"', () => {
    expect(ageClassification(0)).toBe('Дитинство');
    expect(ageClassification(1)).toBe('Дитинство');
    expect(ageClassification(24)).toBe('Дитинство');
  });

  test('правильно класифікує "Молодість"', () => {
    expect(ageClassification(24.01)).toBe('Молодість');
    expect(ageClassification(44)).toBe('Молодість');
  });

  test('правильно класифікує "Зрілість"', () => {
    expect(ageClassification(44.01)).toBe('Зрілість');
    expect(ageClassification(65)).toBe('Зрілість');
  });

  test('правильно класифікує "Старість"', () => {
    expect(ageClassification(65.1)).toBe('Старість');
    expect(ageClassification(75)).toBe('Старість');
  });

  test('пра��ильно класифікує "Довголіття"', () => {
    expect(ageClassification(75.01)).toBe('Довголіття');
    expect(ageClassification(90)).toBe('Довголіття');
  });

  test('правильно класифікує "Рекорд"', () => {
    expect(ageClassification(90.01)).toBe('Рекорд');
    expect(ageClassification(122)).toBe('Рекорд');
  });

  test('повертає null для чисел більше 122', () => {
    expect(ageClassification(122.01)).toBe(null);
    expect(ageClassification(150)).toBe(null);
  });
});
