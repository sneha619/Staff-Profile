"use client"
import { Edit, Eye } from "lucide-react"

function StaffProfileList({ profiles = [], onViewProfile, onEditProfile }) {
  console.log('StaffProfileList received profiles:', profiles);
  console.log('StaffProfileList profiles type:', typeof profiles);
  console.log('Is profiles an array?', Array.isArray(profiles));
  
  if (profiles && profiles.length > 0) {
    console.log('First profile in array:', profiles[0]);
    console.log('First profile keys:', profiles[0] ? Object.keys(profiles[0]) : 'No keys');
  }
  
  // Ensure profiles is always an array
  const profilesArray = Array.isArray(profiles) ? profiles : [];
  return (
    <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-4 sm:p-6 border-b">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Staff Profiles</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  STAFF CODE
                </th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NAME</th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EMAIL</th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  POSITION
                </th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STATUS</th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            {profilesArray.length > 0 ? (
              profilesArray.map((profile) => {
                if (!profile) return null;
                return (
                  <tr key={profile.id || 'unknown'} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{profile.staffCode || 'N/A'}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {profile.profileImage ? (
                          <img src={profile.profileImage} alt="Profile" className="w-10 h-10 rounded-full mr-3 object-cover" />
                        ) : (
                          <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                        )}
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {profile.firstName || ''} {profile.lastName || ''}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{profile.email || 'N/A'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{profile.jobPosition || 'N/A'}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                          profile.status === "Working" || profile.status === "Full-time"
                            ? "bg-green-100 text-green-800"
                            : profile.status === "On Leave"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {profile.status || 'Unknown'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => onViewProfile && onViewProfile(profile)}
                          className="text-blue-600 hover:text-blue-900 p-1"
                          title="View Profile"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => onEditProfile && onEditProfile(profile)}
                          className="text-blue-600 hover:text-blue-900 p-1"
                          title="Edit Profile"
                        >
                          <Edit size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                  No profiles available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StaffProfileList
