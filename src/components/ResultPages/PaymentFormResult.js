import Loading from "../Loading";
import useFetchParam from "../../api/useFetchParam";

const PaymentFormResult = ({ filter, enterpriseNames }) => {
  const { data, isPending, error } = useFetchParam(filter);

  const head = ["EnterPrise", "Number Of Payment Forms"];

  return (
    <div>
      {error && (
        <div className="">
          {error && (
            <h4 className="text-white text-4xl">
              {error + " accured."}
              <br />
            </h4>
          )}
        </div>
      )}
      {!error && isPending && (
        <div className="h-full">
          <Loading />
        </div>
      )}
      {!error && !isPending && (
        <div className="h-[385px] p-2 overflow-scroll overflow-x-hidden">
          <table
            className="w-full border rounded relative
        "
          >
            <thead>
              <tr>
                {head.map((h, key) => (
                  <th
                    className="text-red-200 p-2 text-left text-lg font-semibold sticky top-0"
                    key={key}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">{enterpriseNames.value}</td>
                <td className="p-2">{data.content}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PaymentFormResult;
