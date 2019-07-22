import React from 'react'

export default function Joke(props) {
  return (
    <td key={props.id} className="Joke">{props.jokes}</td>
  )
}