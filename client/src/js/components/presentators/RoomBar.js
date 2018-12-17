/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from 'react-router-dom';

const list = css`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  /* align-items: center; */
`

const item = css`
  flex-basis: 40px;
  line-height: 40px;
  padding: 0 10px;
  &:hover {
    /* background: #a3ccbe; */
    border-left: 6px solid #a3ccbe;
    cursor: pointer;
    background: #e6fff6;
  }
`

const roomLink = css`
  text-decoration: none;
  color: gray;
  width: 100%;
  height: 100%;
  display: inline-block;
`

export default () => {
  return (
    <div>
      <ul css={list}>
        <li css={item}><Link css={roomLink} to="/general">General</Link></li>
        <li css={item}><Link css={roomLink} to="/sample">Sample Room</Link></li>
      </ul>
    </div>
  )
}