import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

// Preview component for a Page
const Page = createClass({
  render() {
    const entry = this.props.entry;
    const getAsset = this.props.getAsset;
    return html`
    <section id="products" class="section is-medium has-css_bg-color">
   


  
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

    <div class="flex-block has-desktop-margin-bottom-1 ">
  ${entry.getIn(["data", "products"], []).map(pro =>   html`
    <div class="flex-item" >
      <div
        class="card has-shadow has-something product-bg  has-text-white has-radius has-equal-height " data-bg="linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${getAsset(pro.get("bgimage"))})">
        <a class="modal-button" data-target="${pro.get("title")}">
          <div class="custom-card-content">
            <div class="content">
              <p class=" title is-4 has-text-white has-text-centered">
              ${pro.get("title")}
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
    `
    )
  } 
 </div>
    
   </section> 


  `;
  }
});
export default Page;

