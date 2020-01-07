import React, { Component }  from 'react';
import {Route} from 'react-router-dom';
import './Work.css';
import WorkList from './WorkList';

// Work Page imports
import RawSatchel from './WorkItemPages/RawSatchel';
import TrailBlazer from './WorkItemPages/TrailBlazer';
import IMissYou from './WorkItemPages/IMissYou';
import AdaptiveRig from './WorkItemPages/AdaptiveRig';
import PatchPocketShirt from './WorkItemPages/PatchPocketShirt';
import FieldJacketSling from './WorkItemPages/FieldJacketSling';

var workItemsLists=[
  { title: 'Clothing',
    workItems: [
      {name: 'RawSatchel',        path: '/RawSatchel',        comp: RawSatchel},
      {name: 'PatchPocketShirt',  path: '/PatchPocketShirt',  comp: PatchPocketShirt},
      {name: 'FieldJacketSling',  path: '/FieldJacketSling',  comp: FieldJacketSling},
      {name: 'AdaptiveRig',       path: '/AdaptiveRig',       comp: AdaptiveRig},
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