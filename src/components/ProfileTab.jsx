"use client"
import { Calendar, Eye, EyeOff, RefreshCw } from "lucide-react"

const ProfileTab = ({ profileData, handleInputChange, showPassword, setShowPassword }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <input
          type="checkbox"
          id="enableTwoFactor"
          checked={profileData.enableTwoFactor}
          onChange={(e) => handleInputChange("enableTwoFactor", e.target.checked)}
          className="rounded border-gray-300"
        />
        <label htmlFor="enableTwoFactor" className="text-sm text-gray-700">
          Enable Email Two Factor Authentication
        </label>
      </div>

      <div className="flex justify-center mb-6">
        <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
          <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <span className="text-red-500">*</span> Staff code
          </label>
          <input
            type="text"
            value={profileData.staffCode}
            onChange={(e) => handleInputChange("staffCode", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div></div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <span className="text-red-500">*</span> First name
          </label>
          <input
            type="text"
            value={profileData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ananya"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <span className="text-red-500">*</span> Last name
          </label>
          <input
            type="text"
            value={profileData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Sharma"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
          <select
            value={profileData.gender}
            onChange={(e) => handleInputChange("gender", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">None selected</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Birthday</label>
          <div className="relative">
            <input
              type="date"
              value={profileData.birthday}
              onChange={(e) => handleInputChange("birthday", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <span className="text-red-500">*</span> Email
          </label>
          <input
            type="email"
            value={profileData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="talent@cybercurate.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
          <input
            type="tel"
            value={profileData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Workplace</label>
          <select
            value={profileData.workplace}
            onChange={(e) => handleInputChange("workplace", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">None selected</option>
            <option value="Bengaluru Office">Bengaluru Office</option>
            <option value="Mumbai Office">Mumbai Office</option>
            <option value="Delhi Office">Delhi Office</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <span className="text-red-500">*</span> Status
          </label>
          <select
            value={profileData.status}
            onChange={(e) => handleInputChange("status", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">None selected</option>
            <option value="Working">Working</option>
            <option value="On Leave">On Leave</option>
            <option value="Terminated">Terminated</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <span className="text-red-500">*</span> Job position
          </label>
          <select
            value={profileData.jobPosition}
            onChange={(e) => handleInputChange("jobPosition", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">None selected</option>
            <option value="HR Associate">HR Associate</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Manager">Manager</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Direct manager</label>
          <select
            value={profileData.directManager}
            onChange={(e) => handleInputChange("directManager", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">None selected</option>
            <option value="John Doe">John Doe</option>
            <option value="Jane Smith">Jane Smith</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
          <select
            value={profileData.role}
            onChange={(e) => handleInputChange("role", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">None selected</option>
            <option value="Employee">Employee</option>
            <option value="Manager">Manager</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <div></div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Academic level</label>
          <select
            value={profileData.academicLevel}
            onChange={(e) => handleInputChange("academicLevel", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Not required</option>
            <option value="High School">High School</option>
            <option value="Bachelor's">Bachelor's</option>
            <option value="Master's">Master's</option>
            <option value="PhD">PhD</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Hourly Rate</label>
          <div className="relative">
            <input
              type="number"
              step="0.01"
              value={profileData.hourlyRate}
              onChange={(e) => handleInputChange("hourlyRate", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="0.00"
            />
            <span className="absolute right-3 top-2.5 text-gray-400">₹</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Default Language</label>
          <select
            value={profileData.defaultLanguage}
            onChange={(e) => handleInputChange("defaultLanguage", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="System Default">System Default</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Direction</label>
          <select
            value={profileData.direction}
            onChange={(e) => handleInputChange("direction", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="System Default">System Default</option>
            <option value="LTR">Left to Right</option>
            <option value="RTL">Right to Left</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Signature</label>
          <textarea
            value={profileData.emailSignature}
            onChange={(e) => handleInputChange("emailSignature", e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Other information</label>
          <textarea
            value={profileData.otherInformation}
            onChange={(e) => handleInputChange("otherInformation", e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-blue-600 mb-2">📞 Twilio Phone Number</label>
          <input
            type="tel"
            value={profileData.twilioPhoneNumber}
            onChange={(e) => handleInputChange("twilioPhoneNumber", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-600 mb-2">📱 Is twilio number whats app enabled</label>
          <select
            value={profileData.isTwilioWhatsAppEnabled}
            onChange={(e) => handleInputChange("isTwilioWhatsAppEnabled", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">None selected</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <span className="text-red-500">*</span> Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={profileData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            className="w-full px-3 py-2 pr-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <div className="absolute right-2 top-2 flex space-x-1">
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="p-1 text-blue-600 hover:text-blue-800"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
            <button type="button" className="p-1 text-blue-600 hover:text-blue-800">
              <RefreshCw size={16} />
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Note: if you populate this field, password will be changed on this member.
        </p>
      </div>
    </div>
  )
}

export default ProfileTab
