'use client'
import React, { useState } from 'react';
import { Company } from '@/types/adminTypes';
import CompanyForm from '../CompanyForm/page';
import CompanyList from '../CompanyList/page';

const CompanyPage: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [editingCompany, setEditingCompany] = useState<Company | null>(null);

  const handleAddCompany = (company: Company) => {
    setCompanies((prevCompanies) => [...prevCompanies, company]);
  };

  const handleEditCompany = (company: Company) => {
    setEditingCompany(company);
  };

  const handleUpdateCompany = (updatedCompany: Company) => {
    setCompanies((prevCompanies) =>
      prevCompanies.map((company) =>
        company.id === updatedCompany.id ? updatedCompany : company
      )
    );
    setEditingCompany(null);
  };

  const handleDeleteCompany = (id: string) => {
    setCompanies((prevCompanies) => prevCompanies.filter((company) => company.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Company Management</h1>

      {/* Display CompanyForm for adding/editing companies */}
      <CompanyForm
        onSubmit={editingCompany ? handleUpdateCompany : handleAddCompany}
        initialData={editingCompany || undefined}
      />

      {/* Display CompanyList */}
      <CompanyList
        companies={companies}
        onEdit={handleEditCompany}
        onDelete={handleDeleteCompany}
      />
    </div>
  );
};

export default CompanyPage;
