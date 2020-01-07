import React, {Component} from "react";
import {Link} from 'react-router-dom';

class WorkList extends Component{
  render() {
    return (
      <div className='work-list'>
        <div className='title-wrapper'>
          {this.props.workItemList.title}
        </div>
        <div className='divider'/>
        {this.props.workItemList.workItems.map(({image, name, path}, id) => (
          <Link to={'/work' + path}>
            <div className='work-item'>
              <span className='name'>{name}</span>
              {/*<img src={image}/>*/}
            </div>
          </Link>
        ))}
      </div>
    )
  }

}

export default WorkList