import React from 'react';
import { useForm } from 'react-hook-form';

const CompanyForm = ({ onSubmit, initialData }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: initialData || {
      name: '',
      location: '',
      linkedin: '',
      emails: [''],
      phoneNumbers: [''],
      comments: '',
      periodicity: '2 weeks',
    },
  });

  const handleFormSubmit = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="space-y-8 bg-black text-white p-8 shadow-lg rounded-lg max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-semibold text-white mb-6">Add Company</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Name */}
        <div className="flex flex-col space-y-2">
          <label className="text-white">Company Name:</label>
          <input
            {...register('name', { required: true })}
            className="bg-gray-800 text-white border-gray-600 focus:ring-white focus:border-white rounded-lg shadow-sm p-3"
            placeholder="Enter company name"
          />
        </div>

        {/* Location */}
        <div className="flex flex-col space-y-2">
          <label className="text-white">Location:</label>
          <input
            {...register('location')}
            className="bg-gray-800 text-white border-gray-600 focus:ring-white focus:border-white rounded-lg shadow-sm p-3"
            placeholder="Enter company location"
          />
        </div>
      </div>

      {/* LinkedIn Profile */}
      <div className="flex flex-col space-y-2">
        <label className="text-white">LinkedIn Profile:</label>
        <input
          {...register('linkedin')}
          className="bg-gray-800 text-white border-gray-600 focus:ring-white focus:border-white rounded-lg shadow-sm p-3"
          placeholder="Enter LinkedIn URL"
        />
      </div>

      {/* Emails */}
      <div className="flex flex-col space-y-2">
        <label className="text-white">Emails:</label>
        <input
          {...register('emails.0')}
          className="bg-gray-800 text-white border-gray-600 focus:ring-white focus:border-white rounded-lg shadow-sm p-3"
          placeholder="Enter company email"
        />
      </div>

      {/* Phone Numbers */}
      <div className="flex flex-col space-y-2">
        <label className="text-white">Phone Numbers:</label>
        <input
          {...register('phoneNumbers.0')}
          className="bg-gray-800 text-white border-gray-600 focus:ring-white focus:border-white rounded-lg shadow-sm p-3"
          placeholder="Enter phone number"
        />
      </div>

      {/* Comments */}
      <div className="flex flex-col space-y-2">
        <label className="text-white">Comments:</label>
        <textarea
          {...register('comments')}
          className="bg-gray-800 text-white border-gray-600 focus:ring-white focus:border-white rounded-lg shadow-sm p-3"
          placeholder="Enter any additional comments"
        />
      </div>

      {/* Periodicity */}
      <div className="flex flex-col space-y-2">
        <label className="text-white">Periodicity:</label>
        <select
          {...register('periodicity')}
          className="bg-gray-800 text-white border-gray-600 focus:ring-white focus:border-white rounded-lg shadow-sm p-3"
        >
          <option value="1 week">1 week</option>
          <option value="2 weeks">2 weeks</option>
          <option value="1 month">1 month</option>
        </select>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 shadow-sm w-full md:w-auto"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CompanyForm;
