// Cloudflare Worker, assign it to /wordcamp2024 route for testing.
addEventListener( 'fetch', event => {
  event.respondWith( handleRequest( event.request ) );
} );

async function handleRequest( request ) {
  const url = new URL( request.url );
  
  if ( url.pathname.startsWith( '/wordcamp2024' ) ) {
      const targetUrl = new URL( 'https://romania.wordcamp.org/2024/' );
      targetUrl.pathname += url.pathname.replace( '/wordcamp2024', '' );
      targetUrl.search = url.search;
      
      const modifiedRequest = new Request( targetUrl, request );
      
      return fetch( modifiedRequest );
  }
  
  return new Response( 'Not Found', { status: 404 } );
}

