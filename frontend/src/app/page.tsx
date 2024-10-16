"use client";

import React from "react";
import QrcodeReader from "./components/QrcodeReader";
import QrcodeReaderComponent from "./components/QrcodeReaderComponent";

  export default function Home() {
  return (
    <main>
      <div className="text-2xl font-bold text-blue-600">POSアプリ</div>
      <div>
        <QrcodeReaderComponent />
      </div>
    </main>
  );
}
