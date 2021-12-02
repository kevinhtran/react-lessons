import React from "react";

function TabGroup(props) {
  const buttons = [];

  for (let i = 0; i < props.children.length; i++) {
    if (i === props.children.length - 1) {
      buttons.push(
        <button className="border-2 border-blue-900">button</button>
      );
    } else {
      buttons.push(
        <button className="border-2 border-blue-900 mr-2">button</button>
      );
    }
  }

  return (
    <>
      <div className="max-w-screen-md mx-auto">{buttons}</div>
    </>
  );
}

export default TabGroup;
