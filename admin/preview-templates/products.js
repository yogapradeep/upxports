import React from "react";

export default class page extends React.Component {
  render() {
    const {entry, getAsset} = this.props;

    return <p>{entry.getIn(["data", "layout"])}</p>
   

  }
}

