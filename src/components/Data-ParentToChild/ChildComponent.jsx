import React from 'react'

export default function ChildComponent(props) {
  const data = "I am Child Data"
  props.childData(data)

  const {parentData} = props
  return (
    <div>
      <h1>
        child compunent
      </h1>
      <h2> {parentData} </h2>
    </div>
  )
}
