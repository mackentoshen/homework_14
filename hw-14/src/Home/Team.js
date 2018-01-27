import React from 'react';

const Team = () => {
    return (
        <section className="team-section">
            <div className="container">
                <div className="row">
                    <h3 className="section-headers-black col-12">Our team</h3>
                    <ul className="team-container">
                        <li className="team-content col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="wrap-photo">
                                <img src="images/team1.jpg" alt="Manny Delgado"/>
                                    <div className="photo-description">
                                        <p>Be who you are and say what you feel, because those who mind don't matter.</p>
                                    </div>
                                    <div className="photo-name">
                                        <h5>Manny Delgado</h5>
                                        <p>a little boy</p>
                                    </div>
                            </div>
                            <div className="profile-container">
                                <button className="transp-btn" type="submit">profile</button>
                            </div>
                        </li>
                        <li className="team-content col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="wrap-photo">
                                <img src="images/team2.jpg" alt="Lamar Oddom"/>
                                    <div className="photo-description">
                                        <p>Be who you are and say what you feel, because those who mind don't matter.</p>
                                    </div>
                                    <div className="photo-name">
                                        <h5>Lamar Oddom</h5>
                                        <p>Team player</p>
                                    </div>
                            </div>
                            <div className="profile-container">
                                <button className="transp-btn" type="submit">profile</button>
                            </div>
                        </li>
                        <li className="team-content col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="wrap-photo">
                                <img src="images/team3.jpg" alt="Luke Dunphy"/>
                                    <div className="photo-description">
                                        <p>Be who you are and say what you feel, because those who mind don't matter.</p>
                                    </div>
                                    <div className="photo-name">
                                        <h5>Luke Dunphy</h5>
                                        <p>NATO representative</p>
                                    </div>
                            </div>
                            <div className="profile-container">
                                <button className="transp-btn" type="submit">profile</button>
                            </div>
                        </li>
                        <li className="team-content col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="wrap-photo">
                                <img src="images/team4.jpg" alt="Mitchell Pritchett"/>
                                    <div className="photo-description">
                                        <p>Be who you are and say what you feel, because those who mind don't matter.</p>
                                    </div>
                                    <div className="photo-name">
                                        <h5>Mitchell Pritchett</h5>
                                        <p>ecology lawer</p>
                                    </div>
                            </div>
                            <div className="profile-container">
                                <button className="transp-btn" type="submit">profile</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Team;