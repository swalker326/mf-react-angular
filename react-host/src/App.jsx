import React, { useEffect, useState } from 'react';

const AngularCounter = React.lazy(() => import('angularRemote/CounterComponent').then(module => {
  return { default: module.CounterComponent };
}));

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Ensure the custom element is defined
    import('angularRemote/CounterComponent');
  }, []);

  const handleCountChange = (event) => {
    setCount(event.detail);
  };

  return (
    <div>
      <h1>React Host</h1>
      <React.Suspense fallback="Loading Angular Component...">
        <AngularCounter
          title="My Angular Counter"
          count={count}
          onCountChange={handleCountChange}
        />
      </React.Suspense>
      <p>Current count in React: {count}</p>
    </div>
  );
}

export default App;
