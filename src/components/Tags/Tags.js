import React, { Component } from 'react'
import "./Tags.scss"

export class Tags extends Component {

  render() {

    return (
      <div className="col">
        {this.props.tags.map((tag, i) => (
          <small key={i} className="tag-pill">
            {tag.value}
          </small>
        ))} 
      </div>
    )
  }
}

export default Tags
