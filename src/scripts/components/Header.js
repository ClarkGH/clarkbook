import React from 'react';
import styled, { css } from 'react-emotion';

const Nav = styled('nav') `
  align-items: center;
  background: #eee;
  display: flex;
  height: 100px;
  justify-content: space-between;
  width: 100%;
`


export class Header extends React.Component {
  render() {
    return(
      <Nav>
        <h1>Logo</h1>
        <form>
          <table cellSpacing="0" role="presentation">
            <tbody>
              <tr> 
                <td> 
                  <label htmlFor="email">Email</label>
                </td>
                <td> 
                  <label htmlFor="pass">Password</label>
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
      </Nav>
    );
  }
}
