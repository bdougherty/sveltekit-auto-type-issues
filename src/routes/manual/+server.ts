// When manually importing the type, everything works correctly.

import type { RequestHandler} from './$types';

export const GET: RequestHandler = async ({ locals }) => {
	return locals.fake;
};
