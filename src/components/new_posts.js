import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class NewPost extends Component {
  renderField(field) {
    const { meta: { touched, error} } = field;
    const className = `form-group ${touched && error ? 'has-danger': ''}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error: ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    //this === component
    console.log(values);
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/">
            Back
          </Link>
        </div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title"
            name="title"
            component={ this.renderField }
          />
          <Field
            label="Categories"
            name="categories"
            component={ this.renderField }
          />
          <Field
            label="Post Content"
            name="content"
            component={ this.renderField }
          />
          <button type="submit" className="btn btn-primary">Submit </button>
          <Link className="btn btn-danger" to="/">Cancel</Link>
        </form>
      </div>
    )
  }
};

function validate(values) {
// console.log(values) -> {title: 'asdf', categories: 'asdf', content: 'asdf'}
  const errors = {};
  // use name property from Field component, they must match in obj assignment
  //validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (values.title && values.title.length < 3) {
    errors.title = "Title must be at least 3 characters!";
  }
  if (!values.categories) {
    errors.categories = "Enter some tags/categories!";
  }
  if (!values.content) {
    errors.content = "Enter some content!";
  }
  //if errors is empty, form is fine to submit
  //if errors has any properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate, // previously-- validate: validate
  form: 'PostsNewForm'
 })(
   connect(null, { createPost })(NewPost)
  );
