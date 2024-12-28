import React from 'react';
import { Button } from './components/Button';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </div>
  );
}

export default App;