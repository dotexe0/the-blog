import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewPost extends Component {
  render() {
    return (
      <div>
        New Posts
      </div>
    )
  }
};

function mapStateToProps(state) {
  return { posts: state.posts }
}
export default connect(null, { NewPost })(NewPost)
