// Cтворити програму, яка перевіряє, чи можна сформувати заданий рядок S з двох інших рядків: P1 і P2, так, щоб не залишилось зайвих символів.
// Умова в тому, що символи в P1 і P2 мають бути в тому самому порядку, що й у S.

const stringChecker = function (s, p1, p2) {
  const canFormString = (s, p1, p2, sIndex, p1Index, p2Index) => {
    // Базовий випадок: якщо ми перевірили всі символи в s, p1 і p2, то рядок s можна утворити.
    if (sIndex === s.length) {
      return p1Index === p1.length && p2Index === p2.length;
    }

    // Рекурсивно перевіряємо усі можливі комбінації символів з p1 і p2 для утворення s.
    const checkP1 =
      p1Index < p1.length &&
      s[sIndex] === p1[p1Index] &&
      canFormString(s, p1, p2, sIndex + 1, p1Index + 1, p2Index);
    const checkP2 =
      p2Index < p2.length &&
      s[sIndex] === p2[p2Index] &&
      canFormString(s, p1, p2, sIndex + 1, p1Index, p2Index + 1);

    // Якщо хоча б одна з комбінацій дала результат true, то рядок s можна утворити.
    return checkP1 || checkP2;
  };

  return canFormString(s, p1, p2, 0, 0, 0);
};

// Приклад перевірки:
console.log(stringChecker("w27y7", "27", "w7y")); // Виведе true
