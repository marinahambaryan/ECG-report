import UserUpload from "@/app/documentation/(sections)/workflow/components/UserUpload";
import FileProcessing from "@/app/documentation/(sections)/workflow/components/FileProcessing";
import RedisQueue from "@/app/documentation/(sections)/workflow/components/RedisQueue";
import AIProcessing from "@/app/documentation/(sections)/workflow/components/AIProcessing";
import StorageSecurity from "@/app/documentation/(sections)/workflow/components/StorageSecurity";
import ReportRetrieval from "@/app/documentation/(sections)/workflow/components/ReportRetrieval";

export default function WorkflowPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-extrabold mb-6 border-b border-black pb-3">
        🔄 End-to-End Application Workflow
      </h1>
      <p className="text-lg text-gray-800">
        This guide explains the{" "}
        <strong>entire ECG Analysis System workflow</strong>, from{" "}
        <strong>
          file upload to AI-driven interpretation and secure storage
        </strong>
        .
      </p>

      <UserUpload />
      <FileProcessing />
      <RedisQueue />
      <AIProcessing />
      <StorageSecurity />
      <ReportRetrieval />
    </div>
  );
}
