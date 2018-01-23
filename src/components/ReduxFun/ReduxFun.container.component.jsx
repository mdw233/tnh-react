import {connect} from 'react-redux';

import {reduxFun} from '../../services/fun/fun.actions'
import PresentationComponent from './ReduxFun.presentation.component'

const changeScreamIfYouWanna = (scream) => {
    var ts = Math.round(new Date());
    console.log('ts', ts); 
    if (ts % 2 === 0) {
        return "I CHANGED IT AHHHHHHHH";
    }

    return scream;
}

const mapStateToProps = state => {
    return {
        text: changeScreamIfYouWanna(state.scream)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onScreamClick: () => {
            console.log('ownProps', ownProps);
            dispatch(reduxFun());
        }
    }
}

const ContainerComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(PresentationComponent)

export default ContainerComponent