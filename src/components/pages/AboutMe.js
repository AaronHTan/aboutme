import React from 'react';
import {styles} from "../../styles/Styles";
const AboutMe = () =>{
    return (
            <div style={styles.Container}>
                <h3 style={styles.Header}>AboutMe</h3>
                <div style={styles.Paragraph}>
                    <p>Hello, my name is Aaron Tan and I am currently a computer science major at Carnegie Mellon University.
                        At CMU, I’ve grown to appreciate the low level languages like C and Rust, while learning about
                        computer systems and security. I’ve also loved learning about algorithms and functional
                        languages, and learning languages like Go and Java, and solving algorithms and the mathematical
                        underpinnings of computer science. My main interest lies in computer systems, where I enjoy
                        working on the design and ways all the individual parts fit together in the context of a larger
                        system.
                    </p>
                    <p>
                        Outside of just computer science, I love learning and exploring in general. In High School,
                        I studied Latin and linguistics because I found the way languages worked, and Latin in
                        particular to be fascinating. I have done multiple long distance Hikes and Bikes, including the
                        C&O Towpath and Great Allegheny Passage on bike from Washington D.C. to Pittsburgh, and
                        Backpacking 800 Miles on the Continental Divide Trail in New Mexico. The outdoors are a
                        great complement to computer science.
                    </p>
                </div>
                </div>
    );
}
export default AboutMe;