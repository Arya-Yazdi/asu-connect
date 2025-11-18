import { AppSidebar } from "@/components/app-sidebar";
import { NavUser } from "@/components/nav-user";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Link } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <div className="font-sans grid  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
          <main>
            <div className="max-w-6xl mx-auto px-8 py-16">
              <div className="text-center mb-12">
                <h1 className="text-6xl font-bold text-yellow-600 mb-4">
                  Welcome to ASU Connect
                </h1>
                <p className="text-xl text-gray-600">
                  Your hub for discovering clubs, events, and campus connections
                  at Arizona State University
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Connect with fellow Sun Devils through clubs and events.
                  Explore diverse communities on campus, find events that match
                  your interests, and manage your campus experience all in one
                  place.
                </p>
              </div>

              <div className="flex justify-center gap-4 mb-16">
                <a href="/clubs" className="px-8 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors">
                  Browse Clubs
                </a>
                <a href="/events" className="px-8 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
                  Browse Events
                </a>
                <a href="/" className="px-8 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
                  View Dashboard
                </a>
              </div>

              <hr className="my-12 border-gray-300"></hr>

              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Discover
                  </h3>
                  <p className="text-gray-600">
                    Find clubs and organizations that match your passions
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Engage
                  </h3>
                  <p className="text-gray-600">
                    Explore upcoming events and campus activities
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Connect
                  </h3>
                  <p className="text-gray-600">
                    Build meaningful relationships with your community
                  </p>
                </div>
              </div>
            </div>
          </main>
          <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            {" "}
          </footer>
        </div>
      </main>
    </SidebarProvider>
  );
}
