import React from "react";
import DirectoryMenu from "../../components/directory-menu/directory-menu.component";

import "./homepage.styles.scss";

const homepage = (props) => {
  return (
    <div className="homepage">
      <DirectoryMenu />
    </div>
  );
};

export default homepage;
