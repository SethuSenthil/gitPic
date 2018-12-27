import React from "react";
import "../css/Profile.css"
import Form from "./Form";
import CountUp from 'react-countup';
import WOW from "wowjs";




class Profile extends React.Component {
    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
      }
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        {this.props.error &&
                            <div className="alert alert-danger" role="alert">
                                {this.props.error}
                            </div>
                        }

                        {this.props.user ? (
                            <div>
                                <img src={this.props.user.avatar} alt="User Profile" className="rounded-circle profileImg wow rotateIn"/>

                                <h3 className="wow fadeInUp">
                                    {this.props.user.name} (<a href={this.props.user.url}>{this.props.user.username}</a>)
                                </h3>
                                <p className="wow fadeInUp">{this.props.user.bio}</p>

                            </div>
                        ) : (
                            <div>
                                <h1>gitPic</h1>
                                <p>Enter a username, and we will do the rest</p>
                            </div>
                        )}
                    </div>
                </div>

                {this.props.user &&
                <center><h4>{this.props.user.topLanguage} & {this.props.user.secondTopLanguage} lover</h4>                </center>
                }

                { this.props.user &&
                    <div className="row numericalData">
                        <div className="col-sm-4">
                            <h4><CountUp end = {this.props.user.repo_count} duration = {2}/></h4>
                            <p className="caption">Repositories</p>
                        </div>
                        <div className="col-sm-4">
                            <h4><CountUp end = {this.props.user.followers} duration = {2.2}/></h4>
                            <p className="caption">Followers</p>
                        </div>
                        <div className="col-sm-4">
                            <h4><CountUp end = {this.props.user.followers} duration = {this.props.user.following}/></h4>
                            <p className="caption">Following</p>
                        </div>
                    </div>
                }
            </div>
        );
    }
}


export default Profile;