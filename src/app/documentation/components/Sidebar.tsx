"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname(); // Get the current page route
  const [showArchitectureSub, setShowArchitectureSub] = useState(false); // State for toggling subsections

  // Function to determine active styles
  const linkClasses = (href: string) =>
    `block text-lg transition p-2 rounded ${
      pathname === href ? "text-white bg-black" : "hover:text-gray-600"
    }`;

  return (
    <div className="w-64 bg-white border-r border-black p-6">
      <h2 className="text-2xl font-bold border-b border-black pb-2">
        Documentation
      </h2>
      <nav className="mt-4 space-y-3">
        <Link href="/documentation" className={linkClasses("/documentation")}>
          📄 Overview
        </Link>
        <Link
          href="/documentation/workflow"
          className={linkClasses("/documentation/workflow")}
        >
          🔄 Workflow
        </Link>

        {/* Architecture Section with Toggle */}
        <div>
          <button
            onClick={() => setShowArchitectureSub(!showArchitectureSub)}
            className="w-full text-left text-lg font-semibold p-2 rounded hover:text-gray-600 flex justify-between"
          >
            🛠 Architecture
            <span>{showArchitectureSub ? "▼" : "▶"}</span>
          </button>

          {showArchitectureSub && (
            <div className="ml-4 space-y-2">
              <Link
                href="/documentation/architecture"
                className={linkClasses("/documentation/architecture")}
              >
                🔹 Overview
              </Link>
              <Link
                href="/documentation/architecture/mongodb"
                className={linkClasses("/documentation/architecture/mongodb")}
              >
                📂 MongoDB Schema
              </Link>
              <Link
                href="/documentation/architecture/storage"
                className={linkClasses("/documentation/architecture/storage")}
              >
                ☁️ S3 File Storage
              </Link>
              <Link
                href="/documentation/architecture/processing"
                className={linkClasses(
                  "/documentation/architecture/processing"
                )}
              >
                ⚙️ ECG Processing
              </Link>
              <Link
                href="/documentation/architecture/interpretation"
                className={linkClasses(
                  "/documentation/architecture/interpretation"
                )}
              >
                🧠 AI Interpretation
              </Link>
            </div>
          )}
        </div>

        <Link
          href="/documentation/ai-model"
          className={linkClasses("/documentation/ai-model")}
        >
          🤖 AI Model Strategy
        </Link>
        <Link
          href="/documentation/security"
          className={linkClasses("/documentation/security")}
        >
          🔐 Security
        </Link>
      </nav>
    </div>
  );
}
