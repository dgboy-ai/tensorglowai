import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [sentence, setSentence] = useState('')
  const [result, setResult] = useState('')

  const analyzeSentiment = () => {
    const text = sentence.toLowerCase()
    
    // Check for negation words
    const isNegated = text.includes('not') || text.includes('never') || text.includes('no')
    
    // Check for sentiment words
    const isPositive = text.includes('good') || text.includes('great') || text.includes('love')
    const isNegative = text.includes('bad') || text.includes('hate') || text.includes('worst')

    if (isNegated && isPositive) {
      // "not good" -> Negative
      setResult('Negative')
    } else if (isNegated && isNegative) {
      // "not bad" -> Positive
      setResult('Positive')
    } else if (isPositive) {
      setResult('Positive')
    } else if (isNegative) {
      setResult('Negative')
    } else {
      setResult('Neutral')
    }
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Understand the sentiment of your content with ease.
          </p>
        </div>
        <div className="sentiment-container">
          <input
            type="text"
            placeholder="Type a sentence..."
            className="sentiment-input"
            value={sentence}
            onChange={(e) => setSentence(e.target.value)}
          />
          <button className="analyze-button" onClick={analyzeSentiment}>
            Analyze Sentiment
          </button>
          {result && (
            <p className="sentiment-result">
              Sentiment: <strong>{result}</strong>
            </p>
          )}
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
