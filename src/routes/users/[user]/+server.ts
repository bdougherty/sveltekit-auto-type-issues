// As soon as an argument is added to the function, it breaks the parsing.
export const GET = async ({ params }) => {
	return new Response(`hi ${params.user}`);
}
