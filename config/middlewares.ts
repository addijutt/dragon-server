export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:5173',
        'https://mixmorph-dragon-demo.vercel.app',
        'https://mixmorphdragons.co.uk',
        'https://www.mixmorphdragons.co.uk',
        'https://dragon-server-production-e94d.up.railway.app'
      ],
      headers: '*',  // allow all headers
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
      keepHeadersOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
