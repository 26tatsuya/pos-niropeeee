'use client';

import React, { useState } from 'react';
import QrcodeReaderComponent from './components/QrcodeReaderComponent';

interface Product {
  code: number;
  name: string;
  price: number;
}

export default function Home() {
  const [scannedResult, setScannedResult] = useState('');
  const [product, setProduct] = useState<Product | null>(null);

  const handleCheck = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/get-products?code=${scannedResult}`);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data: Product = await res.json();
      setProduct(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="flex flex-col">
      <p className="text-2xl font-bold text-blue-600">POSアプリ</p>
      <button className="btn btn-primary mt-4 w-48" onClick={handleCheck}>check</button>
      {product && (
        <div>
          <p>コード: {product.code}</p>
          <p>名前: {product.name}</p>
          <p>価格: {product.price}円</p>
        </div>
      )}
      <QrcodeReaderComponent onScan={setScannedResult} />
    </div>
  );
}