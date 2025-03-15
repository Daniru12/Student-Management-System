import { FaEdit, FaTrash } from "react-icons/fa";

function App() {
  const sampleStudentData = [
    {
      name: 'Daniru Punsith',
      date: '16-09-2024',
      reg: 'FDSC2402'
    },
    {
      name: 'Vishmitha Hashendra',
      date: '16-09-2024',
      reg: 'FDSC2403'
    },
    {
      name: 'Upasama Ishani',
      date: '16-09-2024',
      reg: 'FDSC2401'
    }
  ]

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Student List</h2>
        
        {/* Table Header */}
        <div className="flex justify-between items-center bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-t-lg">
          <div className="flex-1">Reg No</div>
          <div className="flex-1">Name</div>
          <div className="flex-1">Date</div>
          <div className="flex">Actions</div>
        </div>
        
        {
          sampleStudentData.map((std, index) => (
            <div 
              key={index} 
              className="flex justify-between items-center border-b py-3 px-4 hover:bg-gray-50 transition duration-300"
            >
              <div className="flex-1 font-medium text-gray-800">{std.reg}</div>
              <div className="flex-1 text-gray-600">{std.name}</div>
              <div className="flex-1 text-gray-500">{std.date}</div>
              <div className="flex space-x-2">
                <button className="flex items-center text-blue-600 hover:text-blue-800 transition duration-200">
                  <FaEdit className="mr-1" /> 
                </button>
                <button className="flex items-center text-red-600 hover:text-red-800 transition duration-200">
                  <FaTrash className="mr-1" /> 
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
