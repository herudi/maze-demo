
export const pages = [
  { 
    path: '/blog',
    page: './blog/index.js'
  },
  { 
    path: '/blog/:title',
    page: './blog/[title].js'
  },
  { 
    path: '/',
    page: './index.js'
  },
  { 
    path: '/sign',
    page: './sign.js'
  },
];
