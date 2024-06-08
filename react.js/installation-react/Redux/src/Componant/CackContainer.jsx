import React from "react";
import { buy_cake } from "../Redux/Index";
import { connect } from "react-redux";

const CackContainer = (props) => {
  return (
    <div>
      <h1>Num of cake : {props.numOfCake}</h1>
      <div className="flex">
        <button onClick={props.buy_cake} className="btn">click me</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    numOfCake: state.numOfCake,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    buy_cake: () => dispatch(buy_cake()),
  };
};

export default connect(mapStateToProps , mapDispatchToProps)(CackContainer) ;
