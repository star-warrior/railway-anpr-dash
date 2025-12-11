import React from 'react';

const AlertsPanel = () => {
    const alerts = [
        { id: 1, plate: 'KA-05-XX-0000', time: '10:05 AM', msg: 'Unauthorized Entry Attempt' },
        { id: 2, plate: 'XX-00-ZZ-9999', time: '09:42 AM', msg: 'Blacklisted Vehicle Detected' },
        { id: 3, plate: 'MH-12-CD-5678', time: '09:15 AM', msg: 'Speed Limit Violation' },
    ];

  return (
    <div className="bg-white rounded-lg shadow-subtle p-6 h-full flex flex-col">
      <h3 className="mb-4 text-base text-text-dark flex justify-between items-center font-bold">
        Alerts
        <span className="text-xs text-primary bg-[rgba(235,87,87,0.1)] px-2 py-0.5 rounded-xl">
            {alerts.length} Pending
        </span>
      </h3>
      <div className="flex flex-col gap-4 overflow-y-auto max-h-[300px]">
        {alerts.map(alert => (
            <div key={alert.id} className="bg-red-50 border-l-4 border-red-500 p-3 rounded">
                <div className="flex justify-between mb-1 items-center">
                    <span className="font-bold text-red-800 text-sm">{alert.plate}</span>
                    <span className="text-xs text-red-500">{alert.time}</span>
                </div>
                <p className="m-0 text-xs text-red-700">{alert.msg}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default AlertsPanel;
