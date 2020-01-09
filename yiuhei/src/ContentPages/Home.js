import React, { Component }  from 'react';
import './Home.css';
import HomeCoverImg from '../assets/landing_page/cover_image.jpg';


class Home extends Component{
  render() {
    return (
      <div id='home-wrapper'>
        <div id='home-content'>
          <div id='home-cover-wrapper'>
            <img id='cover-img' alt='Cover' src={HomeCoverImg}/>
          </div>
          <div id='home-textbox'>
            There is always a story.

            <p>There is a story to uncover, and a story waiting to be told.</p>

            <p>Every object embodies a tale, and will fall into place in the one you will unfold.</p>

            <p>Through making we extract a narrative.</p>

            <p>We explore our past to find a need. We imagine our future to envision a solution. We scavenge and assemble in the present in order to bring it to life.</p>

            <p>It&rsquo;s not just about the product, but the journey as well.</p>

            <p>With Love, <br/> Yiu Hei Cheung</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;