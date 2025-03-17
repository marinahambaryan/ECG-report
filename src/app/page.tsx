import ECGProcessor from "@/components/ECGProcessor";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
      <h1 className="text-4xl font-extrabold mb-6 tracking-wide">
        ECG Analysis System (contains Dummy data processing)
      </h1>
      <ECGProcessor />
    </div>
  );
}
