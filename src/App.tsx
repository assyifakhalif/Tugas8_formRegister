import { Card, CardContent } from "@/components/ui/card";
import { APITester } from "./APITester";
import "@/public/styles/globals.css";

import logo from "@/public/images/logo.svg";
import reactLogo from "@/public/images/react.svg";
import { RegisterForm } from "@/components/ui/shared/form/RegisterForm";

export function App() {
  return (
    <div className="container mx-auto p-8 text-center relative z-10">
      <RegisterForm />
    </div>
  );
}

export default App;
