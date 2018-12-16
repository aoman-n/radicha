/** @jsx jsx */
import { jsx, css } from "@emotion/core";
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
  margin-left: 20px;
  font-style: italic;
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
      <h1 css={title}>らじちゃ！</h1>
      <nav css={nav}>
        <ul css={ul}>
          <li css={li}>mypage</li>
          <li css={li}>logout</li>
        </ul>
      </nav>
    </div>
  )
}