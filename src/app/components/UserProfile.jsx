import React, { PropTypes } from 'react';

import profilePhoto from '../images/profilePhoto.png';

class UserProfile extends React.Component {

    componentDidMount() {
        this.props.getUser(this.props.routeParams.userId);
    }

    render() {
        const { user } = this.props;
        const { address, company } = user;

        return (
            <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-lg-6 col-lg-offset-3">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">User: {user.username}</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-sm-2 padding">
                                <img alt="" src={profilePhoto} className="img-circle" />
                            </div>
                            <div className="col-sm-5">
                                <dl>
                                    <dt>NAME</dt>
                                    <dd>{user.name}</dd>
                                    <dt>EMAIL</dt>
                                    <dd>{user.email}</dd>
                                    <dt>PHONE</dt>
                                    <dd>{user.phone}</dd>
                                    <dt>WEBSITE</dt>
                                    <dd>
                                        <a
                                          rel="noopener noreferrer"
                                          target="_blank"
                                          href={`http://${user.website}`}
                                        >
                                            {user.website}
                                        </a>
                                    </dd>
                                </dl>
                            </div>
                            <div className="col-sm-5">
                                <dl>
                                    <dt>ADDRESS</dt>
                                    <dd>
                                        {`${address.street},
                                        ${address.suite},
                                        ${address.zipcode},
                                        ${address.city}`}
                                    </dd>
                                    <dt>COMPANY NAME</dt>
                                    <dd>{company.name}</dd>
                                    <dt>CATCH PHRASE</dt>
                                    <dd>{company.catchPhrase}</dd>
                                    <dt>BUSINESS</dt>
                                    <dd>{company.bs}</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

UserProfile.propTypes = {
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    routeParams: PropTypes.object.isRequired
};

export default UserProfile;
