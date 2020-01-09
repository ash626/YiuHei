import React  from 'react';
import Grid from '@material-ui/core/Grid';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
// Image Imports
import Banner from '../../assets/clothing/patch_pocket_shirt/banner.jpg';
import Img2 from '../../assets/clothing/patch_pocket_shirt/02.jpg';
import Img3a from '../../assets/clothing/patch_pocket_shirt/03a.jpg';
import Img3b from '../../assets/clothing/patch_pocket_shirt/03b.jpg';
import Img3c from '../../assets/clothing/patch_pocket_shirt/03c.jpg';
import Img4a from '../../assets/clothing/patch_pocket_shirt/04a.jpg';
import Img4b from '../../assets/clothing/patch_pocket_shirt/04b.jpg';
import Img5 from '../../assets/clothing/patch_pocket_shirt/05.gif';
import Img6 from '../../assets/clothing/patch_pocket_shirt/06.jpg';
import Img7 from '../../assets/clothing/patch_pocket_shirt/07.jpg';
import Img8 from '../../assets/clothing/patch_pocket_shirt/08.jpg';
import Img9 from '../../assets/clothing/patch_pocket_shirt/09.jpg';


const PatchPocketShirt = () => {
  return (
    <div className="work-page-wrapper">
    <div className="content">
      <img className='banner' alt='Banner' src={Banner}/>
        <p className='title'>Patch Pocket Short</p>
        <span>A garment built to accept.</span>
      
      <div className='divider'/>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <p><strong>Humbling Growth</strong></p>
          <p>There&rsquo;s a certain invincibility that comes with youth.&nbsp; When you&rsquo;re a child you think that you&rsquo;re perfect, you&rsquo;re great, you&rsquo;re smart, you can&rsquo;t be stopped.&nbsp; It doesn&rsquo;t last for long, by the time you&rsquo;re in middle school you&rsquo;re grasping the concepts of right and wrong.&nbsp; You slowly grow accustomed to questioning yourself, whether what you&rsquo;re doing is wrong or right, bad or good - you develop a conscience.&nbsp;&nbsp;</p>
          <p>As a toddler the idea of &ldquo;average&rdquo; doesn&rsquo;t register.&nbsp;&nbsp;</p>
          <p>As a high schooler you start to compare yourself to others, wondering if you&rsquo;re below or above the average.&nbsp;&nbsp;</p>
          <p>In your young adult life, you&rsquo;re well aware of all the flaws you have.&nbsp;&nbsp;</p>
          <p>Some grow up and better themselves with ease, some struggle with it for a while.&nbsp; I&rsquo;m very much the latter. I&rsquo;m naturally predisposed to focusing on my flaws, feeling like a burden, mulling over every mistake.&nbsp; In my highs, I&rsquo;m soaring. Overconfident, outgoing, unstoppable. In my lows I&rsquo;m the complete opposite.&nbsp;&nbsp;</p>
          <p>At 26, I see the need to strike a balance.&nbsp; Polar highs and lows are who I am, I don&rsquo;t seek to change that, I want to learn to live with it in a way that results in a general rise.&nbsp; I want to grow into a Me that does more good, hurts himself less, and does less harm to others.</p>
        </Grid>
        <Grid item xs={6}>
          <img className="grid-img" alt='Humbling Growth' src={Img2}/>
        </Grid>
      </Grid>
      
      <div className='divider'/>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <p><strong>Acceptance</strong></p>
          <p>I made these shorts to fit my odd body.&nbsp;&nbsp;</p>
          <p>As a kid, the concept of body image never registered.&nbsp; I didn&rsquo;t know I was overweight, taller than most children, or that my ears were big.&nbsp;</p>
          <p>As a highschooler I began to realize I wasn&rsquo;t as fit as some kids, but not as unfit as others.&nbsp;</p>
          <p>Throughout university I learned the proportions of my body through the clothes I wore. With that came the realization that my body wasn&rsquo;t as average as I thought I was - my body had flaws.&nbsp;&nbsp;</p>
          <p>My hips are wide, my waist is slim.&nbsp;&nbsp;<br />My calves are big, my thighs aren&rsquo;t.&nbsp;<br />My head is huge, my shoulders wide, my arms skinny.&nbsp;&nbsp;</p>
          <p>I&rsquo;m more akin to the Corbusian man than the Vitruvian man.&nbsp;&nbsp;</p>
          <p>These shorts are wide at the waist to fit over my hips.&nbsp; Cotton ties cinch them at the side to fit my waist and keep the front clean.&nbsp; They&rsquo;re loose to slim down my calves. They work with the traits of my body, accepting even the ones deemed difficult and negative.</p>
        </Grid>
        <Grid item xs={6}>
        <>
          <AwesomeSlider>
            <div data-src={Img3a}/>
            <div data-src={Img3b}/>
            <div data-src={Img3c}/>  
          </AwesomeSlider>
        </>
        </Grid>
      </Grid>

      <div className='divider'/>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <p><strong>The Good in the Bad</strong></p>
          <p>Waste is a product of any project.&nbsp; The piles of scraps and off-cuts that form in my room as I sew grew to be a concern.&nbsp; Excess bits of fabric would gather in boxes that sat in my closet, and my lack of mindfulness would result in those boxes being thrown out when it came time to clean.&nbsp;&nbsp;</p>
          <p>In an effort to reduce the amount of waste produced in this project, scrap material produced from cutting the main panels were sewn together to form monochromatic patchwork patch pockets.&nbsp;</p>
          <p>It was time consuming, it took more effort than it should to create patch pockets.&nbsp; Though it was much more rewarding to work with the necessary drawbacks of sewing and turn it into something unique and essential to the garment.</p>
        </Grid>
        <Grid item xs={6}>
        <>
          <AwesomeSlider>
            <div data-src={Img4a}/>
            <div data-src={Img4b}/>
          </AwesomeSlider>
        </>
        </Grid>
      </Grid>

      <div className='divider'/>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <p><strong>The Shorts</strong></p>
          <p>A light cotton gabardine was chosen to provide a refined finish while maintaining next-to-skin comfort and breathability.&nbsp; Given that gabardine doesn&rsquo;t stretch, the opening was cut for a 32 inch waist so as to fit over my wide hips.&nbsp;&nbsp;</p>
          <p>Soft cotton webbing ties were attached to the sides to cinch the short down to fit a 30 inch waist.&nbsp; The ties were placed at the side to prevent the extreme cinch from bunching up the front and back faces of the short.&nbsp;&nbsp;</p>
          <p>A drop crotch fit allows the short to be worn at different heights, accommodating various styles and garments.</p>
        </Grid>
        <Grid item xs={6}>
          <img className="grid-img" alt='The Shorts 5' src={Img5}/>
        </Grid>
        <Grid item xs={6}>
          <img className="grid-img" alt='The Shorts 1' src={Img6}/>
        </Grid>
        <Grid item xs={6}>
          <img className="grid-img" alt='The Shorts 2' src={Img7}/>
        </Grid>
        <Grid item xs={6}>
          <img className="grid-img" alt='The Shorts 3' src={Img8}/>
        </Grid>
        <Grid item xs={6}>
          <img className="grid-img" alt='The Shorts 4' src={Img9}/>
        </Grid>
      </Grid>

      <div className='divider'/>

      <div className='credits'>
        <p><strong>Credits</strong></p>
        <p>On-site Photography by Kyle Ortuoste <br />Product Photography &amp; Text by Yiu Hei Cheung<br />July 2019</p>
        <p><strong>Details</strong></p>
        <p>100% Cotton</p>
   </div>


    </div>
  </div>
  )
};


export default PatchPocketShirt;