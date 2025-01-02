import React from 'react';
import { useForm } from 'react-hook-form';

const CompanyForm = ({ onSubmit, initialData }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
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

      {/* Company Name and Location */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col space-y-2">
          <label className="text-white">Company Name:</label>
          <input
            {...register('name', { required: 'Company name is required' })}
            className="bg-gray-800 text-white border-gray-600 focus:ring-white focus:border-white rounded-lg shadow-sm p-3"
            placeholder="Enter company name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

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

      {/* Dynamic Emails */}
      <div className="flex flex-col space-y-2">
        <label className="text-white">Emails:</label>
        {['emails.0'].map((fieldName, index) => (
          <div key={index} className="flex items-center space-x-3">
            <input
              {...register(fieldName, {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid email address',
                },
              })}
              className="bg-gray-800 text-white border-gray-600 focus:ring-white focus:border-white rounded-lg shadow-sm p-3"
              placeholder="Enter company email"
            />
            {errors.emails?.[index] && <p className="text-red-500 text-sm">{errors.emails[index]?.message}</p>}
          </div>
        ))}
      </div>

      {/* Dynamic Phone Numbers */}
      <div className="flex flex-col space-y-2">
        <label className="text-white">Phone Numbers:</label>
        {['phoneNumbers.0'].map((fieldName, index) => (
          <div key={index} className="flex items-center space-x-3">
            <input
              {...register(fieldName, {
                required: 'Phone number is required',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Invalid phone number',
                },
              })}
              className="bg-gray-800 text-white border-gray-600 focus:ring-white focus:border-white rounded-lg shadow-sm p-3"
              placeholder="Enter phone number"
            />
            {errors.phoneNumbers?.[index] && <p className="text-red-500 text-sm">{errors.phoneNumbers[index]?.message}</p>}
          </div>
        ))}
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
