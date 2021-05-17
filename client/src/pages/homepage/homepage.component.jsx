import React, { Profiler } from "react";
import DirectoryMenu from "../../components/directory-menu/directory-menu.component";
import { HomePageContainer } from "./homepage.styles";
import "./homepage.styles.scss";

const homepage = (props) => {
  // console.log(props);
  // throw Error;
  return (
    <HomePageContainer>
      <Profiler
        id="Directory"
        onRender={(id, phase, durationTime) => {
          console.log({ id, phase, durationTime });
        }}
      >
        <DirectoryMenu history={props.history} />
      </Profiler>
    </HomePageContainer>
  );
};

export default homepage;
