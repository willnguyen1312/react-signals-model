import { createRoot } from "react-dom/client";
import App from "./AppWithoutSignal.tsx";
// import App from "./AppWithSignalUnoptimized.tsx";
// import App from "./AppWithSignal.tsx";

import { setDebugOptions } from "@preact/signals-debug";

// Configure debug options
setDebugOptions({
  grouped: true, // Group related updates in console output
  enabled: true, // Enable/disable debugging
  spacing: 2, // Number of spaces for nested update indentation
});

Promise.all([
  import("@preact/signals-devtools-ui"),
  import("@preact/signals-devtools-adapter"),
  // @ts-ignore
  import("@preact/signals-devtools-ui/styles"),
]).then(([{ mount }, { createDirectAdapter }]) => {
  const container = document.getElementById("signals-devtools");
  if (container) {
    const adapter = createDirectAdapter();
    // mount({ adapter, container }).then(() => {
    createRoot(document.getElementById("root")!).render(<App />);
    // });
  }
});
