import React from 'react';
import { Company } from '@/types/adminTypes';

interface CompanyListProps {
  companies: Company[];
  onEdit: (company: Company) => void;
  onDelete: (id: string) => void;
}

const CompanyList: React.FC<CompanyListProps> = ({
  companies,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-white p-6 shadow rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Company List</h2>
      <ul className="space-y-4">
        {companies.map((company) => (
          <li key={company.id} className="flex justify-between items-center space-x-4">
            <div className="flex flex-col">
              <p className="font-semibold">{company.name}</p>
              <p className="text-sm text-gray-500">{company.location}</p>
              <a href={company.linkedin} target="_blank" className="text-blue-500 text-sm">
                LinkedIn Profile
              </a>
              <p className="text-sm text-gray-500">{company.emails.join(', ')}</p>
              <p className="text-sm text-gray-500">{company.phoneNumbers.join(', ')}</p>
              <p className="text-sm text-gray-500">{company.comments}</p>
              <p className="text-sm text-gray-500">Periodicity: {company.periodicity}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(company)}
                className="text-blue-500 hover:text-blue-700"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(company.id!)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyList;
