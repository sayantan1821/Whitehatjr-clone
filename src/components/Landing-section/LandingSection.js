import React from 'react';
import pic from '../../images/coding-child.png';
import pic2 from '../../images/android.png';
import './LandingSection.css'

function LandingSection() {
    return (
        <>
            <div className='landing-section'>
                <div className='ls-text'>
                    <h1><b> 
                        WhitehatJr Live
                        1:1 Online Classes
                    </b></h1>
                    <p>
                        One of the World’s Leading Tech Curriculum for Kids. Kickstart
                        your kid’s journey to create the next billion-dollar idea of the
                        tech world.
                    </p>
                    <div className='condition'>
                        <button class="btn"><b>Book a FREE trial</b></button>
                        <div className='condition-text'>
                            <h6>*Limited Spots Left!</h6>
                        </div>
                    </div>
                </div>
                <div className='ls-img'>
                    <img src= {pic} alt='coding-child' />
                </div>
            </div>
            <div className='achievement'>
                <div className='android-img'>
                    <img src={pic2} alt='android' />
                </div>
                <div className='achievement-txt'>
                    <h1>26 of our students will collaborate with the leaders of Silicon Valley</h1>
                    <p>Having decoded the Silicon Valley Challenge, 26 of our best and brightest are set to learn from and work with the engineers, entrepreneurs and VC's from the Valley. Learn how these 26 become our Silicon Valley Superheroes.</p>
                    <button class="achv-btn-outlined"><b>View Our Superheroes</b></button>
                    <button class="btn"><b>Book a FREE trial</b></button>
                    <p><b>4.7+ out of 5 stars</b> from 8.6k+ reviews by our students</p>
                </div>
            </div>
        </>
    )
}

export default LandingSection
