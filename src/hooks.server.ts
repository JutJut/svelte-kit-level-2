import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);

  // const cookies = cookie.parse(request.headers.cookie || '');
  // request.locals.userid = cookies.userid || uuid();

  // // TODO https://github.com/sveltejs/kit/issues/1046
  // if (event?.url?.searchParams?.get('_method')) {
  //   request.method = request.url.searchParams.get('_method').toUpperCase();
  // }

  // if (!cookies.userid) {
  //   // if this is the first time the user has visited this app,
  //   // set a cookie so that we recognise them when they return

  //   response.headers['set-cookie'] = `userid=${event.locals.userid}; Path=/; HttpOnly`;
  // }

  return response;
};
