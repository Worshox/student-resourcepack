import PocketBase from 'pocketbase';

export async function handle({ event, resolve }) {
	event.locals.pb = new PocketBase('https://student-resourcepack.pockethost.io');

	return await resolve(event);
}
