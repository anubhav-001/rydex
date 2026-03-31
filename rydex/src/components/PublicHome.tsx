'use client'
import React, { useState } from 'react'
import HeroSection from './HeroSection'
import VehicleSlider from './VehicleSlider'
import AuthModal from './AuthModal'

const PublicHome = () => {
    const [authOpen, setauthOpen] = useState(false);
  return (
    <>
        <HeroSection onAuthRequired={() => setauthOpen(true)} />
        <VehicleSlider />
        <AuthModal open={authOpen} onClose={() => setauthOpen(false)} />
    </>
  )
}

export default PublicHome