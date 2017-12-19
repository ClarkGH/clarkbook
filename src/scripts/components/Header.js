import React from 'react';

export class Header extends React.Component {
  render() {
    return(
      <nav>
        <h1 className="logo">Logo</h1>
        <form>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Password:
            <input type="password" minLength="8" maxLength="32"/>
          </label>
          <a href="#">Forgot Password?</a>
          <input type="submit" value="Submit"/>
        </form>
      </nav>
    );
  }
}
