import { useEffect, useState } from 'react'
import profileData from '../data/profile.json'
import ProfileCard from '../components/profileCard'
import GithubCard from '../components/GithubCard'

export default function Home() {
  const [profile, setProfile] = useState({})

  useEffect(() => {
    setProfile(profileData)
  }, [])

  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
    >
      {/* Optional overlay for readability */}
      <div className="min-h-screen bg-opacity-50">
        <div className="container mx-auto">
          <div className="grid gap-4 p-4 sm:grid-cols-12 grid-cols-1 text-center">
            <div className="sm:col-span-12">
              <ProfileCard data={profile} />
            </div>
          </div>

          <GithubCard />

        </div>
      </div>
    </div>


  )
}
