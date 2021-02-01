import React  from 'react';

function App() {

  const [cmd, setCmd] = React.useState('');
  const [text, setText] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cmd) {
      const url = "https://raw.githubusercontent.com/pranabdas/cheatsheets/master/" + cmd;
      fetch(url)
      .then((r) => r.text())
      .then((text)  => {
        setText(text);
      }) 
    } else {
      setText('No command entered.');
    }
  };

  return(
    <div className="container">
      <h3>Linux/UNIX command cheatsheets</h3>
      <p>Never forget or confuse another Linux/UNIX command again!</p>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cmd">Enter command: </label>
          <input 
          type="text" 
          id="cmd" 
          name="cmd" 
          value={cmd}
          onChange={(e) => {setCmd(e.target.value.toLowerCase())}}
          ></input>
        </div>
        <br/>
        <p><i>Example: awk, brew, curl, docker, emacs, find, git, ssh, tar, vim etc.</i></p>
        <button className='btn' type="submit">Show cheatsheet</button>
      </form>

      <pre>
        <code>{text}</code>
      </pre>
      <br/>
      <br/>
      <footer>© Copyright {new Date().getFullYear().toString()} <a href="https://pranabdas.github.io/">Pranab Das</a>. All rights reserved.</footer>
    </div>
  );
};

export default App
