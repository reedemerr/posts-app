import { connect } from 'react-redux';
import * as userActions from '../actions/userActions';
import UserProfile from '../components/UserProfile';

function mapStateToProps(store) {
    const { user } = store;
    return {
        user
    };
}

export default connect(mapStateToProps, userActions)(UserProfile);
