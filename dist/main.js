!function(e){var t={};function a(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";a.r(t);var n=new class{createHeading(){const e=document.createElement("h1");return e.textContent="Odin's",e.classList.add("heading"),e}createBody(){const e=document.createElement("div");return e.classList.add("container-body"),e.innerHTML="<p>Food and drinks fit <span>for a God<span></p>",e}appendElementsForDisplay(){const e=document.createElement("div");e.classList.add("home"),e.classList.add("container");const t=document.createElement("div");t.classList.add("container-color");const a=this.createHeading(),n=this.createBody();return t.appendChild(a),t.appendChild(n),e.appendChild(t),e}};var i=new class{createHeading(){const e=document.createElement("h1");return e.textContent="Here at Odin's",e}createBody(){const e=document.createElement("div"),t=document.createElement("div"),a=document.createElement("div"),n=document.createElement("div"),i=document.createElement("div");return e.classList.add("container-body"),t.appendChild(this.createParagraph("We offer a heavenly dining experience.")),a.appendChild(this.createParagraph("Founded in 1902, Odin's has been a staple of the New York dining experience.")),a.appendChild(document.createElement("br")),a.appendChild(document.createElement("br")),a.appendChild(this.createParagraph("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium optio officia quo aliquid expedita consequuntur numquam ab! Laboriosam placeat nobis accusamus odio! Unde molestias repudiandae deserunt quod accusantium eaque veniam consequatur eum quo commodi quos, doloremque obcaecati ratione fugit nam ipsa sunt dolorum enim quis. Libero quisquam nam reiciendis itaque.")),a.appendChild(document.createElement("br")),a.appendChild(document.createElement("br")),a.appendChild(this.createParagraph("Unde molestias repudiandae deserunt quod accusantium eaque veniam consequatur eum quo commodi quos, doloremque obcaecati ratione fugit nam ipsa sunt dolorum enim quis. Libero quisquam nam reiciendis itaque.")),n.appendChild(this.createImage("./images/odin_streetview.jpeg")),t.classList.add("about-tag-line"),a.classList.add("about-info"),n.classList.add("about-img"),i.classList.add("about-body"),i.appendChild(a),i.appendChild(n),e.appendChild(t),e.appendChild(i),e}createParagraph(e){return document.createElement("p").appendChild(document.createTextNode(e))}createImage(e){const t=document.createElement("div"),a=document.createElement("img");return a.src=e,t.classList.add("about-body-img"),t.appendChild(a),t}appendElementsForDisplay(){const e=document.createElement("div"),t=document.createElement("div");e.classList.add("about"),t.classList.add("container");const a=this.createHeading(),n=this.createBody();return t.appendChild(a),t.appendChild(n),e.appendChild(t),e}};var d=new class{createHeading(){const e=document.createElement("h1");return e.textContent="Odin's Favorites",e}createBody(){const e=document.createElement("div"),t=document.createElement("div"),a=document.createElement("div"),n=document.createElement("div"),i=document.createElement("div"),d=document.createElement("div"),r=document.createElement("div"),s=document.createElement("div");return e.classList.add("container-body"),t.classList.add("menu-tag-line"),a.classList.add("apps"),n.classList.add("veg"),i.classList.add("main-course"),d.classList.add("drinks"),r.classList.add("desserts"),s.classList.add("menuDiv"),t.appendChild(this.createParagraph("Fresh food and great drinks.")),a.appendChild(this.createMenuHeading("Appetizers")),a.appendChild(this.createMenuItem("Lorem ipsum dolor sit amet","Nam cursus feugiat ullamcorper. Vestibulum fringilla, tortor","$11.99")),a.appendChild(this.createMenuItem("Fusce in imperdiet massa","Mauris sagittis facilisis ante ac rhoncus.","$14.99")),a.appendChild(this.createMenuItem("Maecenas placerat","Vestibulum fringilla, tortor","$10.99")),n.appendChild(this.createMenuHeading("Vegetarian")),n.appendChild(this.createMenuItem("Lorem ipsum dolor sit amet","Nam cursus feugiat ullamcorper. Vestibulum fringilla, tortor","$11.99")),n.appendChild(this.createMenuItem("Fusce in imperdiet massa","Mauris sagittis facilisis ante ac rhoncus.","$14.99")),n.appendChild(this.createMenuItem("Maecenas placerat","Vestibulum fringilla, tortor","$10.99")),i.appendChild(this.createMenuHeading("Entrees")),i.appendChild(this.createMenuItem("Lorem ipsum dolor sit amet","Nam cursus feugiat ullamcorper. Vestibulum fringilla, tortor","$21.99")),i.appendChild(this.createMenuItem("Fusce in imperdiet massa","Mauris sagittis facilisis ante ac rhoncus. Vestibulum fringilla, tortor","$24.99")),d.appendChild(this.createMenuHeading("Drinks")),d.appendChild(this.createMenuItem("Lorem ipsum","Nam cursus feugiat ullamcorper. Vestibulum fringilla, tortor","$7.99")),d.appendChild(this.createMenuItem("Fusce in imperdiet massa","Mauris sagittis facilisis ante ac rhoncus.","$14.99")),d.appendChild(this.createMenuItem("Maecenas placerat","Vestibulum fringilla, tortor","$12.99")),r.appendChild(this.createMenuHeading("Desserts")),r.appendChild(this.createMenuItem("Lorem ipsum dolor sit amet","Nam cursus feugiat ullamcorper. Vestibulum fringilla, tortor","$11.99")),r.appendChild(this.createMenuItem("Fusce in imperdiet massa","Mauris sagittis facilisis ante ac rhoncus.","$14.99")),r.appendChild(this.createMenuItem("Maecenas placerat","Vestibulum fringilla, tortor","$10.99")),s.appendChild(a),s.appendChild(n),s.appendChild(i),s.appendChild(d),s.appendChild(r),e.appendChild(t),e.appendChild(s),e}createParagraph(e){return document.createElement("p").appendChild(document.createTextNode(e))}createMenuItem(e,t,a){const n=document.createElement("div"),i=document.createElement("div"),d=this.setMenuItem(e,"menu-item-name"),r=this.setMenuItem(t,"menu-item-desc"),s=this.setMenuItem(a,"menu-item-price");return n.classList.add("menu-item"),i.classList.add("name-price"),i.appendChild(d),i.appendChild(s),n.appendChild(i),n.appendChild(r),n}setMenuItem(e,t){const a=document.createElement("div"),n=this.createParagraph(e);return a.classList.add(t),a.appendChild(n),a}createMenuHeading(e){const t=document.createElement("div"),a=document.createElement("h3");return a.textContent=e,t.appendChild(a),t.classList.add("menu-heading"),t}appendElementsForDisplay(){const e=document.createElement("div"),t=document.createElement("div");e.classList.add("menu"),t.classList.add("container");const a=this.createHeading(),n=this.createBody();return t.appendChild(a),t.appendChild(n),e.appendChild(t),e}};var r=new class{removeContents(e){e.innerHTML=""}updateActiveClass(e,t){e.classList.add("active"),t.forEach(e=>{e.classList.remove("active")})}appendToContainer(e,t){e.appendChild(t)}};const s=document.querySelector("#content"),c=document.querySelector(".tab-home"),o=document.querySelector(".tab-about"),u=document.querySelector(".tab-menu"),l=n.appendElementsForDisplay(),p=i.appendElementsForDisplay(),m=d.appendElementsForDisplay();r.appendToContainer(s,l),c.addEventListener("click",()=>{r.removeContents(s),r.appendToContainer(s,l),r.updateActiveClass(c,[o,u])}),o.addEventListener("click",()=>{r.removeContents(s),r.appendToContainer(s,p),r.updateActiveClass(o,[c,u])}),u.addEventListener("click",()=>{r.removeContents(s),r.appendToContainer(s,m),r.updateActiveClass(u,[o,c])})}]);