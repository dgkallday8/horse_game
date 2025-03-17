var G=Object.defineProperty;var z=o=>{throw TypeError(o)};var N=(o,t,e)=>t in o?G(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var L=(o,t,e)=>N(o,typeof t!="symbol"?t+"":t,e),O=(o,t,e)=>t.has(o)||z("Cannot "+e);var i=(o,t,e)=>(O(o,t,"read from private field"),e?e.call(o):t.get(o)),a=(o,t,e)=>t.has(o)?z("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(o):t.set(o,e),l=(o,t,e,r)=>(O(o,t,"write to private field"),r?r.call(o,e):t.set(o,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const y of n.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&r(y)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();var f,u;class P{constructor(t=5){a(this,f);a(this,u);l(this,f,t),l(this,u,this.makeGrid())}makeGrid(){return Array.from({length:i(this,f)},()=>Array(i(this,f)).fill(0))}isEmptyCell(t,e){return i(this,u)[t][e]===0}setCell(t,e,r){i(this,u)[t][e]=r}getGrid(){return i(this,u)}getSize(){return i(this,f)}resetBoard(){l(this,u,this.makeGrid())}}f=new WeakMap,u=new WeakMap;var w,d,c;const b=class b{constructor(){a(this,w);a(this,d);a(this,c);const t=document.getElementById(b.APP_ID);if(!t)throw new Error("app element not found");l(this,w,t),this.createToolbar()}render(t,e=0,r=[]){i(this,w).textContent="";const s=t.getGrid(),n=document.createElement("div");n.classList.add("board"),s.forEach((y,v)=>{const E=document.createElement("div");E.classList.add("row"),y.forEach((B,S)=>{const h=document.createElement("div");h.dataset.rowIdx=v.toString(),h.dataset.colIdx=S.toString(),h.classList.add("cell"),B!==0&&(h.innerText=B.toString(),h.classList.add("selected")),e&&e===B&&Math.pow(t.getSize(),2)!==e&&h.classList.add("active"),r.some(_=>_.row===v&&_.col===S)&&h.classList.add("possible_move"),r.length===0&&e&&s.flat().some(_=>_===0)&&n.classList.add("fail"),E.appendChild(h)}),n.appendChild(E)}),i(this,w).appendChild(n)}createToolbar(){const t=document.getElementById(b.TOOLBAR_ID);if(t&&(i(this,d)||(l(this,d,document.createElement("button")),i(this,d).textContent="Сбросить",t.appendChild(i(this,d))),!i(this,c))){l(this,c,document.createElement("select"));for(let e=5;e<=10;e++){const r=document.createElement("option");r.value=e.toString(),r.textContent=`${e}x${e}`,i(this,c).appendChild(r)}t.appendChild(i(this,c))}}resetBtn(t){i(this,d)&&(i(this,d).onclick=t)}onBoardSizeChange(t){i(this,c)&&(i(this,c).onchange=e=>{const r=e.target,s=Number(r.value);t(s)})}};w=new WeakMap,d=new WeakMap,c=new WeakMap,L(b,"APP_ID","app"),L(b,"TOOLBAR_ID","toolbar");let C=b;var m,p,g;class A{constructor(t,e){a(this,m,0);a(this,p,null);a(this,g,null);this._board=t,this._layout=e,this.listenBoard(),this._layout.resetBtn(()=>this.startNewGame()),this._layout.onBoardSizeChange(r=>this.resize(r)),this._layout.render(this._board)}listenBoard(){var t;(t=document.getElementById(C.APP_ID))==null||t.addEventListener("click",e=>{const r=e.target;if(!r.classList.contains("cell"))return;const s=r.dataset.rowIdx?Number(r.dataset.rowIdx):null,n=r.dataset.colIdx?Number(r.dataset.colIdx):null;s===null||n===null||this._board.isEmptyCell(s,n)&&this.isValidMove(s,n)&&this.moveHorse(s,n)})}moveHorse(t,e){l(this,m,i(this,m)+1),l(this,p,t),l(this,g,e),this._board.setCell(t,e,i(this,m));const r=this.getValidMoves(t,e);this._layout.render(this._board,i(this,m),r)}isValidMove(t,e){if(i(this,p)!==null&&i(this,g)!==null){const r=Math.abs(t-i(this,p)),s=Math.abs(e-i(this,g));return r===2&&s===1||r===1&&s===2}return!0}getValidMoves(t,e){return[{row:t-2,col:e-1},{row:t-2,col:e+1},{row:t+2,col:e-1},{row:t+2,col:e+1},{row:t-1,col:e-2},{row:t-1,col:e+2},{row:t+1,col:e-2},{row:t+1,col:e+2}].filter(s=>s.row>=0&&s.row<this._board.getSize()&&s.col>=0&&s.col<this._board.getSize()&&this._board.isEmptyCell(s.row,s.col))}startNewGame(){l(this,m,0),l(this,g,null),l(this,p,null),this._board.resetBoard(),this._layout.render(this._board)}resize(t){this._board=new P(t),this.startNewGame()}}m=new WeakMap,p=new WeakMap,g=new WeakMap;const D=new P,I=new C;new A(D,I);
