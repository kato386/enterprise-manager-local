const Table = ({ head, data, controls }) => {
  function replaceValue(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (controls[arr[i].value]) {
        arr[i].value = controls[arr[i].value];
      }
    }
    return arr;
  }
  function groupArrayByValueAlphabetically(arr) {
    const groupedValues = {};

    arr.forEach((obj) => {
      const groupKey = obj.value.charAt(0).toUpperCase();

      if (groupedValues[groupKey]) {
        groupedValues[groupKey].push(obj);
      } else {
        groupedValues[groupKey] = [obj];
      }
    });

    const sortedGroups = Object.keys(groupedValues).sort();

    const result = [];

    sortedGroups.forEach((groupKey) => {
      result.push(
        ...groupedValues[groupKey].sort((a, b) =>
          a.value.localeCompare(b.value)
        )
      );
    });

    return replaceValue(result);
  }

  return (
    <div>
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
          {Object.keys(data.content).map((key) =>
            data.content[key]["gateway-list"] &&
            data.content[key]["gateway-list"].length > 0 ? (
              groupArrayByValueAlphabetically(
                data.content[key]["gateway-list"]
              ).map((gateway, index) => (
                <tr key={index} className="text-black group bg-gray-200">
                  <td className="px-6 py-4 group-hover:bg-purple-200">{key}</td>
                  <td className="px-6 py-4 group-hover:bg-purple-200">
                    {gateway.value}
                  </td>
                  <td className="px-6 py-4 group-hover:bg-purple-200">
                    {gateway.form_id}
                  </td>
                </tr>
              ))
            ) : (
              <tr key={key} className="text-black group bg-gray-200">
                <td className="px-6 py-4 group-hover:bg-purple-200">{key}</td>
                <td className="px-6 py-4 group-hover:bg-purple-200">
                  Enterprise not found.
                </td>
                <td className="px-6 py-4 group-hover:bg-purple-200">
                  Enterprise not found.
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
