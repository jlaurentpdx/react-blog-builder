import React, { useState } from 'react';

import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('');
  const [font, setFont] = useState('architect');

  return (
    <main>
      <Preview {...{ title, font }} />
      <Editor {...{ title, font, setTitle, setFont }} />
    </main>
  );
}
