import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const RecentTrucksTable = () => {
    // Placeholder Data
    const trucks = [
        { id: 1, time: '2023-12-19 08:32', plate: 'KA-01-AB-1234', driver: 'Ramesh Kumar (DHL)', purpose: 'Unloading', status: 'Inward' },
        { id: 2, time: '2023-12-19 09:15', plate: 'MH-12-CD-5678', driver: 'Suresh Singh (Tata)', purpose: 'Loading', status: 'Outward' },
        { id: 3, time: '2023-12-19 09:45', plate: 'TN-05-XY-9012', driver: 'John Doe (FedEx)', purpose: 'Maintenance', status: 'Inward' },
        { id: 4, time: '2023-12-19 10:20', plate: 'DL-04-JK-3456', driver: 'Vikram Seth', purpose: 'Unloading', status: 'Inward' },
        { id: 5, time: '2023-12-19 11:00', plate: 'AP-09-LM-7890', driver: 'Alice Smith', purpose: 'Loading', status: 'Outward' },
    ];

  return (
    <div className="bg-white rounded-lg shadow-subtle mt-8 overflow-hidden p-6">
      <h3 className="mb-4 text-text-dark text-lg font-bold">Recent Vehicle Activity</h3>
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse min-w-[800px]">
          <thead>
            <tr>
              <th className="text-left p-4 text-text-muted font-semibold text-sm border-b border-border">Date & Time</th>
              <th className="text-left p-4 text-text-muted font-semibold text-sm border-b border-border">Vehicle No.</th>
              <th className="text-left p-4 text-text-muted font-semibold text-sm border-b border-border">Driver / Firm</th>
              <th className="text-left p-4 text-text-muted font-semibold text-sm border-b border-border">Purpose</th>
              <th className="text-left p-4 text-text-muted font-semibold text-sm border-b border-border">Status</th>
              <th className="text-left p-4 text-text-muted font-semibold text-sm border-b border-border">Action</th>
            </tr>
          </thead>
          <tbody>
            {trucks.map((truck) => (
                <tr key={truck.id}>
                    <td className="p-4 text-text-dark text-sm border-b border-border font-medium">{truck.time}</td>
                    <td className="p-4 text-text-dark text-sm border-b border-border">{truck.plate}</td>
                    <td className="p-4 text-text-dark text-sm border-b border-border">{truck.driver}</td>
                    <td className="p-4 text-text-dark text-sm border-b border-border">{truck.purpose}</td>
                    <td className="p-4 border-b border-border">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${truck.status === 'Inward' ? 'bg-emerald-50 text-emerald-500' : 'bg-amber-50 text-amber-500'}`}>
                            {truck.status}
                        </span>
                    </td>
                    <td className="p-4 border-b border-border">
                        <button className="bg-transparent border-none text-text-muted p-2 rounded-full hover:bg-background hover:text-text-dark transition-colors" title="Details">
                            <MoreHorizontal size={18} />
                        </button>
                    </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTrucksTable;
