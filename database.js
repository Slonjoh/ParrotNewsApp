import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'ParrotNewsDB',
    location: 'default',
  },
  () => {},
  error => {
    console.log(error);
  }
);

export const createTable = () => {
  db.transaction(txn => {
    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS Users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE,
        password TEXT
      );`,
      [],
      () => {
        console.log('Table created successfully');
      },
      error => {
        console.log('Error creating table', error.message);
      }
    );
  });
};

export const registerUser = (email, password, successCallback, errorCallback) => {
  db.transaction(txn => {
    txn.executeSql(
      'INSERT INTO Users (email, password) VALUES (?, ?)',
      [email, password],
      successCallback,
      errorCallback
    );
  });
};

export const loginUser = (email, password, successCallback, errorCallback) => {
  db.transaction(txn => {
    txn.executeSql(
      'SELECT * FROM Users WHERE email = ? AND password = ?',
      [email, password],
      (_, results) => {
        if (results.rows.length > 0) {
          successCallback(results.rows.item(0));
        } else {
          errorCallback('Invalid email or password');
        }
      },
      error => {
        console.log('Error logging in', error.message);
      }
    );
  });
};
