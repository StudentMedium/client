import React from 'react'
import download from '../../assets/img/download.png'
import download1 from '../../assets/img/download1.png'
var users = [

    {
        id: 1,
        name: 'Sam',
        email: 'somewhere@gmail.com'
    },

    {
        id: 2,
        name: 'Ash',
        email: 'something@gmail.com'
    }
]
export default function theProcess() {

    return (
        <div className="theProcess">
        <div className="processSteps">
            <div className="processStepsImg">
                <img src={download} alt="formIcon" />
            </div>

            <div className="processStepsText">
                {/* {users.map(function (d) {
                    return (<ul>
                        <h2>
                            <li>{d.id} {d.name}</li>
                        </h2> </ul>)
                })} */}
                    <p >1. Apply</p>
                <p >Your learning adventure starts the moment you decide to join Chingu.</p>
                </div>
        </div>

        <div className="processSteps">
            <div className="processStepsImg">
                <img src={download1} alt="formIcon" />
            </div>

            <div className="processStepsText">
                 <p >1. Apply</p>
                <p >Your learning adventure starts the moment you decide to join Chingu.</p>
                </div>
        </div>
        <div className="processSteps">
            <div className="processStepsImg">
                <img src={download} alt="formIcon" />
            </div>

            <div className="processStepsText">
                <p >1. Apply</p>
                <p >Your learning adventure starts the moment you decide to join Chingu.</p>
                </div>
        </div>
        <div className="processSteps">
            <div className="processStepsImg">
                <img src={download} alt="formIcon" />
            </div>

            <div className="processStepsText">
                <p >1. Apply</p>
                <p >Your learning adventure starts the moment you decide to join Chingu.</p>
                </div>
        </div>
        </div>
    )
}
