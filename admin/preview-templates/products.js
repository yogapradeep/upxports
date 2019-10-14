import htm from "https://unpkg.com/htm?module";
const html = htm.bind(h);



// Preview component for a Post
const page = createClass({
  render() {
    const entry = this.props.entry;
    const getAsset=this.props.getAsset;

    return html`

    
  
 
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

  
 
  
  

 
  


    `;
    
}
});


export default page;
