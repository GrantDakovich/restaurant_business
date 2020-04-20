import React from "react";
import PopUp from "./BasicOrderPopup.js";

import styles from "./PopupViewer.module.css";

class PopupViewer extends React.Component {
  state = {
    seen: false
  };
  
  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
  };
  render() {
    return (
     <div>
      <div className={styles.PopupViewer} onClick={this.togglePop}>
        <button>New User?</button>
      </div>
      {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
     </div>
    );
  }
}



export default PopupViewer;







