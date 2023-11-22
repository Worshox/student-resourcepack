import Dexie from 'dexie';

export const db = new Dexie('nnn');
db.version(1).stores({
	savedPosts: '++id, slug'
});
