import Loading from "../Loading";
import Error from "../Error";

import useFetchParamPostDemo from "../../api/useFetchParamPostDemo";
import ChartGateway from "./ChartGateway";
const ResultGateway = ({ filter, realFormId, enterpriseNames }) => {
  const { data, isPending, error } = useFetchParamPostDemo(
    filter,
    realFormId,
    enterpriseNames
  );
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
          {!realFormId &&
            Object.keys(data.content).map((key) =>
              data.content[key]["gateway-list"] &&
              data.content[key]["gateway-list"].length > 0 ? (
                <ChartGateway
                  key={key}
                  data={data.content[key]["gateway-list"]}
                  enterpriseNames={enterpriseNames.value}
                />
              ) : (
                <div key={key}></div>
              )
            )}

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
              {Object.keys(data.content).map((key) =>
                data.content[key]["gateway-list"] &&
                data.content[key]["gateway-list"].length > 0 ? (
                  data.content[key]["gateway-list"].map((gateway, index) => (
                    <tr key={index} className="text-white">
                      <td className="px-6 py-4">{key}</td>
                      <td className="px-6 py-4">{gateway.value}</td>
                      <td className="px-6 py-4">{gateway.form_id}</td>
                    </tr>
                  ))
                ) : (
                  <tr key={key} className="text-white">
                    <td className="px-6 py-4">{key}</td>
                    <td className="px-6 py-4">Enterprise not found.</td>
                    <td className="px-6 py-4">Enterprise not found.</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ResultGateway;
