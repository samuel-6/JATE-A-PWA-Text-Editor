import { openDB } from 'idb';

const initdb = async () =>

  openDB('jate', 1, {

    upgrade(db) {

      if (db.objectStoreNames.contains('jate')) {

        console.log('jate database already exists');
        return;

      }

      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');

    },

  });

// This method is used to update the database with new content.
export const putDb = async (content) => {

  console.log('Updating the database with new content!');

  // Opens the database.
  const db = await openDB('jate', 1);

  // Creates a transaction.
  const tx = db.transaction('jate', 'readwrite');

  // Gets the object store.
  const store = tx.objectStore('jate');

  // Adds the content to the database.
  const request = store.put({id: 1, value: content});

  // Waits for the transaction to complete.
  const result = await request;
  console.log('Database updated successfully!', result);

};

// This method is used to get the content from the database.
export const getDb = async () => {

  console.log('Getting the database content!');

  // Opens the database.
  const db = await openDB('jate', 1);

  // Creates a transaction.
  const tx = db.transaction('jate', 'readonly');

  // Gets the object store.
  const store = tx.objectStore('jate');

  // Gets the content from the database.
  const request = store.get(1);

  // Waits for the transaction to complete.
  const result = await request;
  console.log('Database content retrieved successfully!', result);

  return result.value;

}

initdb();