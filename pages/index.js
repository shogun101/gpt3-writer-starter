import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import { useState } from 'react';


const Home = () => {
  const [userInput, setUserInput] = useState('');
  const onUserChangedText = (event) => {

    setUserInput(event.target.value);
  };
  const [apiOutput, setApiOutput] = useState('')
const [isGenerating, setIsGenerating] = useState(false)

const callGenerateEndpoint = async () => {
  setIsGenerating(true);
  
  console.log("Calling OpenAI...")
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userInput }),
  });

  const data = await response.json();
  const { output } = data;
  console.log("OpenAI replied...", output.text)

  setApiOutput(`${output.text}`);
  setIsGenerating(false);
}
  return (
    <div className="root">
      <Head>
        <title>GPT-3 Writer | buildspace</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
          <h1> <em id='ai'></em> Unleash the power of AI-generated value ladder for your business</h1>
          </div>
          <div className="header-subtitle">
          <h2>Transform your business with a personalized value ladder that's tailored to your unique audience</h2>
          </div>
        </div>
        <div className="prompt-container">
          <textarea 
          placeholder="Enter your Profession..." 
          className="prompt-box"
          value={userInput}
          onChange={onUserChangedText}
          />
            <div className="prompt-buttons">
              
            <a
    className={isGenerating ? 'generate-button loading' : 'generate-button'}
    onClick={callGenerateEndpoint}
  >
    <div className="generate">
    {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
    </div>
  </a>

   

  </div>
  {apiOutput && (
  <div className="output">
    <div className="output-header-container">
      <div className="output-header">
        <h3>Output</h3>
      </div>
    </div>
    <div className="output-content">
      <p>{apiOutput}</p>
    </div>
  </div>
)}
  </div>
      </div>
      <div className="badge-container grow">
        <a
          href="https://twitter.com/akshitvrma"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>built by Akshit</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
