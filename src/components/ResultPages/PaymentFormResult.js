import Loading from "../Loading";
import useFetchParam from "../../api/useFetchParam";
import Error from "../Error";
const PaymentFormResult = ({ filter, enterpriseNames }) => {
  const { data, isPending, error } = useFetchParam(filter);

  const head = ["EnterPrise", "Number Of Payment Forms"];

  return (
    <div>
      {error && (
        <div className="mx-auto mt-4">
          <Error message={error} />
        </div>
      )}
      {!error && isPending && (
        <div className="h-full">
          <Loading />
        </div>
      )}
      {!error && !isPending && (
        <div className="h-[500px] bg-gray-200 overflow-scroll overflow-x-hidden">
          <table
            className="w-full border rounded  border-collapse table-auto divide-y divide-gray-700
        "
          >
            <thead className="sticky top-0 bg-white text-left ">
              <tr>
                {head.map((h, key) => (
                  <th
                    className="px-6 py-3 text-blue-700 text-xs  uppercase tracking-wider  "
                    key={key}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              <tr className="group text-black border border-gray-700">
                <td className="px-6 py-4 group-hover:bg-purple-200">
                  {enterpriseNames.value}
                </td>
                <td className="px-6 py-4 group-hover:bg-purple-200">
                  {data.content}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PaymentFormResult;
