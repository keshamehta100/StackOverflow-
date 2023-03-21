import React from 'react'

const Avatar = ({ children, backgroundColor, px, py, color, borderRadius, fontSize, cursor, height, width, margin }) => {
  const style = {
    backgroundColor,
    height,
    width,
    margin,
    padding: `${py} ${px}`,
    color: color || 'black',
    borderRadius,
    fontSize,
    textAlign: 'center',
    cursor: cursor || null,
    textDecoration: "none"
    
  }

  return (
    <div style={style}>
     { children }
    </div>
  )
}

export default Avatar