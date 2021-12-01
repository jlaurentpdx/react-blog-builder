import React, { useState } from 'react';

import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [font, setFont] = useState('architect');

  return (
    <main>
      <Preview {...{ title, subtitle, font }} />
      <Editor {...{ title, subtitle, font, setTitle, setSubtitle, setFont }} />
    </main>
  );
}
