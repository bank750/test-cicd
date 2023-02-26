import React from 'react';
import { useEffect, useState } from 'react';

function Home() {
  const [state, setState] = useState(0);
  const ExecuteScript = () => {
    const element = document.querySelector('.script-javascript');
    if (element) {
      eval(element.innerHTML);
    }
  };
  const iframeLoaded = () => {
    var iFrameID = document.querySelector('#idIframe');
    console.log('document.getElementById()', document.getElementById('idIframe'));
    if (iFrameID) {
      var innerDoc = iFrameID.contentDocument || iFrameID.contentWindow.document;

      console.log('innerDoc', innerDoc);
      iFrameID.width = innerDoc.body.scrollWidth;
      iFrameID.style.height = innerDoc.body.scrollHeight + 'px';
      // Note that the iframe must be on the same domain as the parent page for this code to work due to security restrictions.
    }
  };
  useEffect(() => {
    ExecuteScript();
  }, [state]);
  return (
    <>
      <div
        className="script-javascript"
        dangerouslySetInnerHTML={{ __html: `var a=10; var b=${state}; console.log('dd', a+b);` }}
      />
      <iframe
        src="https://www.tutorialspoint.com/how-to-adjust-the-width-and-height-of-an-iframe-to-fit-with-content-in-it-html"
        width="400"
        height="300"
        onLoad={() => iframeLoaded()}
      />
      <iframe src="http://localhost:3000/about" id="idIframe" onLoad={() => iframeLoaded()} />

      <button onClick={() => setState(1)}>test1</button>
      <button onClick={() => setState(2)}>test2</button>
    </>
  );
}

export default Home;
