/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { NavLink } from 'react-router-dom';

export default () => {
  return (
    <div>
      <ul css={list}>
        <li css={item}>
          <NavLink activeStyle={{ borderBottom: '2px solid #a3ccbe' }} css={roomLink} to="/general">General</NavLink>
        </li>
        <li css={item}>
          <NavLink activeStyle={{ borderBottom: '2px solid #a3ccbe' }} css={roomLink} to="/sample">Sample Room</NavLink>
        </li>
      </ul>
    </div>
  )
}

const list = css`
  display: flex;
  flex-direction: column;
  font-size: 15px;
`

const item = css`
  flex-basis: 40px;
  line-height: 40px;
  padding: 0 10px;
  &:hover {
    border-left: 6px solid #a3ccbe;
    cursor: pointer;
    background: #e6fff6;
    transition: 0.2s;
  }
`

const roomLink = css`
  text-decoration: none;
  color: gray;
  width: 100%;
  height: 100%;
  display: inline-block;
`