type User = {
  name: string;
  phone: string;
  email: string;
  password: string;
};

const users: User[] = [{ name: 'a', phone: '010-1234-5678', email: 'a@a.a', password: 'a' }];

export const auth = {
  login: (email: string, password: string): User | undefined => {
    const found = users.find((u) => u.email === email && u.password === password);
    return found;
  },

  register: (user: User): Promise<boolean> => {
    return new Promise((resolve) => {
      const exists = users.some((u) => u.email === user.email);
      if (exists) return resolve(false);
      users.push(user);
      setTimeout(() => resolve(true), 500);
    });
  },
};
