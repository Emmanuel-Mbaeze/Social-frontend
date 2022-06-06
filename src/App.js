// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./component/Header/Header";
// import Home from "./component/Homescreen/Home";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

import React from "react";
import Header from "./component/Header/Header";
import Home from "./component/Homescreen/Home";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
};

export default App;
