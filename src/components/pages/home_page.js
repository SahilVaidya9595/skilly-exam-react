import React from 'react'
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div>

            <section>

                <div className='container'>
                    <ul>
                        <li>
                            {/* <div class="title"> */}
                                <h3 style={{ color: '#000000', paddingLeft: '60px', paddingTop: '50px', fontWeight: '-moz-initial' }}>Student Section</h3>
                                
                                <Link to="/studentlogin">
                                    <button className='std-visit-btn'>Start Now</button>
                                </Link>
                                
                            {/* </div> */}
                        </li>

                        <li>
                            <div className='title'>
                                <h3 style={{ color: '#000000', paddingLeft: '60px', paddingTop: '50px', fontWeight: '-moz-initial' }}>College Section</h3>
                                <button className='clg-visit-btn'>Start Now</button>
                            </div>
                        </li>
                    </ul>
                </div>

            </section>

        </div>
    )
}
