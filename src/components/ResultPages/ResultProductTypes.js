import Loading from "../Loading";
import useFetchParam from "../../api/useFetchParam";
import Error from "../Error";
const ResultProductTypes = ({ filter, realFormId, enterpriseNames }) => {
  const { data, isPending, error } = useFetchParam(filter, realFormId);
  const head = realFormId
    ? ["EnterPrise", "Product Type", "Form ID"]
    : ["EnterPrise", "Product Type"];
  return (
    <div>
      {error && (
        <div className=" mx-auto mt-4">
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
                    className="px-6 py-3 text-blue-700 text-xs  uppercase tracking-wider"
                    key={key}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {realFormId ? (
                <tr className="text-black group ">
                  <td className="px-6 py-4 group-hover:bg-purple-200">
                    {enterpriseNames.value}
                  </td>
                  <td className="px-6 py-4 group-hover:bg-purple-200">
                    {data.content}
                  </td>
                  <td className="px-6 py-4 group-hover:bg-purple-200">
                    {realFormId}
                  </td>
                </tr>
              ) : (
                data.content.map((gateway, key) => (
                  <tr key={key} className="text-black group ">
                    <td className="px-6 py-4 group-hover:bg-purple-200">
                      {enterpriseNames.value}
                    </td>
                    <td className="px-6 py-4 group-hover:bg-purple-200">
                      {gateway}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ResultProductTypes;
