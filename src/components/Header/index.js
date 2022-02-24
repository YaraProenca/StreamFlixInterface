import React from 'react';
import './Header.css';


export default ({black}) => {
  return (
    <header className={black ? 'stream_header' : ''}>
      <div className='header_logo'>
        <a href='/'>
          <img className='header_img' src='https://cdn.discordapp.com/attachments/929862302537232484/945873353716170812/logo.png' alt='StreamFlix' />
        </a>
      </div>

      <div className='header_user'>
        <a href='/'>
          <img className='header_user' src='https://cdn.discordapp.com/attachments/929862302537232484/945875225516597299/penguin.png' alt='User' />
        </a>
      </div>
    </header>
  )
}