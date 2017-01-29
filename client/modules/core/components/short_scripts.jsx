import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

class ShortScripts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const codeString =
`# my custom atom movement keys, ala vim.
  'atom-text-editor':
    'alt-h': 'core:move-left'
    'alt-j': 'core:move-down'
    'alt-k': 'core:move-up'
    'alt-l': 'core:move-right'

    'alt-shift-h': 'core:select-left'
    'alt-shift-j': 'core:select-down'
    'alt-shift-k': 'core:select-up'
    'alt-shift-l': 'core:select-right'
`;

    return (
      <div style={{margin: '0 10px'}}>
        <div>
          <SyntaxHighlighter
            language='javascript'
            style={docco}
            >
              {codeString}
            </SyntaxHighlighter>
        </div>
      </div>
    );
  }
}

export default ShortScripts;
