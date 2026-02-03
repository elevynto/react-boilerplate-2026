import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto p-6 text-center">
      <div className="flex justify-center gap-4">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="h-24 transition-transform hover:scale-110" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="h-24 transition-transform hover:scale-110" alt="React logo" />
        </a>
      </div>
      <h1 className="mt-6 text-4xl font-bold">Vite + React</h1>
      <Card className="mt-6 mx-auto max-w-md">
        <CardHeader>
          <CardTitle>Counter</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center gap-4">
            <Button onClick={() => setCount((count) => count + 1)}>Count is {count}</Button>
            <p className="text-sm text-muted-foreground">
              Edit <code className="font-mono text-sm">src/App.tsx</code> and save to test HMR
            </p>
          </div>
        </CardContent>
      </Card>
      <p className="mt-6 text-muted-foreground">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
