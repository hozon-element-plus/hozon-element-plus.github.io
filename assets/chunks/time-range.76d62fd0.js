import{h as r,k as n,r as _,o as s,g as c,c as i,a as d}from"../app.18624a7b.js";const p=r({__name:"basic",setup(u){const e=n("");return(a,l)=>{const t=_("el-time-select");return s(),c(t,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=o=>e.value=o),start:"08:30",step:"00:15",end:"18:30",placeholder:"Select time"},null,8,["modelValue"])}}});var g=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"}));const v=r({__name:"time-formats",setup(u){const e=n("");return(a,l)=>{const t=_("el-time-select");return s(),c(t,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=o=>e.value=o),start:"00:00",step:"00:30",end:"23:59",placeholder:"Select time",format:"hh:mm A"},null,8,["modelValue"])}}});var S=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"}));const f={class:"demo-time-range"},b=r({__name:"time-range",setup(u){const e=n(""),a=n("");return(l,t)=>{const o=_("el-time-select");return s(),i("div",f,[d(o,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=m=>e.value=m),"max-time":a.value,class:"mr-4",placeholder:"Start time",start:"08:30",step:"00:15",end:"18:30"},null,8,["modelValue","max-time"]),d(o,{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=m=>a.value=m),"min-time":e.value,placeholder:"End time",start:"08:30",step:"00:15",end:"18:30"},null,8,["modelValue","min-time"])])}}});var j=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"}));export{g as _,S as a,j as b};
