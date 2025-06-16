
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    console.log("Index component mounted successfully");
  }, []);

  console.log("Index component rendering");

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Welcome to Ghar Khana Bazaar</h1>
        <p className="text-xl text-muted-foreground">Your home food marketplace is loading!</p>
        <div className="mt-8">
          <div className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg">
            App is working correctly
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
