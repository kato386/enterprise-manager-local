import Loading from "../Loading";
import Error from "../Error";
import useFetchParam from "../../api/useFetchParam";
import useFetchParamPostDemo from "../../api/useFetchParamPostDemo";

const ResultGateway = ({ filter, realFormId, enterpriseNames }) => {
  const { data, isPending, error } = useFetchParamPostDemo(filter, realFormId);
  const head = ["EnterPrise", "Gateway Name", "Form ID"];

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
        <div className="h-[385px] overflow-scroll overflow-x-hidden">
          <table
            className="w-full border rounded  border-collapse table-auto divide-y divide-gray-200
          "
          >
            <thead className="sticky top-0 bg-white text-left ">
              <tr>
                {head.map((h, key) => (
                  <th
                    className="px-6 py-3 text-red-500 text-xs  uppercase tracking-wider  "
                    key={key}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {realFormId
                ? data.content.demo["gateway-list"].map((gateway, key) => (
                    <tr key={key} className="text-white">
                      <td className="px-6 py-4">{enterpriseNames.value}</td>
                      <td className="px-6 py-4">{gateway.value}</td>
                      <td className="px-6 py-4">{gateway.form_id}</td>
                    </tr>
                  ))
                : data.content.demo["gateway-list"].map((gateway, key) => (
                    <tr key={key} className="text-white">
                      <td className="px-6 py-4">{enterpriseNames.value}</td>
                      <td className="px-6 py-4">{gateway.value}</td>
                      <td className="px-6 py-4">{gateway.form_id}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ResultGateway;
