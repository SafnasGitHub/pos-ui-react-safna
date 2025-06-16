import React from 'react';
import './AddProductModal.css';

export default function AddProductModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="modal-overlay">
      <div className="add-product-modal">
        <div className="modal-header">
          <h2>Add New Product</h2>
          <button className="scan-barcode-btn">Scan Barcode</button>
        </div>
        <form className="modal-form">
          <div className="form-row">
            <div className="form-group">
              <label>Category<span>*</span></label>
              <select><option>Select Category</option></select>
            </div>
            <div className="form-group">
              <label>Product Name<span>*</span></label>
              <input type="text" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Product Descriptions</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Re Order Level (Stock)<span>*</span></label>
              <input type="number" />
            </div>
            <div className="form-group">
              <label>Expire Alert Days<span>*</span></label>
              <input type="number" />
            </div>
          </div>
          <div className="form-row tax-row">
            <label><input type="checkbox" defaultChecked /> GST</label>
            <label><input type="checkbox" defaultChecked /> HST</label>
            <label><input type="checkbox" defaultChecked /> VAT</label>
            <label><input type="checkbox" defaultChecked /> Tax</label>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Image upload</label>
              <input type="file" />
            </div>
            <div className="form-group checkbox-group">
              <label>Use Scale <input type="checkbox" defaultChecked /></label>
            </div>
            <div className="form-group">
              <label>Product Code</label>
              <input type="text" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Quantity</label>
              <input type="number" />
            </div>
            <div className="form-group">
              <label>Unit of Scale</label>
              <input type="text" value="kg" readOnly />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group product-location">
              <label>Product Location</label>
              <div className="location-fields">
                <input type="text" placeholder="Location" />
                <input type="text" placeholder="Rack Name" />
                <input type="text" placeholder="Rack Column" />
                <input type="text" placeholder="Rack Row" />
              </div>
            </div>
          </div>
          <div className="modal-actions">
            <button type="button" className="modal-cancel" onClick={onClose}>Cancel</button>
            <button type="submit" className="modal-add">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
} 