'use client'
import { useState } from "react";
import CompanyForm from "../CompanyForm/page";
import CompanyList from "../CompanyList/page";
 // New component
import { Company, CommunicationMethod } from "@/types/adminTypes";
// import CommunicationMethodForm from "../CommunicationMethodForm/page";

const AdminDashboard: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [editingCompany, setEditingCompany] = useState<Company | null>(null);
  const [communicationMethods, setCommunicationMethods] = useState<CommunicationMethod[]>([
    { id: '1', name: 'LinkedIn Post', description: 'LinkedIn post about the company.', sequence: 1, mandatoryFlag: true },
    { id: '2', name: 'LinkedIn Message', description: 'Sending a message on LinkedIn.', sequence: 2, mandatoryFlag: true },
    { id: '3', name: 'Email', description: 'Sending an email to the company.', sequence: 3, mandatoryFlag: true },
    { id: '4', name: 'Phone Call', description: 'Calling the company.', sequence: 4, mandatoryFlag: false },
    { id: '5', name: 'Other', description: 'Any other method.', sequence: 5, mandatoryFlag: false },
  ]);

  const handleAddOrUpdateCompany = (company: Company) => {
    if (company.id) {
      setCompanies((prev) =>
        prev.map((c) => (c.id === company.id ? company : c))
      );
    } else {
      company.id = Date.now().toString();
      setCompanies((prev) => [...prev, company]);
    }
    setEditingCompany(null);
  };

  const handleDeleteCompany = (id: string) => {
    setCompanies((prev) => prev.filter((c) => c.id !== id));
  };

  const handleAddOrUpdateMethod = (method: CommunicationMethod) => {
    if (method.id) {
      setCommunicationMethods((prev) =>
        prev.map((m) => (m.id === method.id ? method : m))
      );
    } else {
      method.id = Date.now().toString();
      setCommunicationMethods((prev) => [...prev, method]);
    }
  };

  const handleDeleteMethod = (id: string) => {
    setCommunicationMethods((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-[2.5rem] font-bold mb-6 text-center">Admin Panel</h1>

      {/* Company Form and List */}
      <CompanyForm onSubmit={handleAddOrUpdateCompany} initialData={editingCompany || undefined} />
      <CompanyList companies={companies} onEdit={setEditingCompany} onDelete={handleDeleteCompany} />

      {/* Communication Method Form and List */}
      {/* <div className="mt-[4rem]"></div>
      <CommunicationMethodForm
       onSubmit={handleAddOrUpdateMethod} methods={communicationMethods} onDelete={handleDeleteMethod} /> */}
    </div>
  );
};

export default AdminDashboard;
