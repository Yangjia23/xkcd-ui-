!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("vue")):"function"==typeof define&&define.amd?define(["vue"],n):(e="undefined"!=typeof globalThis?globalThis:e||self).gtui=n(e.Vue)}(this,(function(e){"use strict";var n=e.defineComponent({name:"GtButton"});n.render=function(n,t,o,u,i,l){return e.openBlock(),e.createBlock("button",null,"按钮")},n.install=e=>{e.component(n.name,n)};const t=[n];return{install:e=>{t.forEach((n=>{n.install?e.use(n):n.name&&e.component(n.name,n)}))}}}));