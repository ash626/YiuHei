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

// Work Image imports
import RawSatchelImg from '../assets/clothing/raw_satchel/nav_tile.jpg';
import TrailBlazerImg from '../assets/video/trailblazer/nav_tile.jpg';
import IMissYouImg from '../assets/art/i_miss_you/nav_tile.jpg';
import AdaptiveRigImg from '../assets/clothing/adaptive_rig/nav_tile.jpg';
import PatchPocketShirtImg from '../assets/clothing/patch_pocket_shirt/nav_tile.jpg';
import FieldJacketSlingImg from '../assets/clothing/field_jacket_sling/nav_tile.jpg';



var workItemsLists=[
  { title: 'Clothing',
    workItems: [
      {name: 'Raw Satchel',        path: '/RawSatchel',        image: RawSatchelImg,   comp: RawSatchel},
      {name: 'Patch Pocket Shirt',  path: '/PatchPocketShirt',  image: PatchPocketShirtImg,   comp: PatchPocketShirt},
      {name: 'Field Jacket Sling',  path: '/FieldJacketSling',  image: FieldJacketSlingImg,   comp: FieldJacketSling},
      {name: 'Adaptive Rig',       path: '/AdaptiveRig',       image: AdaptiveRigImg,   comp: AdaptiveRig},
    ]},
  
  { title: 'Videography',
    workItems: [
      {name: 'TrailBlazer', path: '/TrailBlazer', image: TrailBlazerImg,   comp: TrailBlazer},
    ]},
  
  { title: 'Art',
    workItems: [
      {name: 'I Miss You', path: '/imissyou', image: IMissYouImg,   comp: IMissYou},
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