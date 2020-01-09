import React  from 'react';
import Grid from '@material-ui/core/Grid';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
// Image Imports
import Banner from '../../assets/clothing/field_jacket_sling/banner.jpg';
import Img2 from '../../assets/clothing/field_jacket_sling/02.jpg';
import Img3 from '../../assets/clothing/field_jacket_sling/03.jpg';
import Img4 from '../../assets/clothing/field_jacket_sling/04.jpg';
import Img5a from '../../assets/clothing/field_jacket_sling/05a.jpg';
import Img5b from '../../assets/clothing/field_jacket_sling/05b.jpg';
import Img6 from '../../assets/clothing/field_jacket_sling/06.gif';
import Img7 from '../../assets/clothing/field_jacket_sling/07.jpg';
import Img8 from '../../assets/clothing/field_jacket_sling/08.jpg';
import Img9 from '../../assets/clothing/field_jacket_sling/09.jpg';
import Img10 from '../../assets/clothing/field_jacket_sling/10.jpg';
import Img11 from '../../assets/clothing/field_jacket_sling/11.jpg';
import Img12 from '../../assets/clothing/field_jacket_sling/12.jpg';


const FieldJacketSling = () => {
  return (
    <div className="work-page-wrapper">
    <div className="content">
      <img className='banner' alt='Banner' src={Banner}/>
        <p className='title'>Field Jacket Sling</p>
        <span>Discovering a second wind. </span>
      
      <div className='divider'/>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <p><strong>A Standstill</strong></p>
          <p>Early this year, Silv offered me a beautiful knit sweater that he wasn&rsquo;t wearing.&nbsp; He told me to name my price, I told him I didn&rsquo;t have much money, so he asked me to make him something instead.&nbsp;</p>
          <p>I asked Silv what he wanted.</p>
          <p>&ldquo;You know me, make something you think I&rsquo;d like.&rdquo;</p>
          <p>It was a fitting request for that night, as we spent it with Sam, who was trying hard to motivate us to do work we felt passionate about.&nbsp;&nbsp;</p>
          <p>Sam knew us as more than just retail workers.&nbsp;</p>
          <p>She knew that we felt a desire to create things.&nbsp; <br />She knew that we were at a standstill with our creative work.&nbsp;</p>
          <p>We had personal reasons, we made excuses, we justified the lack of action, motivation, and inspiration&hellip; but she passionately urged us to achieve more in that aspect of our lives.</p>
        </Grid>
        <Grid item xs={6}>
          <img className="grid-img" alt='A Standstill' src={Img2}/>
        </Grid>
      </Grid>
      
      <div className='divider'/>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <p><strong>A Timid Recovery</strong></p>
          <p>The gift took a while to make.&nbsp; I found it difficult at the time to focus on anything personal.&nbsp; The materials were ready, the idea existed in my head, but I didn&rsquo;t have the motivation to sew.&nbsp;</p>
          <p>It took a while to find the confidence and inspiration to sew again.&nbsp; It also took a lot of effort forcing myself to take on a project that was to be given to a friend.&nbsp;&nbsp;</p>
          <p>What if what I made was a disappointment?&nbsp; <br />What if he didn&rsquo;t like it?&nbsp; <br />What if I&rsquo;m just bad at what I do?&nbsp;</p>
          <p>Months had passed, and I felt guilty keeping Silv waiting.</p>
          <p>I began to cut the materials.&nbsp; <br />I did it slowly with hesitation, out of fear for all the above.</p>
          <p>I was afraid to rush it.&nbsp;</p>
        </Grid>
        <Grid item xs={6}>
          <img className="grid-img" alt='A Timid Recovery 1' src={Img3}/>
        </Grid>
      </Grid>

      <div className='divider'/>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <p><strong>A Familiar Fulfillment </strong></p>
          <p>The result was something I felt rather proud of.&nbsp; It was a product of thought and care, even if the thought and care was rooted in self doubt.&nbsp; It felt different from the things I&rsquo;d slap together for myself, it felt like something I&rsquo;d be happy to present to someone else.</p>
          <p>About five months after making our deal, I delivered the bag to Silv.&nbsp;</p>
          <p>I felt a sense of comfort when I saw the smile on his face.</p>
          <p>He geeked out over it for a bit, and it brought me joy.&nbsp; His reaction was a reminder of why I want to do what I do; I want to make things that can bring happiness to others. His reaction also reminded me that even self doubt can lead to great things, and that everything we do should be done with thought and care.</p>
        </Grid>
        <Grid item xs={6}>
          <img className="grid-img" alt='A Familiar Fulfillment 1' src={Img4}/>
        </Grid>
        <Grid item xs={12}>
          <AwesomeSlider bullets={false}>
          <div data-src={Img5a}/>
            <div data-src={Img5b}/>
          </AwesomeSlider>
        </Grid>
      </Grid>

      <div className='divider'/>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <p><strong>The Sling</strong></p>
          <p>Silv works a day job at a designer consignment store, and takes on work on the side as a model, creative director, film director, stylist, clothing designer, and consultant.&nbsp; He has a knack for breathing new life and excitement into everything he touches. I thought it fitting to make him a bag that he could use throughout his adventures. I thought it fitting to make it out of something I owned.&nbsp;&nbsp;</p>
          <p>The source material came from a thrifted M-65ish Jacket (not quite the classic silhouette). I bought it on a whim due to its near mint condition, but it sadly didn&rsquo;t fit me, it was way too tight in the shoulders.&nbsp; It saw maybe one or two wears before it sat in my closet, collecting close to three years worth of dust.</p>
        </Grid>
        <Grid item xs={6}>
          <img className="grid-img" alt='The Sling 1' src={Img6}/>
        </Grid>
        <Grid item xs={6}>
          <img className="grid-img" alt='The Sling 2' src={Img7}/>
        </Grid>
        <Grid item xs={6}>
          <img className="grid-img" alt='The Sling 3' src={Img8}/>
        </Grid>
        <Grid item xs={12}>
          <p>Half of the jacket was used for the body of the bag, with the hand pockets kept intact to be used as pockets on the front and back of the sling.&nbsp; A single chest pocket was attached to the front of the bag, acting as an extra double pocket (open entry on the top, button flap entry in front). This pocket was secured with an embroidery top stitch about a half inch from the edge, left raw to fray over time and through use.&nbsp;</p>
          <p>The entry is a roll top, secured with a Velcro strap on each side.&nbsp; One of the Velcro straps sticks onto an original patch strip above the chest pocket.&nbsp; D-rings were sewn on to the Velcro straps for ease of operation (pull to detach) and an attachment point for keychains.&nbsp;</p>
          <p>The strap itself is woven from olive coloured 550 paracord.&nbsp; The strap was once used as a camera strap.&nbsp;&nbsp;</p>
        </Grid>
        <Grid item xs={6}>
          <img className="grid-img" alt='The Sling 4' src={Img9}/>
        </Grid>
        <Grid item xs={6}>
          <img className="grid-img" alt='The Sling 5' src={Img10}/>
        </Grid>
        <Grid item xs={6}>
          <img className="grid-img" alt='The Sling 6' src={Img11}/>
        </Grid>
        <Grid item xs={6}>
          <img className="grid-img" alt='The Sling 7' src={Img12}/>
        </Grid>
      </Grid>

      <div className='divider'/>

      <div className='credits'>
        <p><strong>Credits</strong></p>
        <p>Bag, Photography, and Narrative by Yiu Hei Cheung<br />July 2019</p>
        <p><strong>Details</strong></p>
        <p>Bag: 100% Cotton, salvaged from a vintage Field Jacket<br />Strap: 100% Nylon</p>
      </div>


    </div>
  </div>
  )
};


export default FieldJacketSling;