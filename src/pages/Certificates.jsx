import React, { useEffect, useState } from 'react';
import certificatesData from '../data/certificates.json'; // adjust the path if needed

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    setCertificates(certificatesData);
  }, []);

  return (
    <div className="container mx-auto rounded-3xl backdrop-blur-3xl">
      <main className="p-10 text-white">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold">Certifications</h2>
        </div>

        <div className="overflow-x-auto rounded-lg shadow-lg  backdrop-blur-md">
          <table className="min-w-full text-center">
            <thead className="text-lg bg-lime-900 text-white">
              <tr>
                <th className="py-3 px-4">Certifications</th>
                <th className="py-3 px-4">Platform</th>
                <th className="py-3 px-4">Duration</th>
                <th className="py-3 px-4">View</th>
              </tr>
            </thead>
            <tbody>
              {certificates.map((cert, index) => (
                <tr key={index} className="hover:bg-lime-800">
                  <td className="py-4 px-6 border-b border-gray-200">{cert.title}</td>
                  <td className="py-4 px-6 border-b border-gray-200">{cert.platform}</td>
                  <td className="py-4 px-6 border-b border-gray-200">{cert.duration}</td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 border border-white text-white rounded hover:border-lime-400 hover:text-lime-400 transition-colors duration-200"
                    >
                      View
                    </a>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Certificates;
