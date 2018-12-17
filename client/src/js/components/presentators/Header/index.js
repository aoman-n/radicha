/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from '@emotion/styled'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => {
  return (
    <div css={root}>
      <Icon><FontAwesomeIcon icon="bars" size="lg" /></Icon>
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

const root = css`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const Icon = styled.div`
  margin: 20px;
  color: gray;
  cursor: pointer;
`

const title = css`
  font-size: 20px;
  color: gray;
  vertical-align: bottom;
  font-weight: 700;
  font-style: italic;
  margin-right: auto;
  text-align: center;
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
    background: #34BBF3;
    transition: 0.4s;
  }
  &:hover:before {
    width: 100%;
  }
`