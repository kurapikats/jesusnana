import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{margin: '0 15px'}}>
        <Paper zDepth={2} style={{margin: "20px 5px 10px 5px", padding: 10, width: 400}}>
          <h4>Contact Onin</h4>
          <form>
            <TextField
              ref="name"
              floatingLabelText="Name"
              fullWidth={true}
              required
            /><br />
            <TextField
              ref="email"
              floatingLabelText="Email"
              fullWidth={true}
              required
            /><br />
            <TextField
              ref="subject"
              floatingLabelText="Subject"
              fullWidth={true}
              required
            /><br />
            <TextField
              ref="message"
              floatingLabelText="Message"
              multiLine={true}
              fullWidth={true}
              rows={3}
              required
            /><br />
            <RaisedButton
              label="Send"
              primary={true}
              fullWidth={true}
            />
          </form>
        </Paper>
      </div>
    );
  }
}

export default Contact;
