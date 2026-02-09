"use client"
import React from "react";
import "./Hero.css"
import { EncryptedText } from "../ui/encrypted-text"
import WorldMap from "../ui/world-map"

export function Hero() {
  return (


    <section id="hero" className="hero h-full w-full py-10 text-white flex gap-2.5 ">
      <div className="mx-auto flex max-w-7xl max-h-4xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-xl tracking-tight sm:text-5xl dark:text-white">
          <EncryptedText
            text="Hi, I’m Nhan (Simon) Bui."
            encryptedClassName="text-neutral-300"
            revealedClassName="dark:text-white text-black"
            revealDelayMs={50}
          />
          <br />
          <EncryptedText
            text="Software Engineer & Data Science Student."
            encryptedClassName="text-neutral-300"
            revealedClassName="dark:text-white text-black"
            revealDelayMs={50}
          />
        </h1>

      </div>
      <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}
      />
    </section>



  )
}
