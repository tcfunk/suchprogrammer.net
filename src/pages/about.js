import React from 'react';
import Link from 'gatsby-link';

import low_poly from './basic_lowpoly.png';

class About extends React.Component {
    render() {
        return (
            <div>
                <h1>About Tyler</h1>
                <p>
                    self-ungrandizing approach:

                    Nothing I can say here will accurately describe who I truly am. Not because I am
                    particulary interesting or unique in any way, but more that I'm not much of a writer.

                    Instead I'll give you some facts and figures, which you can take any way you like.
                </p>

                <p>
                    IDEA! What if I treated this like some kind of character profile page. I think I like this :)
                    world of warcraft example:

                    <img src="http://i44.tinypic.com/2h6r8y0.jpg" />
                    <img src="http://wow.allakhazam.com/Im/width=500/129664" />

                    <img src="https://chaos7theory.github.io/radial/img/example.png" />
                    "Radar chart"

                </p>

                <p>
                    <a href="https://sketchfab.com/models/d3aa21bf21c14d97b088c2dccb0351a4">
                        <img src={low_poly} />
                    </a>
                </p>

            </div>
        )
    }
}

export default About;
