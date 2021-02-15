import {connect} from "react-redux"
import {viewsAc} from "../actions/viewsAc"
import React from 'react';

class CountView extends React.Component {
    videoId = '9bZkp7q19f0';
    apiKey = 'AIzaSyBJEyLCG3iTxxB2Dl2FEFeYQYp0QpFPdPY';
    apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${this.videoId}&key=${this.apiKey}`;

    componentDidMount() {
        this.props.axiosData(this.apiUrl)
    }

    render() {
        return (
            <div>
                <h1>PSY - GANGNAM STYLE</h1>
                <span>clip views: {this.props.views.viewCount}</span>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    debugger
    return {
        views: state.viewCount.views
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        axiosData: apiUrl => dispatch(viewsAc(apiUrl))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountView)