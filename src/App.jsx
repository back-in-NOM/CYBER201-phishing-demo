import { useState } from 'react'
import './App.css'

// SVG Icons for the links
const PersonAddIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M10.164 14.786H6.518c-.9 0-1.647.754-1.647 1.711v3.76c0 .41-.34.743-.747.743h-.036a.749.749 0 0 1-.747-.744v-3.759c0-1.774 1.42-3.211 3.177-3.211h3.646c.898 0 .898 1.5 0 1.5zM3.341 20.25c0-.414.346-.75.751-.75h12.475c.415 0 .752.333.752.75 0 .414-.346.75-.752.75H4.092a.749.749 0 0 1-.751-.75zm9.318-6.247c0-.414.344-.75.753-.75h6.494a.75.75 0 0 1 .753.75c0 .414-.344.75-.753.75h-6.494a.75.75 0 0 1-.753-.75zm4 4a.756.756 0 0 1-.75-.753v-6.495a.75.75 0 0 1 .75-.752c.414 0 .75.344.75.752v6.495a.75.75 0 0 1-.75.753zM12 11.783c-2.495 0-4.473-1.986-4.473-4.392C7.527 4.986 9.505 3 12 3s4.473 1.986 4.473 4.391c0 2.406-1.978 4.392-4.473 4.392zM12 4.5c-1.632 0-2.943 1.296-2.943 2.891 0 1.596 1.311 2.892 2.943 2.892 1.632 0 2.943-1.296 2.943-2.892C14.943 5.796 13.632 4.5 12 4.5z"/>
  </svg>
)

const HelpIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M8.772 9.672h1.336c.041-.557.24-.999.597-1.324.357-.326.83-.489 1.418-.489.584 0 1.049.16 1.395.477.346.318.52.719.52 1.203 0 .417-.097.766-.29 1.047-.192.281-.515.56-.968.836-.537.318-.933.664-1.188 1.039-.255.375-.38.82-.375 1.336v.719h1.367v-.508c0-.412.089-.749.266-1.012.177-.263.513-.54 1.008-.832.5-.302.897-.673 1.191-1.113.294-.44.442-.968.442-1.582 0-.808-.306-1.48-.918-2.02-.612-.539-1.41-.808-2.395-.808-1.099 0-1.93.294-2.496.882-.565.589-.868 1.305-.91 2.149zm3.234 8.469c.318 0 .577-.102.778-.305.2-.203.3-.464.3-.781 0-.323-.1-.586-.3-.79-.2-.203-.46-.304-.778-.304-.317 0-.578.101-.781.305-.203.203-.305.466-.305.789 0 .317.102.578.305.78.203.204.464.306.781.306zM12 20.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17zm0 1.5C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
)

const LanguageIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.251 15.256c-.992-1-2.413-2.37-2.719-2.662l.3-.334c.933-1.05 1.566-1.906 2.197-3.038.539-.968 1.049-2.108 1.567-3.522H17.5V4.2h-7.25V2h-1.5v2.2H1.5v1.5h11.494c-.425 1.106-.843 2.015-1.275 2.792-.572 1.027-1.142 1.797-2.009 2.772l-.22.246C8.33 10.24 7.508 9.1 7.01 8h-1.62c.549 1.509 1.565 2.975 3.081 4.618a84.95 84.95 0 0 1-1.727 1.754l-.231.23a213.472 213.472 0 0 1-3.24 3.128l1.03 1.091a130.917 130.917 0 0 0 1.02-.972c.764-.733 1.529-1.475 2.243-2.18l.234-.232a87.831 87.831 0 0 0 1.716-1.74c.457.439 2.313 2.23 3.146 3.098l.59-1.539zM20.707 22h1.967l-4.325-11.978h-2.008L12.016 22h1.934l1.096-3.237h4.565L20.707 22zm-3.404-9.986h.05l1.785 5.255h-3.62l1.785-5.255z"/>
  </svg>
)

function App() {
  const [username, setUsername] = useState('')

  return (
    <>
      {/* Header */}
      <header className="header">
        <div style={{ display: 'flex' }}>
          <div style={{ backgroundColor: 'rgb(0, 125, 165)', height: '74px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '56px', padding: '0px', margin: '0px' }}>
            <img className='header-chad' role="presentation" src="/images/chad.png" alt="" style={{ margin: '0px', padding: '0px' }} height="36" />
          </div>
          <img role="presentation" src="/images/blueRays.svg" alt="" style={{ margin: '0px', padding: '0px' }} height="74" width="48" />
          <a href="https://www.churchofjesuschrist.org/?lang=eng" style={{ display: 'flex', alignItems: 'center' }}>
            <img role="presentation" src="/images/logo.png" alt="The Church of Jesus Christ of Latter-day Saints" style={{ margin: '0px', padding: '0px' }} height="74" />
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px' }}>
          <button aria-label="Select language" type="button" className="eden-button-a11y" style={{ display: 'flex', alignItems: 'center', gap: '8px', border: 'none', background: 'none', cursor: 'pointer' }}>
            <LanguageIcon />
            <span>English</span>
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="main">
        <div className="sign-in-card">
          <div className="card-header">
            <h1 className="card-heading">Sign In</h1>
          </div>

          <div className="form-group">
            <label className="form-label">Username</label>
            <div className="form-input-wrapper">
              <input
                type="text"
                className="form-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
              />
            </div>
          </div>

          <button className="btn-next" disabled={!username.trim()}>
            Next
          </button>

          <p className="terms-text">
            By proceeding to login I agree to the{' '}
            <a href="#" target="_blank" rel="noopener noreferrer">Terms of Use (Updated 2021-04-13)</a>
            {' '}and have read the{' '}
            <a href="#" target="_blank" rel="noopener noreferrer">Privacy Notice (Updated 2021-04-06)</a>.
          </p>

          <div className="links-section">
            <button className="link-button">
              <span className="link-icon">
                <PersonAddIcon />
              </span>
              Create a new account
            </button>
            <button className="link-button">
              <span className="link-icon">
                <HelpIcon />
              </span>
              I forgot my username or password
            </button>
          </div>
        </div>

        <div className="chad-container">
          <img src="/images/chad.png" alt="" className="chad-image" />
        </div>
      </main>

    </>
  )
}

export default App
