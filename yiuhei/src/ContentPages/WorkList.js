import React, {Component} from "react";
import {Link} from 'react-router-dom';

class WorkList extends Component{
  render() {
    return (
      <div className='work-list'>
        <div className='title-wrapper'>
          <span className='title'>{this.props.workItemList.title}</span>
        </div>
        <div className='divider'/>
        {this.props.workItemList.workItems.map(({image, name, path}, id) => (
          <Link to={'/work' + path}>
            <div className='work-item'>
              <span className='work-name'>{name}</span>
              {/*<img src={image}/>*/}
            </div>
          </Link>
        ))}
      </div>
    )
  }

}

export default WorkList