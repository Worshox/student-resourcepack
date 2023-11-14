export async function load(event) {
	const pb = event.locals.pb;

	const rawPosts = await pb.collection('posts').getList(1, 3, {
		sort: '-created'
	});

	let posts = [];

	rawPosts.items.forEach((rawPost) => {
		posts.push({
			href: `/wpisy/${rawPost.slug}`,
			src: `https://student-resourcepack.pockethost.io/api/files/posts/${rawPost.id}/${rawPost.img}`,
			alt: rawPost.img_alt
		});
	});

	return { posts };
}
