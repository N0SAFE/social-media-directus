"use strict";var f=Object.defineProperty;var s=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var m=Object.prototype.hasOwnProperty;var d=(t,e)=>{for(var r in e)f(t,r,{get:e[r],enumerable:!0})},y=(t,e,r,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of p(e))!m.call(t,n)&&n!==r&&f(t,n,{get:()=>e[n],enumerable:!(i=s(e,n))||i.enumerable});return t};var a=t=>y(f({},"__esModule",{value:!0}),t);var g={};d(g,{default:()=>u});module.exports=a(g);var o=require("tsup");function u(t){return(0,o.defineConfig)(e=>({entry:["./src/**/*.{ts,tsx}"],format:["esm"],minify:!0,sourcemap:!0,clean:!0,outDir:"dist",...t?t(e):e}))}
//# sourceMappingURL=index.js.map