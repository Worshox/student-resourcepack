export async function load(event) {
	const pb = event.locals.pb;

	const rawPosts = await pb.collection('posts').getFullList({
		sort: '-created'
	});

	let posts = [];

	for (const rawPostKey in rawPosts) {
		const rawPost = rawPosts[rawPostKey];
		const datetime = new Date(rawPost.created);

		posts.push({
			href: `/wpisy/${rawPost.slug}`,
			src: `https://student-resourcepack.pockethost.io/api/files/posts/${rawPost.id}/${rawPost.img}`,
			alt: rawPost.img_alt,
			datetime: rawPost.created,
			published: datetime.toLocaleDateString('pl-PL'),
			title: rawPost.title,
			author: rawPost.author,
			categories: rawPost.categories
		});
	}

	return { posts };
}
