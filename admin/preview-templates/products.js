import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

// Preview component for a Page
const Page = createClass({
  render() {
    const entry = this.props.entry;
    const getAsset = this.props.entry;
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
      </div>
    </div>
  </section>
  ${entry.getIn(["data", "products"], []).map(pro =>   html`
    <div id="${pro.get("title")}" class="modal">
      <div class="modal-background has-fadein-animation"></div>
      <div class="modal-card has-fadein-animation">
        <header class="modal-card-head">
          <p class="modal-card-title">${pro.get("title")}</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="content">
            <figure class="image is-4by3 is-hidden-desktop has-no-margin">
              <img  src="${getAsset(pro.get("image1"))}" alt="${pro.get("title")}"  >
            </figure>
            <figure class="image is-16by9 is-hidden-touch has-no-margin">
              <img  src="${getAsset(pro.get("image2"))}" alt="${pro.get("title")}"  >
            </figure>
            <p>
            ${pro.get("text")}
            </p>
            <h2 class="has-margin-bottom-2">${pro.get("category")}</h2>
          
               
           <blockquote>
           ${pro.get("flagship")}
            </blockquote>   
           
        </section>
      </div>
    </div>
   
  `)} 
   


  `;
  }
});
export default Page;

