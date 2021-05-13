import React from "react";
import DirectoryMenu from "../../components/directory-menu/directory-menu.component";
import { HomePageContainer } from "./homepage.styles";
import "./homepage.styles.scss";

const homepage = (props) => {
  console.log(props);
  return (
    <HomePageContainer>
      <DirectoryMenu history={props.history} />
    </HomePageContainer>
  );
};

export default homepage;
