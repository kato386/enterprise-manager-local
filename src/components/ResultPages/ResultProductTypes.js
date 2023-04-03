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
        <div className="h-[385px]  overflow-scroll overflow-x-hidden">
          <table
            className="w-full border rounded  border-collapse table-auto divide-y divide-gray-200
        "
          >
            <thead className="sticky top-0 bg-white text-left ">
              <tr>
                {head.map((h, key) => (
                  <th
                    className="px-6 py-3 text-red-500 text-xs  uppercase tracking-wider"
                    key={key}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {realFormId ? (
                <tr>
                  <td className="px-6 py-4">{enterpriseNames.value}</td>
                  <td className="px-6 py-4">{data.content}</td>
                  <td className="px-6 py-4">{realFormId}</td>
                </tr>
              ) : (
                data.content.map((gateway, key) => (
                  <tr key={key}>
                    <td className="px-6 py-4">{enterpriseNames.value}</td>
                    <td className="px-6 py-4">{gateway}</td>
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
