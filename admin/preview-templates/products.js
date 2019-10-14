import htm from "https://unpkg.com/htm?module";
const html = htm.bind(h);

document.addEventListener("DOMContentLoaded",()=>{const e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);e.length>0&&e.forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.target,n=document.getElementById(t);e.classList.toggle("is-active"),n.classList.toggle("is-active")})});var t=document.documentElement,n=document.querySelectorAll(".modal"),o=document.querySelectorAll(".modal-button"),c=document.querySelectorAll(".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot");function d(){t.classList.remove("is-clipped"),n.forEach(function(e){e.classList.remove("is-active")})}o.length>0&&o.forEach(function(e){e.addEventListener("click",function(){!function(e){var n=document.getElementById(e);t.classList.add("is-clipped"),n.classList.add("is-active")}(e.dataset.target)})}),c.length>0&&c.forEach(function(e){e.addEventListener("click",function(){d()})}),document.addEventListener("keydown",function(e){27===(e||window.event).keyCode&&d()})});


// Preview component for a Post
const page = createClass({
  render() {
    const entry = this.props.entry;
    const getAsset=this.props.getAsset;

    

    return html`

    
  
 
    <section id="prod" class="section is-medium has-css_bg-color">

   
  
   <div class="container">
    <header class="has-text-centered">
      <h3 class="title is-3 is-size-4-mobile has-margin-bottom-2">
        We offer a <span class="has-text-purple">wide range</span> of
        commodities
      </h3>
      <h4 class="subtitle is-4 is-size-5-mobile has-text-grey-light has-desktop-margin-bottom-0 has-margin-bottom-3">
        From manufacturers valuing quality
      </h4>
    </header>
      </div>
    </section>
  
      <div class="flex-block has-desktop-margin-bottom-1 ">
    ${entry.getIn(["data", "products"], []).map(pro =>   html`
      <div class="flex-item" >
        
          <a >
          <img src=${getAsset(pro.get("bgimage"))} alt=""/>
            
            
                <p class=" title is-4  has-text-centered">
                ${pro.get("title")}
                </p>
            
          </a>
        </div>
      
      `
      )
    } 
   </div>
     
  
  
  
  

 
  


    `;
    
}
});


export default page;
