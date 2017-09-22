import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class NewPost extends Component {
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/">
            Back
          </Link>
        </div>
        New Posts
      </div>
    )
  }
};

function mapStateToProps(state) {
  return { posts: state.posts }
}
export default connect(null, { NewPost })(NewPost)
