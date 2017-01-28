import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  handleSubjectChange(e) {
    this.setState({
      subject: e.target.value
    });
  }

  handleMessageChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // let {name} = this.refs
    // console.log(name.input.value, 'name');
    // name.input.value = "";
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
              onChange={this.handleNameChange.bind(this)}
              value={this.state.name}
              required
            /><br />
            <TextField
              ref="email"
              floatingLabelText="Email"
              onChange={this.handleEmailChange.bind(this)}
              fullWidth={true}
              required
            /><br />
            <TextField
              ref="subject"
              floatingLabelText="Subject"
              onChange={this.handleSubjectChange.bind(this)}
              fullWidth={true}
              required
            /><br />
            <TextField
              ref="message"
              floatingLabelText="Message"
              onChange={this.handleMessageChange.bind(this)}
              multiLine={true}
              fullWidth={true}
              rows={3}
              required
            /><br />
            <RaisedButton
              label="Send"
              primary={true}
              fullWidth={true}
              onClick={this.handleSubmit.bind(this)}
            />
          </form>
        </Paper>
      </div>
    );
  }
}

export default Contact;
