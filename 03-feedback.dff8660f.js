function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},t.parcelRequired7c6=a);var n=a("8zd4h");const l=document.querySelector("form.feedback-form"),s=document.querySelector('input[type="email"]'),c=document.querySelector('textarea[name="message"]');let i,u;function d(e){try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error",e.message)}}void 0!==d("feedback-form-state")&&(i=d("feedback-form-state").email,u=d("feedback-form-state").message,i&&(s.value=i),u&&(c.value=u)),l.addEventListener("input",e(n)((function(e){const{elements:{email:t="",message:r=""}}=e.currentTarget;console.log(e.currentTarget);const o={email:t.value,message:r.value};!function(e){try{const t=JSON.stringify(e);localStorage.setItem("feedback-form-state",t)}catch(e){console.error("Set state error:",e.message)}}(o),i=o.email,u=o.message}),500)),l.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),console.log(`to jest mail: ${i}, \nto jest wiadomość: ${u}, \nobiekt: ${localStorage.getItem("feedback-form-state")} `),localStorage.clear()}));
//# sourceMappingURL=03-feedback.dff8660f.js.map