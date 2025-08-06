import { formatDate } from "../../utils/dateUtils"

const GeneralInformation = ({ profile }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-6 border-b">
        <h3 className="text-lg font-semibold text-gray-800">General information</h3>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <span className="text-sm text-gray-500">Staff code</span>
              <p className="text-gray-800">{profile.staffCode}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Staff name</span>
              <p className="text-gray-800">
                {profile.firstName} {profile.lastName}
              </p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Gender</span>
              <p className="text-gray-800">{profile.gender || "Not specified"}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Birthday</span>
              <p className="text-gray-800">{formatDate(profile.birthday) || "Not specified"}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Phone</span>
              <p className="text-gray-800">{profile.phone || "Not specified"}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Workplace</span>
              <p className="text-gray-800">{profile.workplace || "Not specified"}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Status</span>
              <p className="text-gray-800">{profile.status}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <span className="text-sm text-gray-500">Job position</span>
              <p className="text-gray-800">{profile.jobPosition}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Academic level</span>
              <p className="text-gray-800">{profile.academicLevel || "Not specified"}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Hourly Rate</span>
              <p className="text-gray-800">₹{profile.hourlyRate || "0.00"}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Religion</span>
              <p className="text-gray-800">{profile.religion || "Not specified"}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Nation</span>
              <p className="text-gray-800">{profile.nation || "Not specified"}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Marital status</span>
              <p className="text-gray-800">{profile.maritalStatus || "Not specified"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneralInformation
