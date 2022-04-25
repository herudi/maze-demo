
import $0 from "../../pages/blog/index.tsx";
import $1 from "../../pages/blog/[title].tsx";
import $2 from "../../pages/index.tsx";
import $3 from "../../pages/sign.tsx";
export const pages: any = [
  { 
    path: '/blog',
    page: $0,
    methods: ($0 as any).methods,
    hydrate: ($0 as any).hydrate
  },
  { 
    path: '/blog/:title',
    page: $1,
    methods: ($1 as any).methods,
    hydrate: ($1 as any).hydrate
  },
  { 
    path: '/',
    page: $2,
    methods: ($2 as any).methods,
    hydrate: ($2 as any).hydrate
  },
  { 
    path: '/sign',
    page: $3,
    methods: ($3 as any).methods,
    hydrate: ($3 as any).hydrate
  },
];
