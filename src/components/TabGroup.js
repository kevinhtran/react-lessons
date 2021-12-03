import React, { useState } from "react";

function TabGroup(props) {
  const buttons = [];
  const [currentTeamName, setCurrentTeamName] = useState(
    props.teamComps[0].teamName
  );

  const handleClick = (teamName) => {
    setCurrentTeamName(teamName);
  };

  for (let i = 0; i < props.teamComps.length; i++) {
    const lastTeamComp = i === props.teamComps.length - 1 ? "" : "";

    buttons.push(
      <button className='border-2 border-blue-900 mr-2'>button</button>
    );
  }

  return (
    <>
      <div className='max-w-screen-md mx-auto'>{buttons}</div>
    </>
  );
}

export default TabGroup;
