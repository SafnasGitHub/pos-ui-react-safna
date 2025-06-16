import React, { useState } from 'react';
import Filters from '../components/Filters';
import ProductTable from '../components/ProductTable';
import AddProductModal from '../components/AddProductModal';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="home-page">
      <Filters onAddProduct={() => setShowModal(true)} />
      <ProductTable />
      <AddProductModal open={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}