import React from 'react';

export class Header extends React.Component {
  render() {
    return(
      <nav>
        <h1 className="logo">Logo</h1>
        <form>
          <table cellSpacing="0" role="presentation">
            <tbody>
              <tr> 
                <td> 
                  <label for="email">Email</label>
                </td>
                <td> 
                  <label for="pass">Password</label>
                </td>
              </tr>
              <tr> 
                <td> 
                  <input type="email" name="email" id="email" tabIndex="1"/>
                </td>
                <td> 
                  <input type="password" name="pass" id="pass" tabIndex="2"/>
                </td>
                <td> 
                  <input type="submit" name="login" id="loginButton"/>
                </td>                
              </tr>
              <tr>
                <td></td>
                <td>
                  <div>
                    <a href="#">Forgot Account?</a>
                  </div>
                </td>                
              </tr>
            </tbody>
          </table>
        </form>
      </nav>
    );
  }
}
