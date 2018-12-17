/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Color from '../constants/Color';

export default () => {
  return (
    <div>
      <ul css={list}>
        <li css={item}>
          <NavLink activeStyle={{ borderBottom: `2px solid ${Color.green20}` }} css={roomLink} to="/general">
            General
            <Icon><FontAwesomeIcon icon="volume-up" /></Icon>
          </NavLink>
        </li>
        <li css={item}>
          <NavLink activeStyle={{ borderBottom: `2px solid ${Color.green20}` }} css={roomLink} to="/sample">Sample Room</NavLink>
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
    border-left: 6px solid ${Color.green30};
    cursor: pointer;
    background: ${Color.green10};
    transition: 0.2s;
  }
`

const Icon = styled.div`
  float: right;
  margin-right: 5px;
`

const roomLink = css`
  text-decoration: none;
  color: gray;
  width: 100%;
  height: 100%;
  display: inline-block;
`