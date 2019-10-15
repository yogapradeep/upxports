import htm from "https://unpkg.com/htm?module";
const html = htm.bind(h);



// Preview component for a Post
const page = createClass({
  render() {
    const entry = this.props.entry;
    const getAsset=this.props.getAsset;
    var modal = document.querySelector(".modal");
    var trigger = document.querySelector(".trigger");
    var closeButton = document.querySelector(".close-button");
    
    function toggleModal() {
        modal.classList.toggle("show-modal");
    }
    
    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }
    
    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
    
    
    

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
     
  
   <button class="trigger">Click here to trigger the modal!</button>
   <div class="modal">
       <div class="modal-content">
           <span class="close-button">×</span>
           <h1>Hello, I am a modal!</h1>
       </div>
   </div>
  
  

 
  


    `;
    
}
});


export default page;
