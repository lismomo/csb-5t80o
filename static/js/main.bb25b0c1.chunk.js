(this["webpackJsonpcodesandbox-react-routing"]=this["webpackJsonpcodesandbox-react-routing"]||[]).push([[0],{25:function(e,c,t){},26:function(e,c,t){"use strict";t.r(c);var j=t(1),a=t(12),r=t.n(a),s=t(3),n=t(2),b=t(0);const h=()=>Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Home\u30da\u30fc\u30b8\u3067\u3059"})}),i=()=>Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"\u30da\u30fc\u30b8\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093"}),Object(b.jsx)(s.b,{to:"/",children:"TOP\u306b\u623b\u308b"})]}),l=()=>{const e=[...Array(100).keys()],c=Object(n.f)();console.log(c);return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Page1\u30da\u30fc\u30b8\u3067\u3059"}),Object(b.jsx)(s.b,{to:{pathname:"/page1/detailA",state:e},children:"DetailA"}),Object(b.jsx)("br",{}),Object(b.jsx)(s.b,{to:"/page1/detailB",children:"DetailB"}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{onClick:()=>c.push("/page1/detailA"),children:"DetailA"})]})},d=()=>{const{state:e}=Object(n.g)();console.log(Object(n.g)());const c=Object(n.f)();return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Page1DetailA\u30da\u30fc\u30b8\u3067\u3059"}),Object(b.jsx)("button",{onClick:()=>c.goBack(),children:"\u623b\u308b"})]})},x=()=>Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Page1DetailB\u30da\u30fc\u30b8\u3067\u3059"})}),O=[{path:"/",exact:!0,children:Object(b.jsx)(l,{})},{path:"/DetailA",exact:!1,children:Object(b.jsx)(d,{})},{path:"/DetailB",exact:!1,children:Object(b.jsx)(x,{})}],o=()=>Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Page2\u30da\u30fc\u30b8\u3067\u3059"}),Object(b.jsx)(s.b,{to:"/page2/999",children:"URL Parameter"}),Object(b.jsx)("br",{}),Object(b.jsx)(s.b,{to:"/page2/999?name=hogehoge",children:"Query Parameter"})]}),p=()=>{const{id:e}=Object(n.h)(),{search:c}=Object(n.g)(),t=new URLSearchParams(c);return console.log(t),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"UrlParameter\u30da\u30fc\u30b8\u3067\u3059"}),Object(b.jsxs)("p",{children:["\u30d1\u30e9\u30e1\u30fc\u30bf\u306f",e,"\u3067\u3059"]}),Object(b.jsxs)("p",{children:["\u30af\u30a8\u30ea\u30d1\u30e9\u30e1\u30fc\u30bf\u306f",t.get("name"),"\u3067\u3059"]})]})},g=[{path:"/",exact:!0,children:Object(b.jsx)(o,{})},{path:"/:id",exact:!1,children:Object(b.jsx)(p,{})}],u=()=>Object(b.jsxs)(n.c,{children:[Object(b.jsx)(n.a,{exact:!0,path:"/",children:Object(b.jsx)(h,{})}),Object(b.jsx)(n.a,{path:"/page1",render:e=>{let{match:{url:c}}=e;return Object(b.jsx)(n.c,{children:O.map((e=>Object(b.jsx)(n.a,{exact:e.exact,path:"".concat(c).concat(e.path),children:e.children},e.path)))})}}),Object(b.jsx)(n.a,{path:"/page2",render:e=>{let{match:{url:c}}=e;return Object(b.jsx)(n.c,{children:g.map((e=>Object(b.jsx)(n.a,{exact:e.exact,path:"".concat(c).concat(e.path),children:e.children},e.path)))})}}),Object(b.jsx)(n.a,{path:"*",children:Object(b.jsx)(i,{})})]});t(25);function m(){return Object(b.jsxs)(s.a,{children:[Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(s.b,{to:"/",children:"Home"}),Object(b.jsx)("br",{}),Object(b.jsx)(s.b,{to:"/page1",children:"Page1"}),Object(b.jsx)("br",{}),Object(b.jsx)(s.b,{to:"/page2",children:"Page2"}),Object(b.jsx)("br",{})]}),Object(b.jsx)(u,{})]})}const P=document.getElementById("root");r.a.render(Object(b.jsx)(j.StrictMode,{children:Object(b.jsx)(m,{})}),P)}},[[26,1,2]]]);
//# sourceMappingURL=main.bb25b0c1.chunk.js.map