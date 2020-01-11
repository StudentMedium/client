import React from 'react'
import CoverPhoto from '../../assets/img/coverPhoto.png'
import { Button, Jumbotron, Container } from 'react-bootstrap';

// import '../../assets/css/styles.scss'
export default function cover() {
    return (
        <Container>
            <Jumbotron style={{ backgroundColor: '#fff' }}>
                <div className="jumbtronDiv" >
                    <div >
                        <img src={CoverPhoto} alt="CoverPhoto"
                    />
                    </div>
                    <div className="jumbtronText">
                        <h1>Hello, world!</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                            Boost your tech career with team projects.

                            All self-directed developers run into the same problems. No team experience,
                            feeling lost working alone, endless tutorials, not enough finished projects.
                            The good news? Chingu solves them
                         </p>
                        <p >
                        <Button variant="outline-success" className='cover-btn-style'>Success</Button>                     
                        </p>
                    </div>
                </div>
            </Jumbotron>
        </Container>
    )
}
