import React, { useState } from 'react';
import './Filters.css';

const categories = ['Footwear', 'Apparel', 'Accessories'];
const products = ['Green Sandal', 'Red Shoes', 'Blue Shirt'];
const searchByOptions = ['Name', 'Product Code', 'Barcode'];
const sortByOptions = ['Price: Low to High', 'Price: High to Low', 'Stock: High to Low'];
const colors = ['Green', 'Red', 'Blue', 'Black'];
const thicknesses = ['5mm', '10mm', '15mm'];
const diameters = ['Small', 'Medium', 'Large'];

export default function Filters({ onAddProduct }) {
  const [filters, setFilters] = useState({
    category: '',
    product: '',
    searchBy: '',
    sortBy: '',
    color: '',
    thickness: '',
    diameter: ''
  });

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const handleRefresh = () => {
    setFilters({
      category: '',
      product: '',
      searchBy: '',
      sortBy: '',
      color: '',
      thickness: '',
      diameter: ''
    });
  };

  return (
    <div className="filters-container">
      <div className="filters-row">
        <select 
          value={filters.category}
          onChange={(e) => handleFilterChange('category', e.target.value)}
        >
          <option value="">Category</option>
          {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
        </select>
        <select 
          value={filters.product}
          onChange={(e) => handleFilterChange('product', e.target.value)}
        >
          <option value="">Select Product</option>
          {products.map((prod) => <option key={prod} value={prod}>{prod}</option>)}
        </select>
        <select 
          value={filters.searchBy}
          onChange={(e) => handleFilterChange('searchBy', e.target.value)}
        >
          <option value="">Search By</option>
          {searchByOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
        <select 
          value={filters.sortBy}
          onChange={(e) => handleFilterChange('sortBy', e.target.value)}
        >
          <option value="">Sort By</option>
          {sortByOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
        <button className="add-product-btn" onClick={onAddProduct}>Add Products</button>
      </div>
      <div className="filters-row">
        <select 
          value={filters.color}
          onChange={(e) => handleFilterChange('color', e.target.value)}
        >
          <option value="">Color</option>
          {colors.map((color) => <option key={color} value={color}>{color}</option>)}
        </select>
        <select 
          value={filters.thickness}
          onChange={(e) => handleFilterChange('thickness', e.target.value)}
        >
          <option value="">Thickness</option>
          {thicknesses.map((thick) => <option key={thick} value={thick}>{thick}</option>)}
        </select>
        <select 
          value={filters.diameter}
          onChange={(e) => handleFilterChange('diameter', e.target.value)}
        >
          <option value="">Diameter</option>
          {diameters.map((dia) => <option key={dia} value={dia}>{dia}</option>)}
        </select>
        <button className="refresh-btn" onClick={handleRefresh}>Refresh</button>
      </div>
    </div>
  );
} 