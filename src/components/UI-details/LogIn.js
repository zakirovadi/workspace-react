import React, {Component} from 'react';
import './LogIn.scss';

function SignForm (props) {
    return (
        <form>
            <h3>{props.info.header}</h3>
            <input placeholder="Email"/>
            <input placeholder="Password"/>
            <span>{props.info.textUnder}</span>
        </form>
    )
}

function SignImage (props) {
    return (
        <div className="background-image">
            <div className="img img-center">
                <img src={props.info.image} alt="SIGN UP" />
            </div>

            <h2>{props.info.imageText}</h2>
        </div>
    )
}

class LogIn extends Component {

    constructor(props){
        super(props);

        this.state ={
            logInHandler: true,
            logIn: {
                header: 'Sign in to your account',
                textUnder: 'Forgot your password?',
                image: "/images/inspiration/6.jpg",
                imageText: 'Want to have more inspirations?'
            },
            signUp: {
                header: 'Create an account',
                textUnder: 'I agree with terms and conditions',
                image: "/images/inspiration/10.jpg",
                imageText: 'I already have an account'
            }
        }
    }

    styleButtonLogIn = 'active';
    styleButtonSignUp = '';    

    handlerLogIn = () => {      
        this.styleButtonLogIn = 'active';
        this.styleButtonSignUp = '';
        console.log(this.styleButtonSignUp);
        console.log(this.styleButtonLogIn);

        this.setState((state) => {
            return {logInHandler: true}
        })
    }

    handlerSignUp = () => {
        this.styleButtonLogIn = '';
        this.styleButtonSignUp = 'active';

        console.log(this.styleButtonSignUp);
        console.log(this.styleButtonLogIn);

        this.setState((state) => {
            return {logInHandler: false}
        })
    }

    render() {        

        return(
            <div className="overflow">
                <div className="wrap" onClick={this.props.signIn}>
                    <div className="log-in" onClick={(e)=>e.stopPropagation()}>
                        <div className="log-form">
                            {this.state.logInHandler
                                ?<SignForm info={this.state.logIn} />
                                :<SignImage info={this.state.signUp}/>
                            }
                            <button className={this.styleButtonLogIn} onClick={this.handlerLogIn}>LOG IN</button>
                        </div>

                        <div className="sign-form">
                            {this.state.logInHandler
                                ?<SignImage info={this.state.logIn}/>
                                :<SignForm info={this.state.signUp}/>
                            }
                            <button className={this.styleButtonSignUp} onClick={this.handlerSignUp}>SIGN UP</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LogIn;