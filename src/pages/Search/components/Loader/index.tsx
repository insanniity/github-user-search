import React from "react"
import ContentLoader from "react-content-loader"

const Loader = () => (
    <ContentLoader 
    speed={2}
    width={1740}
    height={410}
    viewBox="0 0 1740 410"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"    
  >
    <rect x="35" y="23" rx="0" ry="0" width="300" height="305" /> 
    <rect x="365" y="24" rx="0" ry="0" width="1255" height="305" />
  </ContentLoader>
)

export default Loader;