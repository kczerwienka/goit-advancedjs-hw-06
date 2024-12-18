/*
  Ви маєте форму реєстрації користувачів. 
  Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю. 
  Однак вам не завжди потрібно заповнити всі поля. Наприклад, користувач може хотіти оновити лише свій email та пароль, 
  залишивши ім'я та прізвище без змін.

  Виправте тип у аргументі функції так, щоб не було помилок типу.
*/

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

// Simulating a "database" with a user object
let currentUser: User = {
  name: 'John',
  surname: 'Doe',
  email: 'john.doe@example.com',
  password: 'password123',
};

// Use Partial<User> to make all fields optional
function createOrUpdateUser(initialValues: Partial<User>) {
  // User updating logic
  if (initialValues.name) {
    currentUser.name = initialValues.name;
  }
  
  if (initialValues.surname) {
    currentUser.surname = initialValues.surname;
  }
  
  if (initialValues.email) {
    currentUser.email = initialValues.email;
  }
  
  if (initialValues.password) {
    currentUser.password = initialValues.password;
  }

  // Output the updated user for demonstration
  console.log('Updated user:', currentUser);
}

createOrUpdateUser({ email: 'user@mail.com', password: 'password123' });

export {};