import htm from "https://unpkg.com/htm?module";
const html = htm.bind(h);


document.addEventListener("DOMContentLoaded",()=>{const e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);e.length>0&&e.forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.target,n=document.getElementById(t);e.classList.toggle("is-active"),n.classList.toggle("is-active")})});var t=document.documentElement,n=document.querySelectorAll(".modal"),o=document.querySelectorAll(".modal-button"),c=document.querySelectorAll(".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot");function d(){t.classList.remove("is-clipped"),n.forEach(function(e){e.classList.remove("is-active")})}o.length>0&&o.forEach(function(e){e.addEventListener("click",function(){!function(e){var n=document.getElementById(e);t.classList.add("is-clipped"),n.classList.add("is-active")}(e.dataset.target)})}),c.length>0&&c.forEach(function(e){e.addEventListener("click",function(){d()})}),document.addEventListener("keydown",function(e){27===(e||window.event).keyCode&&d()}),window.lazyLoadOptions={elements_selector:".lazy"}});

<script async src="assets/js/lazyload.min.js"></script>


// Preview component for a Post
const page = createClass({
  render() {
    const entry = this.props.entry;

    return html`

   
    `;
    
}
});

 
