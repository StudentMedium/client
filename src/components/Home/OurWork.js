import React from 'react'
import { Col, Row, Container,Card } from 'react-bootstrap';


export default function OurWork() {
    return (
        <div className='our-work'>
            <Container>

                <Row>
                    <Col xs={6} md={4}>
                        <h1>2,028</h1>
                        <h2>Developer Teams</h2>
                        <p>We launch remote developer teams from all skill levels, from all timezones,
                         and from most web dev languages & frameworks.</p>
                    </Col>
                    <Col xs={6} md={4}>
                        <h1>2,028</h1>
                        <h2>Developer Teams</h2>
                        <p>We launch remote developer teams from all skill levels, from all timezones,
                         and from most web dev languages & frameworks.</p>
                    </Col>
                    <Col xs={6} md={4}>
                        <h1>2,028</h1>
                        <h2>Developer Teams</h2>
                        <p>We launch remote developer teams from all skill levels, from all timezones,
                         and from most web dev languages & frameworks.</p>
                    </Col>
   
                <div className="textCenter">
                    <h2>Level-up your career from anywhere</h2>
                    <p>We place motivated people with similar goals together in project teams
                which allows them level-up in ways they couldn't otherwise</p>
                </div>
                
                    <Col xs={6} md={4}>
                        <Card className="our-mission">
                            <h1>2,028</h1>
                            <h2>Developer Teams</h2>
                            <p>We launch remote developer teams from all skill levels, from all timezones,
                         and from most web dev languages & frameworks.</p>
                        </Card>
                    </Col>
                    <Col xs={6} md={4}>
                        <Card className="our-mission">
                            <h1>2,028</h1>
                            <h2>Developer Teams</h2>
                            <p>We launch remote developer teams from all skill levels, from all timezones,
                         and from most web dev languages & frameworks.</p>
                        </Card>
                    </Col>
                    <Col xs={6} md={4}>
                        <Card className="our-mission">
                            <h1>2,028</h1>
                            <h2>Developer Teams</h2>
                            <p>We launch remote developer teams from all skill levels, from all timezones,
                         and from most web dev languages & frameworks.</p>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}
