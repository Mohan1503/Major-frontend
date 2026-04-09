"use client";

import { Suspense } from "react";
import DEOTimetablePageContent from "./DEOTimetablePageContent";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DEOTimetablePageContent />
    </Suspense>
  );
}