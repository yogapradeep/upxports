import React from "react";

export default class page extends React.Component {
  render() {
    const {entry, getAsset} = this.props;

    return (

     <div>
    
    ${(entry.getIn(["data", "products"]) || []).map((pro, i) => <div>
    <p>{pro.get("title")}</p>
    <img src={getAsset(pro.get("image1"))} alt=""  style={{width: "240px"}}/>
    
  </div>)}

    </div>
   )

  }
}

