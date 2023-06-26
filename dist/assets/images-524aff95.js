import{d as k,e as d,x as H,y as U,z as F,A as I,n as W,B as Z,r as v,a as G,f as B,h as T,g as V,s as _,u as E,c as q,t as J,C,D as w}from"./index-76098973.js";const Q=["sx"],X=s=>{var e,t;const r={systemProps:{},otherProps:{}},o=(e=s==null||(t=s.theme)==null?void 0:t.unstable_sxConfig)!=null?e:H;return Object.keys(s).forEach(a=>{o[a]?r.systemProps[a]=s[a]:r.otherProps[a]=s[a]}),r};function Y(s){const{sx:e}=s,t=k(s,Q),{systemProps:r,otherProps:o}=X(t);let a;return Array.isArray(e)?a=[r,...e]:typeof e=="function"?a=(...n)=>{const i=e(...n);return U(i)?d({},r,i):r}:a=d({},r,e),d({},o,{sx:a})}const ss=F(),es=ss,ts=["className","component","disableGutters","fixed","maxWidth","classes"],rs=I(),as=es("div",{name:"MuiContainer",slot:"Root",overridesResolver:(s,e)=>{const{ownerState:t}=s;return[e.root,e[`maxWidth${W(String(t.maxWidth))}`],t.fixed&&e.fixed,t.disableGutters&&e.disableGutters]}}),os=s=>Z({props:s,name:"MuiContainer",defaultTheme:rs}),ns=(s,e)=>{const t=l=>V(e,l),{classes:r,fixed:o,disableGutters:a,maxWidth:n}=s,i={root:["root",n&&`maxWidth${W(String(n))}`,o&&"fixed",a&&"disableGutters"]};return T(i,t,r)};function is(s={}){const{createStyledComponent:e=as,useThemeProps:t=os,componentName:r="MuiContainer"}=s,o=e(({theme:n,ownerState:i})=>d({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!i.disableGutters&&{paddingLeft:n.spacing(2),paddingRight:n.spacing(2),[n.breakpoints.up("sm")]:{paddingLeft:n.spacing(3),paddingRight:n.spacing(3)}}),({theme:n,ownerState:i})=>i.fixed&&Object.keys(n.breakpoints.values).reduce((l,u)=>{const c=u,p=n.breakpoints.values[c];return p!==0&&(l[n.breakpoints.up(c)]={maxWidth:`${p}${n.breakpoints.unit}`}),l},{}),({theme:n,ownerState:i})=>d({},i.maxWidth==="xs"&&{[n.breakpoints.up("xs")]:{maxWidth:Math.max(n.breakpoints.values.xs,444)}},i.maxWidth&&i.maxWidth!=="xs"&&{[n.breakpoints.up(i.maxWidth)]:{maxWidth:`${n.breakpoints.values[i.maxWidth]}${n.breakpoints.unit}`}}));return v.forwardRef(function(i,l){const u=t(i),{className:c,component:p="div",disableGutters:g=!1,fixed:f=!1,maxWidth:h="lg"}=u,j=k(u,ts),P=d({},u,{component:p,disableGutters:g,fixed:f,maxWidth:h}),x=ns(P,r);return G(o,d({as:p,ownerState:P,className:B(x.root,c),ref:l},j))})}const cs=is({createStyledComponent:_("div",{name:"MuiContainer",slot:"Root",overridesResolver:(s,e)=>{const{ownerState:t}=s;return[e.root,e[`maxWidth${W(String(t.maxWidth))}`],t.fixed&&e.fixed,t.disableGutters&&e.disableGutters]}}),useThemeProps:s=>E({props:s,name:"MuiContainer"})}),Gs=cs,us=v.createContext(),z=us;function ls(s){return V("MuiGrid",s)}const ps=[0,1,2,3,4,5,6,7,8,9,10],ds=["column-reverse","column","row-reverse","row"],gs=["nowrap","wrap-reverse","wrap"],$=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],b=q("MuiGrid",["root","container","item","zeroMinWidth",...ps.map(s=>`spacing-xs-${s}`),...ds.map(s=>`direction-xs-${s}`),...gs.map(s=>`wrap-xs-${s}`),...$.map(s=>`grid-xs-${s}`),...$.map(s=>`grid-sm-${s}`),...$.map(s=>`grid-md-${s}`),...$.map(s=>`grid-lg-${s}`),...$.map(s=>`grid-xl-${s}`)]),fs=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function m(s){const e=parseFloat(s);return`${e}${String(s).replace(String(e),"")||"px"}`}function ms({theme:s,ownerState:e}){let t;return s.breakpoints.keys.reduce((r,o)=>{let a={};if(e[o]&&(t=e[o]),!t)return r;if(t===!0)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(t==="auto")a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const n=C({values:e.columns,breakpoints:s.breakpoints.values}),i=typeof n=="object"?n[o]:n;if(i==null)return r;const l=`${Math.round(t/i*1e8)/1e6}%`;let u={};if(e.container&&e.item&&e.columnSpacing!==0){const c=s.spacing(e.columnSpacing);if(c!=="0px"){const p=`calc(${l} + ${m(c)})`;u={flexBasis:p,maxWidth:p}}}a=d({flexBasis:l,flexGrow:0,maxWidth:l},u)}return s.breakpoints.values[o]===0?Object.assign(r,a):r[s.breakpoints.up(o)]=a,r},{})}function hs({theme:s,ownerState:e}){const t=C({values:e.direction,breakpoints:s.breakpoints.values});return w({theme:s},t,r=>{const o={flexDirection:r};return r.indexOf("column")===0&&(o[`& > .${b.item}`]={maxWidth:"none"}),o})}function O({breakpoints:s,values:e}){let t="";Object.keys(e).forEach(o=>{t===""&&e[o]!==0&&(t=o)});const r=Object.keys(s).sort((o,a)=>s[o]-s[a]);return r.slice(0,r.indexOf(t))}function xs({theme:s,ownerState:e}){const{container:t,rowSpacing:r}=e;let o={};if(t&&r!==0){const a=C({values:r,breakpoints:s.breakpoints.values});let n;typeof a=="object"&&(n=O({breakpoints:s.breakpoints.values,values:a})),o=w({theme:s},a,(i,l)=>{var u;const c=s.spacing(i);return c!=="0px"?{marginTop:`-${m(c)}`,[`& > .${b.item}`]:{paddingTop:m(c)}}:(u=n)!=null&&u.includes(l)?{}:{marginTop:0,[`& > .${b.item}`]:{paddingTop:0}}})}return o}function $s({theme:s,ownerState:e}){const{container:t,columnSpacing:r}=e;let o={};if(t&&r!==0){const a=C({values:r,breakpoints:s.breakpoints.values});let n;typeof a=="object"&&(n=O({breakpoints:s.breakpoints.values,values:a})),o=w({theme:s},a,(i,l)=>{var u;const c=s.spacing(i);return c!=="0px"?{width:`calc(100% + ${m(c)})`,marginLeft:`-${m(c)}`,[`& > .${b.item}`]:{paddingLeft:m(c)}}:(u=n)!=null&&u.includes(l)?{}:{width:"100%",marginLeft:0,[`& > .${b.item}`]:{paddingLeft:0}}})}return o}function bs(s,e,t={}){if(!s||s<=0)return[];if(typeof s=="string"&&!Number.isNaN(Number(s))||typeof s=="number")return[t[`spacing-xs-${String(s)}`]];const r=[];return e.forEach(o=>{const a=s[o];Number(a)>0&&r.push(t[`spacing-${o}-${String(a)}`])}),r}const Ps=_("div",{name:"MuiGrid",slot:"Root",overridesResolver:(s,e)=>{const{ownerState:t}=s,{container:r,direction:o,item:a,spacing:n,wrap:i,zeroMinWidth:l,breakpoints:u}=t;let c=[];r&&(c=bs(n,u,e));const p=[];return u.forEach(g=>{const f=t[g];f&&p.push(e[`grid-${g}-${String(f)}`])}),[e.root,r&&e.container,a&&e.item,l&&e.zeroMinWidth,...c,o!=="row"&&e[`direction-xs-${String(o)}`],i!=="wrap"&&e[`wrap-xs-${String(i)}`],...p]}})(({ownerState:s})=>d({boxSizing:"border-box"},s.container&&{display:"flex",flexWrap:"wrap",width:"100%"},s.item&&{margin:0},s.zeroMinWidth&&{minWidth:0},s.wrap!=="wrap"&&{flexWrap:s.wrap}),hs,xs,$s,ms);function Ss(s,e){if(!s||s<=0)return[];if(typeof s=="string"&&!Number.isNaN(Number(s))||typeof s=="number")return[`spacing-xs-${String(s)}`];const t=[];return e.forEach(r=>{const o=s[r];if(Number(o)>0){const a=`spacing-${r}-${String(o)}`;t.push(a)}}),t}const vs=s=>{const{classes:e,container:t,direction:r,item:o,spacing:a,wrap:n,zeroMinWidth:i,breakpoints:l}=s;let u=[];t&&(u=Ss(a,l));const c=[];l.forEach(g=>{const f=s[g];f&&c.push(`grid-${g}-${String(f)}`)});const p={root:["root",t&&"container",o&&"item",i&&"zeroMinWidth",...u,r!=="row"&&`direction-xs-${String(r)}`,n!=="wrap"&&`wrap-xs-${String(n)}`,...c]};return T(p,ls,e)},Cs=v.forwardRef(function(e,t){const r=E({props:e,name:"MuiGrid"}),{breakpoints:o}=J(),a=Y(r),{className:n,columns:i,columnSpacing:l,component:u="div",container:c=!1,direction:p="row",item:g=!1,rowSpacing:f,spacing:h=0,wrap:j="wrap",zeroMinWidth:P=!1}=a,x=k(a,fs),D=f||h,A=l||h,L=v.useContext(z),y=c?i||12:L,R={},N=d({},x);o.keys.forEach(S=>{x[S]!=null&&(R[S]=x[S],delete N[S])});const M=d({},a,{columns:y,container:c,direction:p,item:g,rowSpacing:D,columnSpacing:A,wrap:j,zeroMinWidth:P,spacing:h},R,{breakpoints:o.keys}),K=vs(M);return G(z.Provider,{value:y,children:G(Ps,d({ownerState:M,className:B(K.root,n),as:u,ref:t},N))})}),ks=Cs,Ws={house:[{src:"/src/assets/images/house.jpg",alt:"Photo of the House"},{src:"/src/assets/images/house1.jpg",alt:"Photo of the House"},{src:"/src/assets/images/house2.jpg",alt:"Photo of the House"},{src:"/src/assets/images/house3.jpg",alt:"Photo of the House"},{src:"/src/assets/images/house4.jpg",alt:"Photo of the House"},{src:"/src/assets/images/houseRestaurant.jpg",alt:"Photo of the House's Restaurant"}],restaurant:[{src:"/src/assets/images/restaurant1.jpg",alt:"Photo of the Restaurant"},{src:"/src/assets/images/restaurant2.jpg",alt:"Photo of the Restaurant"},{src:"/src/assets/images/restaurant3.jpg",alt:"Photo of the Restaurant"},{src:"/src/assets/images/restaurant4.jpg",alt:"Photo of the Restaurant"},{src:"/src/assets/images/restaurant5.jpg",alt:"Photo of the Restaurant"},{src:"/src/assets/images/restaurant6.jpg",alt:"Photo of the Restaurant"},{src:"/src/assets/images/restaurant7.jpg",alt:"Photo of the Restaurant"}],garden:[{src:"/src/assets/images/garden1.jpg",alt:"Photo of the Garden"},{src:"/src/assets/images/garden2.jpg",alt:"Photo of the Garden"},{src:"/src/assets/images/garden3.jpg",alt:"Photo of the Garden"},{src:"/src/assets/images/garden4.jpg",alt:"Photo of the Garden"},{src:"/src/assets/images/garden5.jpg",alt:"Photo of the Garden"},{src:"/src/assets/images/garden6.jpg",alt:"Photo of the Garden"},{src:"/src/assets/images/garden7.jpg",alt:"Photo of the Garden"},{src:"/src/assets/images/garden8.jpg",alt:"Photo of the Garden"},{src:"/src/assets/images/garden9.jpg",alt:"Photo of the Garden"},{src:"/src/assets/images/garden10.jpg",alt:"Photo of the Garden"}],rooms:{standardRoom:{src:"/src/assets/images/restaurant1.jpg",alt:"Photo of the Standard Room"},deluxe:{src:"/src/assets/images/restaurant2.jpg",alt:"Photo of the Deluxe Room"},deluxeSuperior:{src:"/src/assets/images/restaurant3.jpg",alt:"Photo of the Deluxe Superior"},duplex:{src:"/src/assets/images/restaurant4.jpg",alt:"Photo of the Duplex Room"}},otherPictures:{spruceBranch:{src:"/src/assets/images/9S5A9235-1-scaled.jpg",alt:"Spruce Branch"},languages:{am:{src:"/src/assets/images/flag-of-armenia-logo.png",alt:"Armenian Flag"},ru:{src:"/src/assets/images/flag-of-russia-logo.png",alt:"Russian Flag"},en:{src:"/src/assets/images/flag-of-america-logo.png",alt:"American Flag"}}}};export{Gs as C,ks as G,Ws as d,Y as e};
