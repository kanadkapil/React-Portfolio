import React from 'react';
import educationData from '../data/educationData.json';

const Education = () => {
  return (
    <main className="min-h-screen p-8  my-20 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="min-h-[100px] rounded-lg shadow-lg bg-transparent backdrop-blur-md  p-6">
          
          {/* Header */}
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold">Educational Qualification</h3>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-lg backdrop-blur-md shadow-sm">
            <table className="min-w-full text-center rounded-lg text-2xl">
              <thead className="bg-lime-900">
                <tr>
                  <th className="py-3 px-5">Degree</th>
                  <th className="py-3 px-5">Year</th>
                  <th className="py-3 px-5">Subject</th>
                  <th className="py-3 px-5">Institute</th>
                  <th className="py-3 px-5">GPA</th>
                </tr>
              </thead>
              <tbody>
                {educationData.map((edu, index) => (
                  <tr key={index} className="border-t ">
                    <td className="py-3 px-5">{edu.degree}</td>
                    <td className="py-3 px-5">{edu.year}</td>
                    <td className="py-3 px-5">{edu.subject}</td>
                    <td className="py-3 px-5">{edu.institute}</td>
                    <td className="py-3 px-5">{edu.gpa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Education;
