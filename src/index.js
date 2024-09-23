import React from 'react';
import { createRoot } from 'react-dom/client';
import GifExpertApp from './GifExpertApp';
import './index.css';

const container = document.getElementById("root");
const divRoot = createRoot(container);
divRoot.render(<GifExpertApp /> );



