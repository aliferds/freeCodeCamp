import React from "react";

const PageFrame = ({project, width="100%", height="600px"}) => {
  return(
    <iframe
      src={project.path}
      title={project.title}
      width={width}
      height={height}
      sandbox="allow-scripts allow-same-origin"
    />
  )
};

export default PageFrame