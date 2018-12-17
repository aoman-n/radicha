/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from 'react-router-dom';
import './Header.css';

const root = css`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const title = css`
  font-family: Custom;
  font-size: 22px;
  color: #47b347;
  text-shadow: 1px 1px 0 #296629;
  font-weight: bold;
  margin-right: auto;
  margin-left: 40px;
  font-style: italic;
  text-decoration: none;
  &:hover {
    opacity: 0.7;
  }
`

const nav = css`
  color: #808080;
`

const ul = css`
  display: flex;
  justify-content: space-between;
`

const li = css`
  padding-right: 40px;
`

export default () => {
  return (
    <div css={root}>
      <Link css={title} to="/"><h1>らじちゃ！</h1></Link>
      <nav css={nav}>
        <ul css={ul}>
          <li css={li}>mypage</li>
          <li css={li}>logout</li>
        </ul>
      </nav>
    </div>
  )
}