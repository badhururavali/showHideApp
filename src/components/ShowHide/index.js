import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstName: false}

  ShowHideFirstName = () => {
    const {isFirstName} = this.state
    if (isFirstName === true) {
      this.setState({isFirstName: false})
    } else {
      this.setState({isFirstName: true})
    }
  }

  ShowHideLastName = () => {
    const {isLastName} = this.state
    if (isLastName === true) {
      this.setState({isLastName: false})
    } else {
      this.setState({isLastName: true})
    }
  }

  render() {
    const {isFirstName, isLastName} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>

        <div className="button-container">
          <div className="container">
            <button
              type="button"
              className="firstName"
              onClick={this.ShowHideFirstName}
            >
              Show/Hide FirstName
            </button>

            {isFirstName ? (
              <div className="name-container">
                <p className="name">Joe</p>
              </div>
            ) : (
              ''
            )}
          </div>

          <div className="container">
            <button
              type="button"
              className="firstName"
              onClick={this.ShowHideLastName}
            >
              Show/Hide LastName
            </button>
            {isLastName ? (
              <div className="name-container">
                <p className="name">Jonas</p>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
