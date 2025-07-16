import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function PaypalButton({ amount, onSuccess, onError }: any) {
  return (
    <PayPalScriptProvider
      options={{
        clientId:
          "Abnne7m0zf1rqeiEiRp19kn-a6JvXeNw9Gh_XbC3I4fB7ZIL1IBTxTMurr7rgPh8mEc4g8lWNM9mCqAe",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{ amount: { value: amount } }],
          });
        }}
        onApprove={(data, actions) => {
          return actions?.order.capture().then(onSuccess);
        }}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
}

export default PaypalButton;
