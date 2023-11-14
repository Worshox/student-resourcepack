export async function load(event) {
	const pb = event.locals.pb;

	const rawPost = await pb.collection('posts').getFirstListItem(`slug="${event.params.slug}"`, {
		expand: 'relField1,relField2.subRelField'
	});

	const datetime = new Date(rawPost.created);

	const post = {
		src: `https://student-resourcepack.pockethost.io/api/files/posts/${rawPost.id}/${rawPost.img}`,
		alt: rawPost.img_alt,
		datetime: rawPost.created,
		published: datetime.toLocaleDateString('pl-PL'),
		title: rawPost.title,
		author: rawPost.author,
		content: rawPost.content
	};

	return { post };
}
