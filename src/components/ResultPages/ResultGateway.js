import Loading from "../Loading";
import Error from "../Error";
import Table from "./Table";
import useFetchParamPostDemo from "../../api/useFetchParamPostDemo";
import ChartGateway from "./ChartGateway";
import { useState } from "react";
const ResultGateway = ({ filter, realFormId, enterpriseNames }) => {
  const { data, isPending, error } = useFetchParamPostDemo(
    filter,
    realFormId,
    enterpriseNames
  );
  const head = ["EnterPrise", "Gateway Name", "Form ID"];

  const controls = {
    control_stripeCheckout: "Stripe Checkout",
    control_paypalcomplete: "Paypal Business(complete)",
    control_paymentmethods: "Paypal Business(methods)",
    control_square: "Square",
    control_stripe: "Stripe",
    control_authnet: "Authorize.net",
    control_bluesnap: "BlueSnap",
    control_braintree: "Braintree",
    control_cardconnect: "CardConnect",
    control_chargify: "Chargify",
    control_cybersource: "CyberSource",
    control_eway: "Eway",
    control_firstdata: "First Data",
    control_moneris: "Moneris",
    control_payjunction: "PayJunction",
    control_paypalpro: "Paypal Pro",
    control_worldpayus: "Worldpay US(PCI)",
    control_paysafe: "Paysafe",
    control_square: "Cashapp pay",
    control_iyzico: "Iyzico",
    control_paypalcomplete: "Venmo(complete)",
    control_paymentmethods: "Venmo(methods)",
    control_paypal: "Paypal Personel",
    control_echeck: "eCheck.Net",
    control_mollie: "Mollie",
    control_worldpay: "WorldPay UK",
    control_bluepay: "BluePay",
    control_gocardless: "GoCardless",
    control_payu: "PayU",
    control_paypalInvoicing: "Paypal Invoicing",
    control_payfast: "Payfast",
    control_sofort: "Sofort",
    control_pagseguro: "PagSeguro",
    control_stripeACH: "Stripe ACH Manual",
    control_stripeACHManual: "Stripe ACH Manual2",
    control_2co: "2Checkout",
    control_paymentwall: "Paymentwall",
    control_skrill: "Skrill",
    control_paypalSPB: "Paypal Checkout",
    control_paypalexpress: "Paypal Express(Not listed)",
    control_payment: "Payment",
  };

  return (
    <div className="">
      {error && (
        <div className="max-w-3xl mx-auto mt-4">
          <Error message={error} />
        </div>
      )}
      {!error && isPending && (
        <div className="h-full">
          <Loading />
        </div>
      )}

      {!error && !isPending && (
        <div className="h-[500px] overflow-scroll overflow-x-hidden">
          {!realFormId &&
            Object.keys(data.content).map((key) =>
              data.content[key]["gateway-list"] &&
              data.content[key]["gateway-list"].length > 0 ? (
                <ChartGateway
                  key={key}
                  data={data.content[key]["gateway-list"]}
                  enterpriseNames={enterpriseNames.value}
                  controls={controls}
                />
              ) : (
                <div key={key}></div>
              )
            )}
          <Table head={head} data={data} controls={controls} />
        </div>
      )}
    </div>
  );
};

export default ResultGateway;
