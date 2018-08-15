import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoItem from '../models/TodoItem';
import * as VisibilityFilterActions from '../actions/visibilityFilter';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/constants';

const setActiveLink = (visibilityFilter, filter) => (
  visibilityFilter === filter ? 'btn-outline-primary' : 'btn-outline-secondary'
);

function Footer(props) {
  const { todos, setFilter, visibilityFilter } = props;
  const totalRemainingItems = todos.filter(item => !item.completed).length;

  return (
    <div className="row mt-3">
      <div className="col-md-2">
        <span className="align-middle">
          {totalRemainingItems}
          {' '}
          item
          {todos.length === 1 ? '' : 's'}
          {' '}
          left
        </span>
      </div>
      <div className="col-md-8">
        <div className="row">
          <div className="col">
            <button type="button" className={`btn ${setActiveLink(visibilityFilter, SHOW_ALL)}  mx-1 btn-sm`} onClick={() => setFilter(SHOW_ALL)}>
              All
            </button>
            <button type="button" className={`btn ${setActiveLink(visibilityFilter, SHOW_ACTIVE)}  mx-1 btn-sm`} onClick={() => setFilter(SHOW_ACTIVE)}>
              Active
            </button>
            <button type="button" className={`btn ${setActiveLink(visibilityFilter, SHOW_COMPLETED)}  mx-1 btn-sm`} onClick={() => setFilter(SHOW_COMPLETED)}>
              Completed
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-2 text-right">
        <button type="button" className="btn btn-outline-secondary btn-sm">
          Clear Completed
        </button>
      </div>
    </div>
  );
}

Footer.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.instanceOf(TodoItem)).isRequired,
  setFilter: PropTypes.func.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setFilter: (filter) => {
    switch (filter) {
      case SHOW_ACTIVE:
        dispatch(VisibilityFilterActions.showActive());
        break;
      case SHOW_COMPLETED:
        dispatch(VisibilityFilterActions.showCompleted());
        break;
      default:
        dispatch(VisibilityFilterActions.showAll());
        break;
    }
  },
});

const mapStateToProps = ({ todos, visibilityFilter }) => ({ todos, visibilityFilter });
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
