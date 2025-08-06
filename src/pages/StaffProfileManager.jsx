"use client"

import { useState, useEffect } from "react"
import { Plus } from "lucide-react"
import StaffProfileForm from "../components/StaffProfileForm"
import StaffProfileView from "../components/StaffProfileView"
import StaffProfileList from "../components/StaffProfileList"
import { sampleStaffProfile, initialStaffProfile } from "../types/staffProfile"

const StaffProfileManager = () => {
  console.log('sampleStaffProfile type:', typeof sampleStaffProfile);
  console.log('sampleStaffProfile value:', sampleStaffProfile);
  console.log('sampleStaffProfile keys:', Object.keys(sampleStaffProfile));
  
  // Ensure sampleStaffProfile is properly structured with all required fields
  const [profiles, setProfiles] = useState([]);
  
  useEffect(() => {
    console.log('Setting profiles with sampleStaffProfile');
    // Create a deep copy of sampleStaffProfile to ensure we're not using a reference
    const profileCopy = JSON.parse(JSON.stringify(sampleStaffProfile));
    setProfiles([profileCopy]);
  }, []);
  
  useEffect(() => {
    console.log('Updated profiles state:', profiles);
  }, [profiles]);
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [currentView, setCurrentView] = useState("list")
  const [selectedProfile, setSelectedProfile] = useState(null)
  const [editingProfile, setEditingProfile] = useState(null)
  const [formMode, setFormMode] = useState("create")

  const handleCreateProfile = () => {
    setFormMode("create")
    setEditingProfile(null)
    setIsFormOpen(true)
  }

  const handleEditProfile = (profile) => {
    setFormMode("edit")
    setEditingProfile(profile)
    setIsFormOpen(true)
  }

  const handleViewProfile = (profile) => {
    setSelectedProfile(profile)
    setCurrentView("view")
  }

  const handleSaveProfile = (profileData) => {
    if (formMode === "create") {
      const newProfile = {
        ...profileData,
        id: Date.now().toString(),
      }
      setProfiles((prev) => [...prev, newProfile])
    } else if (editingProfile) {
      setProfiles((prev) =>
        prev.map((p) => (p.id === editingProfile.id ? { ...profileData, id: editingProfile.id } : p)),
      )
    }
    setIsFormOpen(false)
    setEditingProfile(null)
  }

  const handleBackToList = () => {
    setCurrentView("list")
    setSelectedProfile(null)
  }

  if (currentView === "view" && selectedProfile) {
    return (
      <div>
        <div className="mb-6">
          <button onClick={handleBackToList} className="px-4 py-2 text-blue-600 hover:text-blue-800 transition-colors">
            ← Back to Staff List
          </button>
        </div>
        <StaffProfileView profile={selectedProfile} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-6">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold text-gray-800">Staff Profile Management</h1>
          <button
            onClick={handleCreateProfile}
            className="flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md text-sm sm:text-base whitespace-nowrap"
          >
            <Plus size={18} />
            <span>Create New Profile</span>
          </button>
        </div>
          
        <StaffProfileList 
          profiles={profiles} 
          onViewProfile={handleViewProfile} 
          onEditProfile={handleEditProfile} 
        />
          
        <StaffProfileForm
          isOpen={isFormOpen}
          onClose={() => {
            setIsFormOpen(false)
            setEditingProfile(null)
          }}
          onSave={handleSaveProfile}
          initialData={editingProfile || {}}
          mode={formMode}
        />
      </div>
    </div>
  )
}

export default StaffProfileManager
