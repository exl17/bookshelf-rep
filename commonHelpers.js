(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function i(e){const t=document.body,n=document.getElementById("toggle");e==="dark-mode"?(t.classList.add("dark-theme"),n.checked=!0):(t.classList.remove("dark-theme"),n.checked=!1)}document.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem("theme");e&&i(e)});document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("toggle");e.addEventListener("change",()=>{const t=e.checked?"dark-mode":"light-mode";i(t),localStorage.setItem("theme",t)})});document.addEventListener("DOMContentLoaded",()=>{const e=window.location.pathname,t=document.getElementById("home-link"),n=document.getElementById("shopping-list-link");e==="/index.html"?(t.classList.add("button"),n.classList.remove("button")):e==="/shopping-list.html"&&(t.classList.remove("button"),n.classList.add("button"))});document.addEventListener("DOMContentLoaded",()=>{const e=window.location.pathname,t=document.getElementById("backdrop-home-link"),n=document.getElementById("backdrop-shopping-list-link");e==="/index.html"?(t.classList.add("button"),n.classList.remove("button")):e==="/shopping-list.html"&&(t.classList.remove("button"),n.classList.add("button"))});function l(){const e=document.getElementById("burger"),t=document.getElementById("backdrop"),n=document.querySelector(".icon-logo"),c=document.querySelector(".nav-links"),o=document.getElementById("x-close");e.checked?(e.checked=!1,t.style.display="none",c.style.height="0",o.style.display="none",n.style.display="block"):(e.checked=!0,t.style.display="block",c.style.height="100vh",o.style.display="block",n.style.display="none")}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".icon-logo"),t=document.getElementById("x-close");e.addEventListener("click",l),t.addEventListener("click",l)});function r(){window.scrollTo({top:0,behavior:"smooth"})}window.onscroll=function(){u()};function u(){document.documentElement.scrollTop>250?document.getElementById("scrollUpButton").style.display="block":document.getElementById("scrollUpButton").style.display="none"}document.getElementById("scrollUpButton").addEventListener("click",r);
//# sourceMappingURL=commonHelpers.js.map
