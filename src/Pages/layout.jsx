import React from 'react';
import Contents from "../Components/Contents";
import SideContents from "../Components/SideContents";

function Layout(props) {
  return (
    <div >
      <div style={{display: 'flex', marginBottom : '40px'}}>
        <Contents/>
        <SideContents/>
      </div>
    </div>
  );
}

export default Layout;