import React from 'react'

const Header = ({title}) => {
  return (
    <header style={{backgroundColor: 'royalblue',
        color:'white'
    }}>
      <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
    title: "Default Titile"
}

export default Header
