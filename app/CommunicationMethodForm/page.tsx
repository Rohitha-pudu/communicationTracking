import { useForm } from "react-hook-form";
import { CommunicationMethod } from "@/types/adminTypes";

interface CommunicationMethodFormProps {
  onSubmit: (method: CommunicationMethod) => void;
  methods: CommunicationMethod[];
  onDelete: (id: string) => void;
}

const CommunicationMethodForm: React.FC<CommunicationMethodFormProps> = ({ onSubmit, methods, onDelete }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<CommunicationMethod>({
    defaultValues: {
      name: '',
      description: '',
      sequence: 1,
      mandatoryFlag: false,
    },
  });

  const handleFormSubmit = (data: CommunicationMethod) => {
    onSubmit(data);
    reset(); // Reset form after submission
  };

  return (
    <div className="space-y-10">
      {/* Title Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">Communication Method Management</h2>
        <p className="mt-2 text-gray-500">Create and manage communication methods</p>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit(handleFormSubmit)} className="bg-white p-8 shadow-lg rounded-lg max-w-3xl mx-auto space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="text-gray-600 text-lg">Name</label>
            <input
              {...register('name', { 
                required: 'This field is required', 
                minLength: { value: 3, message: 'Name must be at least 3 characters' }
              })}
              id="name"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
              placeholder="Enter method name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Description Field */}
          <div>
            <label htmlFor="description" className="text-gray-600 text-lg">Description</label>
            <input
              {...register('description')}
              id="description"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
              placeholder="Enter description"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Sequence Field */}
          <div>
            <label htmlFor="sequence" className="text-gray-600 text-lg">Sequence</label>
            <input
              {...register('sequence', { 
                required: 'This field is required', 
                min: { value: 1, message: 'Sequence must be at least 1' } 
              })}
              id="sequence"
              type="number"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
              placeholder="Enter sequence number"
            />
            {errors.sequence && <p className="text-red-500 text-sm">{errors.sequence.message}</p>}
          </div>

          {/* Mandatory Checkbox */}
          <div>
            <label htmlFor="mandatoryFlag" className="text-gray-600 text-lg">Mandatory</label>
            <div className="flex items-center mt-2">
              <input
                {...register('mandatoryFlag')}
                id="mandatoryFlag"
                type="checkbox"
                className="h-5 w-5 text-blue-500 border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-500">Make this method mandatory</span>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Existing Methods Section */}
      <div className="max-w-3xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Existing Communication Methods</h3>
        <ul className="space-y-4">
          {methods.map((method) => (
            <li key={method.id} className="flex justify-between items-center space-x-6 bg-gray-50 rounded-lg p-4 shadow-sm">
              <div className="flex flex-col space-y-1">
                <p className="font-semibold text-lg text-gray-700">{method.name}</p>
                <p className="text-sm text-gray-500">{method.description}</p>
                <p className="text-sm text-gray-500">Sequence: {method.sequence}</p>
                <p className="text-sm text-gray-500">Mandatory: {method.mandatoryFlag ? "Yes" : "No"}</p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => onDelete(method.id)}
                  className="text-red-600 hover:text-red-700 transition duration-150"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommunicationMethodForm;
