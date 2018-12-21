/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Color from '../constants/Color';

export default ({ toggle, userName }) => {
  return (
    <div css={root}>
      <Icon onClick={toggle} ><FontAwesomeIcon icon="bars" size="lg" /></Icon>
      <Link css={title} to="/"><h1></h1></Link>
      <nav css={nav}>
        <ul css={ul}>
          { userName && <li css={li}>ログイン中 {userName}</li> }
          <li css={li}>logout</li>
        </ul>
      </nav>
    </div>
  )
}

const root = css`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const Icon = styled.div`
  margin: 20px;
  color: ${Color.gray20};
  cursor: pointer;
  &:hover {
    opacity: 0.6;
    transition: 0.3s;
  }
`
const title = css`
  font-size: 20px;
  color: ${Color.gray30};
  vertical-align: bottom;
  font-weight: 700;
  font-style: italic;
  margin-right: auto;
  text-align: center;
  text-decoration: none;
  &:hover {
    opacity: 0.7;
    transition: 0.3s;
  }
`
const nav = css`
  color: gray;
`
const ul = css`
  display: flex;
  justify-content: space-between;
`
const li = css`
  position: relative;
  display: inline-block;
  margin-right: 40px;
  cursor: pointer;
  &:before {
    position: absolute;
    top: 1.3em;
    left: 0;
    content: "";
    display: inline-block;
    width: 0;
    height: 2px;
    background: ${Color.skyblue};
    transition: 0.4s;
  }
  &:hover:before {
    width: 100%;
  }
`