import React  from 'react';

import Grid from '@material-ui/core/Grid';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
// Image Imports
import Banner from '../../assets/art/i_miss_you/banner.jpg';
import Img2a from '../../assets/art/i_miss_you/02a.jpg';
import Img2b from '../../assets/art/i_miss_you/02b.jpg';
import Img2c from '../../assets/art/i_miss_you/02c.jpg';
import Img3a from '../../assets/art/i_miss_you/03a.jpg';
import Img3b from '../../assets/art/i_miss_you/03b.jpg';
import Img4a from '../../assets/art/i_miss_you/04a.jpg';
import Img4b from '../../assets/art/i_miss_you/04b.jpg';
import Img4c from '../../assets/art/i_miss_you/04c.jpg';
import Img4d from '../../assets/art/i_miss_you/04d.jpg';
import Img4e from '../../assets/art/i_miss_you/04e.jpg';
import Img4f from '../../assets/art/i_miss_you/04f.jpg';
import Img5 from '../../assets/art/i_miss_you/05.jpg';
import Img6 from '../../assets/art/i_miss_you/06.jpg';
import Img7 from '../../assets/art/i_miss_you/07.jpg';
import Img8 from '../../assets/art/i_miss_you/08.jpg';
import Img9 from '../../assets/art/i_miss_you/09.jpg';

const IMissYou = () => {
  return (
    <div className="work-page-wrapper">
    <div className="content">
      <img className='banner' alt='Banner' src={Banner}/>
        <p className='title'>i miss you</p>
        <span>A collaborative project between Annie Yuxi Wang &amp; Yiu Hei Cheung</span>
      
      <div className='divider'/>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <p><strong>Opening</strong></p>
          <p>She is talented, that's without doubt.&nbsp; Her images pulled out emotions, memories, feelings.&nbsp; I wanted to work with her, in hopes that we could create something beautiful together.&nbsp;&nbsp;</p>
          <p>At the time I was stuck between places - one foot in the past, another in the present.&nbsp; I replayed memories of a care-free youth as I looked upon a blank canvas of opportunity with excitement.&nbsp; In my dreams I'd conjure vignettes that had no sense of time or setting but were full of feeling.&nbsp; I could write about the imagery, but I could never do them visual justice.&nbsp;&nbsp;</p>
          <p>She had recently produced a set of work based on dreams.&nbsp; Her drawings transported me to the small realities she conjured.&nbsp; I got lost in the gentle, detailed, deep blacks.&nbsp; She could bring these visions to life.&nbsp;</p>
          <p>I pitched an idea to her: we work together to bring these visions to life.&nbsp; She draws, I write, and through imagery and script we invoke a feeling and plant a memory.</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <AwesomeSlider bullets={false} style={{height: '670px'}}>
            <div data-src={Img2a}/>
            <div data-src={Img2b}/>
            <div data-src={Img2c}/> 
          </AwesomeSlider>  
        </Grid>
      </Grid>

      <Grid container spacing={3}>  
        <Grid item xs={12} sm={6}>
          <h3><strong>The Fall</strong></h3>
          <p>One thing led to another, we fell in love.&nbsp; The feelings her art made me feel drew me closer to her.&nbsp; She took interest in the bags I was making and the clothes I'd wear them with.&nbsp; Inevitably, our focus shifted from our project to our fall.&nbsp; I gave her a shirt to paint on.&nbsp; Fixated on the idea of self-expression through clothing, and perpetually enamored with her work, it only seemed right.&nbsp;&nbsp;</p>
          <p>She lives in another city in another country.&nbsp; We visit each other when we can.&nbsp; Through photographs I document our time together to the best of my ability.&nbsp; I took a trip to see her, she surprised me upon arrival.&nbsp; Roughly two months passed since I'd seen the shirt I had given her, and now I was reunited with it.&nbsp; It changed, she had made her mark on it.&nbsp; It had gained a companion as well, a shirt of her own with similar markings.&nbsp;&nbsp;</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <AwesomeSlider bullets={false} style={{height: '775px'}}>
            <div data-src={Img3a}/>
            <div data-src={Img3b}/> 
          </AwesomeSlider>  
        </Grid>
      </Grid>
      
      <div className='divider'/>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <h3><strong>Shirts</strong></h3>
          <p>On each shirt she painted a portrait I had taken during her previous visits; a portrait of her on mine, and a portrait of me on hers.&nbsp;</p>
          <p>She added a linking element between the two: heavy, detailed, deep black boxes.&nbsp; It was all painted in extreme detail, with small, fine brush strokes amounting to a full range of highlights and shadows that clearly reflected her intention.&nbsp;&nbsp;</p>
          <p>Painted in dye, each shirt will inevitably fade, bleed, and stain over time, growing with us.&nbsp;&nbsp;</p>
          <p>We now have garments that bring us closer together when we&rsquo;re apart &ndash; something to wear for when I miss you.</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <AwesomeSlider bullets={false} style={{height: '725px'}}>
            <div data-src={Img4a}/>
            <div data-src={Img4b}/>
            <div data-src={Img4c}/>  
            <div data-src={Img4d}/>
            <div data-src={Img4e}/>
            <div data-src={Img4f}/>
          </AwesomeSlider>
        </Grid>
        <Grid item xs={12}>
          <img src={Img5} alt='Shirts 1' className='grid-img'/>
        </Grid>

        <Grid item xs={12}>
          <img src={Img6} alt='Shirts 2' className='grid-img'/>
        </Grid>
        <Grid item xs={12}>
          <img src={Img7} alt='Shirts 3' className='grid-img'/>
        </Grid>
        <Grid item xs={12}>
          <img src={Img8} alt='Shirts 4' className='grid-img'/>
        </Grid>
        <Grid item xs={12}>
          <img src={Img9} alt='Shirts 5' className='grid-img'/>
        </Grid>
      </Grid>

      <div className='divider'/>

      <div className='credits'>
        <h3><strong>Credits</strong></h3>
        <p>Photographs &amp; Styling by Yiu Hei Cheung<br />Dream Curtains (and process photographs) by Annie Yuxi Wang<br />Painted shirts by Annie Yuxi Wang<br />Concept by Annie Yuxi Wang &amp; Yiu Hei Cheung<br />February 2018 - April 2018<br /><br /><strong>Details</strong><br />100% Cotton Shirt (His) by Lemaire<br />Polyester/Cotton Shirt (Hers) by Zara<br />Painted with Rit Dye&nbsp;</p>
      </div>


    </div>
  </div>
  )
};

export default IMissYou;