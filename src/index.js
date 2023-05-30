import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import HomepageHeader from './pages/homepage/homepageHeader';
import HomepageFooter from './pages/homepage/homepageFooter';
import HomepageMain from './pages/homepage/homepageMain';
import { BrowserRouter,Route, Routes } from 'react-router-dom';


// export function App(){
//   <BrowserRouter>
//            <Routes>
//                 <Route  path='/home' element={<HomepageHeader/>} />
//            </Routes>
// </BrowserRouter>
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <HomepageHeader/>
     <HomepageMain/>
     <HomepageFooter/>
     {/* <BrowserRouter>
        <App/>
     </BrowserRouter> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
