import Loading from "../Loading";
import Error from "../Error";
import useFetchParam from "../../api/useFetchParam";
import useFetchParamPostDemo from "../../api/useFetchParamPostDemo";

const ResultGateway = ({ filter, realFormId, enterpriseNames }) => {
  const { data, isPending, error } = useFetchParamPostDemo(filter, realFormId);
  const head = ["EnterPrise", "GatewayName", "FormID"];

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
              {realFormId
                ? data.content.demo["gateway-list"].map((gateway, key) => (
                    <tr key={key}>
                      <td className="p-2">{enterpriseNames.value}</td>
                      <td className="p-2">{gateway.value}</td>
                      <td className="p-2">{gateway.form_id}</td>
                    </tr>
                  ))
                : data.content.demo["gateway-list"].map((gateway, key) => (
                    <tr key={key}>
                      <td className="p-2">{enterpriseNames.value}</td>
                      <td className="p-2">{gateway.value}</td>
                      <td className="p-2">{gateway.form_id}</td>
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
