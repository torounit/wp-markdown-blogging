import React from 'react'
import ReactCodemirror from 'react-codemirror'
import 'codemirror/mode/markdown/markdown'

const options = {
	lineNumbers: false,
	mode: 'markdown',
	lineWrapping: true,
	styleActiveLine: true,
	matchBrackets: true
}

const Codemirror = ({  content = '' , onChangeContent } ) => (
	<ReactCodemirror value={content} onChange={onChangeContent} options={options} />
);

export default Codemirror;
