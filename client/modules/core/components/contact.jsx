import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{margin: '0 15px'}}>
        <form>
          <TextField
            ref="name"
            floatingLabelText="Name"
            required
          /><br />
          <TextField
            ref="email"
            floatingLabelText="Email"
            required
          /><br />
          <TextField
            ref="subject"
            floatingLabelText="Subject"
            required
          /><br />
          <TextField
            ref="message"
            floatingLabelText="Message"
            multiline={true}
            rows={3}
            required
          /><br />
          <RaisedButton
            label="Send"
            primary={true}
          />
        </form>
      </div>
    );
  }
}

export default Contact;
