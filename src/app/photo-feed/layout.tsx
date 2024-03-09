import React from 'react'

const layout = (props: {children: React.ReactNode, modal: React.ReactNode}) => {
  return (
    <div>
        {props.modal}
        {props.children}
    </div>
  )
}

export default layout