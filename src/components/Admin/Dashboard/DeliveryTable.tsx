import { Check } from "lucide-react";

type DeliveryStatus = "InProcess" | "Withheld" | "Successful" | "Returned";

interface DeliveryItem {
  id: string;
  name: string;
  email: string;
  amount: number;
  balance: number;
  status: DeliveryStatus;
}

const getStatusColor = (status: DeliveryStatus) => {
  switch (status) {
    case "InProcess":
      return "bg-[#FEF6E7] text-[#865503]";
    case "Withheld":
      return "bg-[#E6E5E5] text-[#212021]";
    case "Successful":
      return "bg-[#E7F6EC] text-[#036B26]";
    case "Returned":
      return "bg-[#FBEAE9] text-[#9E0A05]";
    default:
      return "bg-gray-50 text-gray-700";
  }
};

const DeliveryTable = () => {
  const deliveries: DeliveryItem[] = [
    {
      id: "SH1231",
      name: "Emery Torff",
      email: "thekidfisher@email.com",
      amount: 16000,
      balance: 0,
      status: "InProcess",
    },
    {
      id: "SH1232",
      name: "Maren Dokidis",
      email: "thekidfisher@email.com",
      amount: 16000,
      balance: 8000,
      status: "Withheld",
    },
    {
      id: "SH1233",
      name: "Cooper Siphron",
      email: "thekidfisher@email.com",
      amount: 16000,
      balance: 0,
      status: "Successful",
    },
    {
      id: "SH1234",
      name: "Cooper Siphron",
      email: "thekidfisher@email.com",
      amount: 16000,
      balance: 0,
      status: "Successful",
    },
    {
      id: "SH1235",
      name: "Cooper Siphron",
      email: "thekidfisher@email.com",
      amount: 16000,
      balance: 16000,
      status: "Withheld",
    },
    {
      id: "SH1236",
      name: "Cooper Siphron",
      email: "thekidfisher@email.com",
      amount: 16000,
      balance: 0,
      status: "Returned",
    },
  ];

  return (
    <div className="w-full rounded-lg  overflow-hidden custom-shadow">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#E4E7EC]">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#344054]  tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#344054]  tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#344054]  tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#344054]  tracking-wider">
                Balance
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#344054]  tracking-wider">
                Delivery Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {deliveries.map((delivery, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-textLabel font-medium">
                  {delivery.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-[#101928]">
                    {delivery.name}
                  </div>
                  <div className="text-sm text-[#475367]">{delivery.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap  font-medium">
                  ₦ {delivery.amount.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className=" text-[#00000080]">
                      ₦ {delivery.balance.toLocaleString()}
                    </span>
                    {delivery.balance === 0 && (
                      <div className=" border border-green400  flex items-center justify-center w-6 h-6 rounded-full ml-2">
                        <Check size={16} className=" text-green400" />
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                      delivery.status
                    )}`}
                  >
                    {delivery.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeliveryTable;
