import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const Success = () => {
  const { state: formData } = useLocation();

  const formattedKeys = {
    pan: "Pan No",
    aadhar: "Aadhar No",
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h2 className="text-3xl font-bold text-violet-700 mb-6">
        Form Submitted Successfully!
      </h2>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Field</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(formData).map(([key, value]) => (
              <tr key={key} className="odd:bg-gray-50 even:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 capitalize">
                  {formattedKeys[key] || key.replace(/([A-Z])/g, " $1")}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {value || <span className="text-gray-500">N/A</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Link to={"/"} className="mt-6 inline-block bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition-colors">
        Go Back to Form
      </Link>
    </div>
  );
};

export default Success;