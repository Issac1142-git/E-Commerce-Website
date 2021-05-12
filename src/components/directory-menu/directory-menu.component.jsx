import React from "react";
import { connect } from "react-redux";
import "./directory-menu.styles.scss";
import MenuItem from "../menu-item/menu-item.components";
import { createStructuredSelector } from "reselect";
import { sectionSelector } from "../../redux/store/directory/directory.selector";

const directoryMenu = ({ sections, history }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, title, imageUrl, size, linkUrl }) => (
        <MenuItem
          key={id}
          title={title}
          imgURL={imageUrl}
          size={size}
          history={history}
          linkUrl={linkUrl}
        />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: sectionSelector,
});
export default connect(mapStateToProps)(directoryMenu);
