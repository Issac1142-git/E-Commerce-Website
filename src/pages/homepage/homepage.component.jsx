import React from "react";
import DirectoryMenu from "../../components/directory-menu/directory-menu.component";

import "./homepage.styles.scss";

const homepage = (props) => {
  console.log(props);
  return (
    <div className="homepage">
      <DirectoryMenu history={props.history} />
    </div>
  );
};

export default homepage;
