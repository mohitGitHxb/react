import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import Comments from "./components/comments/Comments";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<AllQuotes />}>


        </Route>
        <Route path="quotes" element={<AllQuotes />}>
          <Route path=":quoteId" element={<QuoteDetail />}>
            <Route path="comments" element={<Comments />} />
          </Route>
        </Route>

        <Route path="/new-quote" element={<NewQuote />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
