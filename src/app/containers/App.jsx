import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Loader from '../components/common/Loader';
import Navbar from '../components/common/Navbar';

function App(props) {
    return (
        <div>
            {props.loader.loading && <Loader />}
            <Navbar />
            {props.children}
        </div>
    );
}

App.propTypes = {
    loader: PropTypes.object,
    children: PropTypes.object
};

function mapStateToProps(store) {
    const { loader } = store;
    return {
        loader
    };
}

export default connect(mapStateToProps)(App);
