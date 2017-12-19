import React from 'react';
import styled, { css } from 'react-emotion';

const Nav = styled('nav') `
  background: #fef;
  height: 100px;
  width: 100%;
`
const floatL = css`
  float: left;
`

const floatR = css `
  float: right;
`

export class Header extends React.Component {
  render() {
    return(
      <Nav>
        <h1 className={floatL}>Logo</h1>
        <form className={floatR}>
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
      </Nav>
    );
  }
}
