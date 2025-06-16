import React, { useState } from 'react';
import './ProductTable.css';

const products = [
  { name: 'Red Shoe..', code: 'bt0055444', barcode: 'bt0055444', category: 'Level 1 Cat', tax: 'CST / HST', price: '$100.65', store: '100 In Stock', warehouse: '250 In Stock' },
  { name: 'Green Sandal..', code: 'bt0055478', barcode: 'bt0055478', category: 'Level 2 Cat', tax: 'CST / HST', price: '$125.25', store: '400 In Stock', warehouse: '300 In Stock' },
  { name: 'Blue Shirt..', code: 'bt0055666', barcode: 'bt0055666', category: 'Level 3 Cat', tax: 'HST', price: '$130.75', store: '25 In Stock', warehouse: '200 In Stock' },
  { name: 'Green Sandal..', code: 'bt0055478', barcode: 'bt0055478', category: 'Leve2 1 Cat', tax: 'CST / HST', price: '$250.44', store: '260 In Stock', warehouse: '49 In Stock' },
  { name: 'Green Sandal..', code: '1102', barcode: '1102', category: 'Level 2 Cat', tax: 'CST', price: '$125.25', store: '445 In Stock', warehouse: '500 In Stock' },
  { name: 'Red Shoe..', code: '1102', barcode: '1102', category: 'Level 1 Cat', tax: 'CST', price: '$120.20', store: 'Not Available', warehouse: '350 In Stock' },
  { name: 'Green Sandal..', code: 'bt0055478', barcode: 'bt0055478', category: 'Level 1 Cat', tax: 'Not Applied', price: '$170.55', store: '375 In Stock', warehouse: '350 In Stock' },
  { name: 'Red Shoe..', code: 'bt0055478', barcode: 'bt0055478', category: 'Level 2 Cat', tax: 'Not Applied', price: '$125.90', store: 'Not Available', warehouse: 'Not Available' },
  { name: 'Blue Shirt..', code: 'bt0055666', barcode: 'bt0055478', category: 'Level 3 Cat', tax: 'Not Applied', price: '$290.99', store: '270 In Stock', warehouse: '650 In Stock' },
  { name: 'Green Sandal..', code: 'bt0055478', barcode: 'bt0055478', category: 'Level 1 Cat', tax: 'CST / HST / VAT', price: '$129.05', store: '3600 In Stock', warehouse: '350 In Stock' },
];

function getStatusClass(status) {
  if (status === 'Not Available') return 'status-badge not-available';
  if (status.includes('In Stock')) return 'status-badge in-stock';
  return 'status-badge';
}

export default function ProductTable() {
  const [selectedRow, setSelectedRow] = useState(null);

  return (
    <div className="product-table-container">
      <table className="product-table">
        <thead>
          <tr>
            <th></th>
            <th>Products</th>
            <th>Product code</th>
            <th>Barcode</th>
            <th>Category</th>
            <th>Tax</th>
            <th>Price</th>
            <th>Store</th>
            <th>Warehouse</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod, idx) => (
            <tr
              key={idx}
              className={selectedRow === idx ? 'selected' : ''}
              onClick={() => setSelectedRow(idx)}
            >
              <td><input type="radio" checked={selectedRow === idx} readOnly /></td>
              <td>{prod.name}</td>
              <td>{prod.code}</td>
              <td>{prod.barcode}</td>
              <td>{prod.category}</td>
              <td>{prod.tax}</td>
              <td>{prod.price}</td>
              <td><span className={getStatusClass(prod.store)}>{prod.store}</span></td>
              <td><span className={getStatusClass(prod.warehouse)}>{prod.warehouse}</span></td>
              <td><button className="action-btn">...</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 