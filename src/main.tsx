import { createRoot } from "react-dom/client"
import App from "./AppWithSignal.tsx"
// import App from "./AppWithoutSignal.tsx";

createRoot(document.getElementById("root")!).render(<App />)
