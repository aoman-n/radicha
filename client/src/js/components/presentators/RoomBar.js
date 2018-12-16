/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const list = css`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`

const item = css`
  color: gray;
  flex-basis: 40px;
  line-height: 40px;
  padding: 0 10px;
  &:hover {
    background: #a3ccbe;
    cursor: pointer;
  }
`

export default () => {
  return (
    <div>
      <ul css={list}>
        <li css={item}>General</li>
        <li css={item}>Sample Room</li>
      </ul>
    </div>
  )
}