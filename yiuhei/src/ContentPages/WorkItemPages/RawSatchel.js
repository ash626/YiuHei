import React  from 'react';
import Grid from '@material-ui/core/Grid';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
// Image Imports
import Banner from '../../assets/clothing/raw_satchel/banner.jpg';
import Img2a from '../../assets/clothing/raw_satchel/02a.jpg';
import Img2b from '../../assets/clothing/raw_satchel/02b.jpg';
import Img2c from '../../assets/clothing/raw_satchel/02c.jpg';
import Img3 from '../../assets/clothing/raw_satchel/03.jpg';
import Img4a from '../../assets/clothing/raw_satchel/04a.jpg';
import Img4b from '../../assets/clothing/raw_satchel/04b.jpg';
import Img5a from '../../assets/clothing/raw_satchel/05a.jpg';
import Img5b from '../../assets/clothing/raw_satchel/05b.jpg';
import Img5c from '../../assets/clothing/raw_satchel/05c.jpg';
import Img5d from '../../assets/clothing/raw_satchel/05d.jpg';
import Img6 from '../../assets/clothing/raw_satchel/06.jpg';

const RawSatchel = () => {
  return (
    <div className="work-page-wrapper">
    <div className="content">
      <img className='banner' alt='Banner' src={Banner}/>
        <p className='title'>Raw Satchel</p>
        <span>A simple cross-body satchel with hidden details.</span>
      
      <div className='divider'/>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <p><strong>The Wanderer</strong></p>
          <p>Uncertain, he left home to wander the city. He hated that clich&eacute;, but he wasn&rsquo;t wandering to find himself - he was wandering because he didn&rsquo;t know what else to do.</p>
          <p>Like everyone else, he meticulously maintained a composed image so nobody would question his insecurities. He was adorned in simple, clean, unobtrusive clothing that was crafted to perfection and jewelry that redirected the attention of those who were curious about him, something he could talk about - something rather than himself. Slung across his body was a simple satchel that guarded his essentials, the possessions he kept to himself.</p>
          <p>It was a highly calculated image with the singular intent to look as uncalculated as possible.&nbsp;Scattered among the clothes he chose were minute details you wouldn&rsquo;t notice unless you knew what you were looking for, details you wouldn&rsquo;t know about unless you asked about them.</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <AwesomeSlider bullets={false}>
            <div data-src={Img2a}/>
            <div data-src={Img2b}/>
            <div data-src={Img2c}/> 
          </AwesomeSlider>  
        </Grid>
        <Grid item xs={12}>
          <img class='grid-img' alt='The Wanderer 1' src={Img3}/>
        </Grid>
        <Grid item xs={12}>
          Without a destination in mind, he walked on. He walked on to distract himself from a certain uncertainty that had beleaguered him. Main roads made him uncomfortable - too many people, the last thing he needed. Instead he chose to slide through the quiet alleyways to avoid the presence of others, to avoid potential interactions that would temporarily distract him from his own distraction.
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>He encountered a small planted plot of land encompassed by urban megastructures. Tall, wispy trees defined the spot and provided cover for a peculiarly sculpted ground exhaust vent. The concrete structure sprouted from the ground like a sapling and split into two diverging half arches &ndash; its form resembling a large brutalist maple seed.</p>
          <p>The vent was so clearly designed, but why? Perhaps its creator wished to mask its purpose, to turn something mechanical into a sculpted work. If that was true, then why did he decide to veil it in a fence of trees? How many layers of beautification must a simple exhaust vent go through before it can be accepted into the landscape?</p>
          <p>Feeling a sense of resonance he rested here, against the concrete sculpture</p>
        </Grid>
        <Grid item xs={12} sm={6}>
        <AwesomeSlider bullets={false} style={{height: '724px'}}>
            <div data-src={Img4a}/>
            <div data-src={Img4b}/>
          </AwesomeSlider>  
        </Grid>

      </Grid>
      
      <div className='divider'/>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <h3><strong>The Satchel </strong></h3>
          <p>He carried a simple cross-body satchel: a boxed rectangular grey leather bag with a gently rounded bottom, cinched at the top, and closed with a cover flap.&nbsp; There is no visible hardware, in fact there is no hardware at all.&nbsp; On the surface it has no peculiar features, its just a plain bag like any other.</p>
          <p>Upon further inspection one starts to notice a few details: the large cut corners on an otherwise rectangular cover flap, the small waxed thread tacks sparsely distributed along the edge of the cover, a stray strap-end on the front that peeks out from under the flap.&nbsp;</p>
          <p>If one were to follow that strap and lift up the cover they would expose the satchel&rsquo;s intimate features.&nbsp; Lifting the cover reveals the primitive strap construction:&nbsp; a long, thin leather strap that passes through the front, back, and folded walls of the bag on each upper corner, held in place by a simple knot on each side.&nbsp; The underside of the cover showcases the natural, uneven raw edges of the hide used to construct the satchel, shaped and secured by the waxed thread tacks that populate the perimeter of the cover.&nbsp; &nbsp;</p>
          <p>The satchel took after him, hiding its raw and unfinished self behind a pristine cover in an attempt to blend into the masses.&nbsp; One might never know their insecurities if they choose to ignore the peculiarities that leak through their disguises.&nbsp;</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <AwesomeSlider bullets={false}>
            <div data-src={Img5a}/>
            <div data-src={Img5b}/>
            <div data-src={Img5c}/>  
            <div data-src={Img5d}/>
          </AwesomeSlider>
        </Grid>
        <Grid item xs={12}>
          <img src={Img6} alt='Raw Satchel 1' className='grid-img'/>
        </Grid>
        <Grid item xs={12}>
          <p>Grey Calf Leather<br />Hardware-free Construction<br />Adjustable Strap</p>
          <p>Dimensions: 36cm x 34cm x 8cm, 165cm strap at full length</p>
          <p>Message for Inquiries</p>
        </Grid>
      </Grid>

      <div className='divider'/>

      <div className='credits'>
        <h3><strong>Credits</strong></h3>
        <p>Narrative &amp;&nbsp;Photographs by Yiu Hei Cheung<br />Raw Satchel designed and crafted by Yiu Hei Cheung<br />April 2018</p>
      </div>


    </div>
  </div>
  )
};


export default RawSatchel;