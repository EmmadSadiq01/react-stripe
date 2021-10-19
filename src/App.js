import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './components/MyCheckoutForm';
import StripeContainer from './components/StripeContainer';
import "./App.css"

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const App = () => {
  return (
    <StripeContainer/>
  );
};

export default App;