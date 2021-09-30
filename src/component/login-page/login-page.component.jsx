import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { newLogin } from '../../actions/index';
import { Label, Button } from 'semantic-ui-react';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    const isAutorized = this.props.Record.filter(element => (element.username === username && element.password === password))
    console.log('isAutorized', isAutorized)
    if (isAutorized.length) {
      this.props.createLogin(isAutorized);
      if (isAutorized[0].id === 1) {
        this.props.history.push('/home');
        localStorage.setItem("isLogin", "true");
      }
      else {
        this.props.history.push('/login');
      }
    }
    else {
      this.setState({ error: 'Please check your username OR password' })
    }
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value, error: '' });
  };

  componentDidMount() {
    if (localStorage.getItem("isLogin")) {
      if (localStorage.getItem("isDoctor"))
        this.props.history.push('/DoctorhomePage')
      else
        this.props.history.push('/homePage')
    }
  }

  render() {
    const customStyles = {
      backgroundStyle: {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "height": "100vh",
        "background": "url(https://motionarray.imgix.net/preview-141192-Mi0B7jCQQ8-high_0001.jpg)",
        "backgroundSize": "cover"
      },
      logo: {
        filter: "invert(70%)drop-shadow(5px 10px 3px #53515142)",
        height: "5vh",
      }
    }
    return (
      <div style={customStyles.backgroundStyle}>
        <div style={{ width: '40vw' }}>
          <div className="text-center">
            <div>
              <img style={customStyles.logo} alt="shaadi" src="https://img2.shaadi.com/assests/2021/images/Matrimony-Service-by-Shaadi.com.png" />
            </div>
          </div>
          <div className='sign-in container card mt-5 p-4' style={{ borderRadius: '10px' }}>
            <div className="text-center h2 mb-4">Login form</div>
            <div className="my-2">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <Label className="mb-2" color='black' ribbon>
                    Username
                  </Label>
                  <input type="text" className="form-control" name="username" onChange={this.handleChange} id="exampleInputUsername1" placeholder="Enter username" autoComplete="off" />
                </div>
                <div className="shared-errorColor">
                  {this.state.error}
                </div>
                <div className="form-group">
                  <Label className="mb-2" color='black' ribbon>
                    Password
                  </Label>
                  <input type="password" className="form-control" name="password" onChange={this.handleChange} id="exampleInputPassword1" placeholder="Enter password" autoComplete="off" />
                </div>
                <Button type="submit" color={"black"} className="mb-2">Submit</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Record: state.Record
  }
}

const dispatchStateToProps = {
  createLogin: newLogin
}


export default withRouter(connect(mapStateToProps, dispatchStateToProps)(LoginPage));