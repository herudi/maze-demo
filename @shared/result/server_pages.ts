
import $0 from "../../pages/blog/index.tsx";
import $1 from "../../pages/blog/[title].tsx";
import $2 from "../../pages/index.tsx";
import $3 from "../../pages/sign.tsx";
export const pages: any = [
  { 
    path: '/blog',
    page: $0,
    methods: ($0 as any).methods
  },
  { 
    path: '/blog/:title',
    page: $1,
    methods: ($1 as any).methods
  },
  { 
    path: '/',
    page: $2,
    methods: ($2 as any).methods
  },
  { 
    path: '/sign',
    page: $3,
    methods: ($3 as any).methods
  },
];
export const tt: string = '1647237103850';
