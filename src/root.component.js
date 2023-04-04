import { BrowserRouter } from 'react-router-dom';
import App from './App.js'
export default function Root(props) {
  return <section>
    <BrowserRouter>
    <  App />
    </BrowserRouter>
    </section>;
}
