/** @jsx React.DOM */

var React = require('react');

var Index = module.exports = React.createClass({
  render: function() {
    return (
      <div className="text-center">
        <p>You're not in a system that supports automated LTI autentication.</p>
        <p>This is likely due to the app not being launched with an LMS iframe.</p>
      </div>
    );
  }
});
