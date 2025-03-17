import Architecture from "@/app/documentation/components/Architecture";
import AIModelStrategy from "@/app/documentation/components/AIModelStrategy";

export default function Documentation() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-extrabold text-black mb-6 tracking-wide border-b border-black pb-3">
        ECG Analysis System Documentation
      </h1>

      <p className="text-lg text-gray-800 mb-6">
        This documentation explains the system&apos;s{" "}
        <strong>
          architecture, AI model strategy, and implementation details
        </strong>
        .
      </p>

      {/* Documentation Sections */}
      <Architecture />
      <AIModelStrategy />
    </div>
  );
}
