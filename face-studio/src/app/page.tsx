'use client';
import './globals.css';
import Navbar from './../Components/Navbar';
import React, { useEffect, useRef, useState } from 'react';
import FilterBoard from '@/Components/FilterBoard';
import VideoPlayer from '@/Components/VideoPlayer';
import AssetsPage from "../Components/AssetsPage"


export default function Home() {
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(true); // Loading state

  // Access the webcam on component mount
  useEffect(() => {
    // Simulating an artificial loading delay (e.g., waiting for data or assets)
    setTimeout(() => {
      setLoading(false); // Hide loader after components are ready
    }, 2000); // Adjust this delay as needed

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (stream) {
          let video = videoRef.current;
          if (video) {
            video.srcObject = stream;
            video.play();
          }
        })
        .catch(function (err) {
          console.log('Error accessing the camera: ', err);
        });
    }
  }, []);

  if (loading) {
    // Show full-screen loader until the website finishes loading
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <span className="loading w-[200px] h-[200px]  loading-infinity "></span>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r pl-2 from-[#d2bcbc] to-[#9270ed] h-screen flex justify-between flex-row">
        <div className="w-[50%]">
          <FilterBoard />
        </div>
        <VideoPlayer />

      </div>
      <AssetsPage/>
    </>
  );
}
