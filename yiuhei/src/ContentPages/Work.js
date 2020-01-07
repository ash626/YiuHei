import React, { Component }  from 'react';
import {Route} from 'react-router-dom';
import './Work.css';
import WorkList from './WorkList';
import RawSatchel from './WorkItemPages/RawSatchel';
import TrailBlazer from './WorkItemPages/TrailBlazer';
import IMissYou from './WorkItemPages/IMissYou';
var workItemsLists=[
  { title: 'Clothing',
    workItems: [
      {name: 'RawSatchel', path: '/RawSatchel', comp: RawSatchel},
    ]},
  
  { title: 'Videography',
    workItems: [
      {name: 'TrailBlazer', path: '/TrailBlazer', comp: TrailBlazer},
    ]},
  
  { title: 'Art',
    workItems: [
      {name: 'I Miss You', path: '/imissyou', comp: IMissYou},
    ]}
  ]

class Work extends Component{
  render() {
    return (
      <>
        <Route exact path='/work'>
          <div id='work-wrapper'>
            <div id='work-content'>
              {workItemsLists.map(workItemList => (
                <WorkList workItemList={workItemList}/>
              ))}
            </div>
          </div>
        </Route>
        {workItemsLists.map(({workItems}) => (
          workItems.map(({path, comp}) => (
            <Route path={'/work' + path}>
              {React.createElement(comp)}
            </Route>
          ))
        ))}
      </>
    );
  }
}

export default Work;