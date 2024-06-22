import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setVisibilityFilter } from "../actions";

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.visibleFilter === ownProps.filter,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
    };
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export { FilterLink };