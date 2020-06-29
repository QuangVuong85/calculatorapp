import React from 'react';
import {connect} from "react-redux";

import "../App.css";

import {equal, addElem, clear, del} from '../redux/actions';

class Calculator extends React.Component {

    render() {
        const { value, btns, addElem, clear, equal, del } = this.props;

        return (
            <div className="App">
                <div className="value-container">
                    <input type="text" value={value} />
                </div>
                <div className="buttons-container">
                    {console.log(this.props.btns)}
                    {btns.map(function(item, key) {
                        if(item == "Clear"){
                            return(
                                <button onClick={ clear.bind(this) } key={key}>{item}</button>
                            )
                        } else if(item == "="){
                            return(
                                <button onClick={ equal.bind(this, value) } key={key}>{item}</button>
                            )
                        } else if(item == "Delete"){
                            return(
                                <button onClick={ del.bind(this, value) } key={key}>{item}</button>
                            )
                        } else {
                            return(
                                <button onClick={ addElem.bind(this, item) } key={key}>{item}</button>
                            )
                        }
                    })}
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        value: state.value,
        btns: state.btns
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addElem: (text) => {
            dispatch(addElem(text))
        },
        clear: () => {
            dispatch(clear())
        },
        equal: (value) => {
            dispatch(equal(value))
        },
        del: (text) => {
            dispatch(del(text))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);