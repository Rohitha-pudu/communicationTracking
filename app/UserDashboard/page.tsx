'use client';
import { useState } from 'react';

const UserDashboard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, company: 'Company A', type: 'Email', date: '2023-12-20', notes: 'Follow-up required', status: 'overdue' },
    { id: 2, company: 'Company B', type: 'Phone Call', date: '2023-12-30', notes: 'Call scheduled', status: 'due' },
    { id: 3, company: 'Company A', type: 'LinkedIn Post', date: '2023-12-25', notes: 'Post created', status: 'completed' },
    { id: 4, company: 'Company B', type: 'Email', date: '2023-12-28', notes: 'Initial contact', status: 'completed' },
    { id: 5, company: 'Company A', type: 'Phone Call', date: '2023-12-29', notes: 'Answered questions', status: 'due' },
    { id: 6, company: 'Company A', type: 'Email', date: '2023-12-15', notes: 'Scheduled follow-up', status: 'completed' },
    { id: 7, company: 'Company B', type: 'LinkedIn Post', date: '2023-12-18', notes: 'Shared update', status: 'overdue' },
    { id: 8, company: 'Company C', type: 'Email', date: '2023-12-20', notes: 'Follow-up required', status: 'overdue' },
    { id: 9, company: 'Company C', type: 'Phone Call', date: '2023-12-30', notes: 'Call scheduled', status: 'due' },
    { id: 10, company: 'Company D', type: 'LinkedIn Post', date: '2023-12-25', notes: 'Post created', status: 'completed' },
    { id: 11, company: 'Company D', type: 'Email', date: '2023-12-28', notes: 'Initial contact', status: 'completed' },
    { id: 12, company: 'Company E', type: 'Phone Call', date: '2023-12-29', notes: 'Answered questions', status: 'due' },
    { id: 13, company: 'Company F', type: 'Email', date: '2023-12-15', notes: 'Scheduled follow-up', status: 'completed' },
    { id: 14, company: 'Company G', type: 'LinkedIn Post', date: '2023-12-18', notes: 'Shared update', status: 'overdue' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [newCommunication, setNewCommunication] = useState({ type: '', date: '', notes: '' });
  const [selectedCompanies, setSelectedCompanies] = useState(new Set());
  const [expandedCompany, setExpandedCompany] = useState(null);

  const handleCommunicationClick = (task) => {
    setSelectedTask(task);
    setShowModal(true);
  };

  const handleAddCommunication = () => {
    if (selectedTask) {
      // Update the task with the new communication details
      const updatedTasks = tasks.map((task) =>
        task.id === selectedTask.id
          ? { ...task, ...newCommunication, status: 'completed' }
          : task
      );
      setTasks(updatedTasks); // Update the task list with the new task status

      // Reset any company highlights (overdue or due tasks) after adding the communication
      setShowModal(false); // Close the modal
      resetCompanyHighlights(); // Reset any highlights for selected companies
    }
  };

  const resetCompanyHighlights = () => {
    // Reset the status of tasks related to selected companies
    const updatedTasks = tasks.map((task) =>
      selectedCompanies.has(task.company) 
        ? { ...task, status: 'completed' } // Mark as completed for the selected companies
        : task
    );
    setTasks(updatedTasks); // Update the tasks with reset statuses
  };

  const toggleCompany = (company) => {
    setExpandedCompany(expandedCompany === company ? null : company);
  };

  const handleSelectCompany = (company) => {
    const updatedSelection = new Set(selectedCompanies);
    if (updatedSelection.has(company)) {
      updatedSelection.delete(company);
    } else {
      updatedSelection.add(company);
    }
    setSelectedCompanies(updatedSelection);
  };

  const overdueCount = tasks.filter((task) => task.status === 'overdue').length;
  const dueCount = tasks.filter((task) => task.status === 'due').length;
  const companies = Array.from(new Set(tasks.map((task) => task.company)));

  const getLastFiveCommunications = (company) =>
    tasks.filter((task) => task.company === company).slice(-5);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-[2.5rem] font-bold text-gray-800 mb-6 text-center">User Dashboard</h2>

      <div className="mb-6 flex flex-wrap gap-4 justify-center">
        <div className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm ">
          {overdueCount} Overdue
        </div>
        <div className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm">
          {dueCount} Due Today
        </div>
      </div>
      <div className="my-6">
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
        >
          Log Communication
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <div key={company} className="border rounded-lg shadow-sm">
            <div
              className="p-4 bg-black text-white cursor-pointer rounded-t-lg"
              onClick={() => toggleCompany(company)}
            >
              <input
                type="checkbox"
                checked={selectedCompanies.has(company)}
                onChange={() => handleSelectCompany(company)}
                className="mr-2"
              />
              {company}
            </div>

            {expandedCompany === company && (
              <div className="p-4 space-y-4 bg-white rounded-b-lg">
                {getLastFiveCommunications(company).map((task) => (
                  <div
                    key={task.id}
                    className={`p-4 border rounded-lg shadow-sm cursor-pointer ${
                      task.status === 'overdue'
                        ? 'bg-red-50 border-red-400'
                        : task.status === 'due'
                        ? 'bg-yellow-50 border-yellow-400'
                        : 'bg-green-50 border-green-400'
                    }`}
                    onClick={() => handleCommunicationClick(task)}
                  >
                    <div className="font-medium">{task.type}</div>
                    <div className="text-sm text-gray-600">{task.date}</div>
                    <div className="text-sm text-gray-500">{task.notes}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Log Communication</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Communication Type
              </label>
              <select
                value={newCommunication.type}
                onChange={(e) =>
                  setNewCommunication({ ...newCommunication, type: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2"
              >
                <option value="">Select Type</option>
                <option value="LinkedIn Post">LinkedIn Post</option>
                <option value="Email">Email</option>
                <option value="Phone Call">Phone Call</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date of Communication
              </label>
              <input
                type="date"
                value={newCommunication.date}
                onChange={(e) =>
                  setNewCommunication({ ...newCommunication, date: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Notes
              </label>
              <textarea
                value={newCommunication.notes}
                onChange={(e) =>
                  setNewCommunication({ ...newCommunication, notes: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleAddCommunication}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
              >
                Submit
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
