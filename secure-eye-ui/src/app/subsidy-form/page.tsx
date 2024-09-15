"use client"

import React from 'react';
import { useState } from 'react';
import { Input } from "../../components/ui/subsidy-input"
import { Label } from "../../components/ui/subsidy-label"
import { Button } from "../../components/ui/subsidy-button"

const SubsidyClaimForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    invoiceNumber: '',
    invoiceDate: '',
    invoiceAmount: '',
    cctvModel: '',
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    accountHolderName: ''
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">CCTV Subsidy Claim Form</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Invoice Details</h2>
          <div>
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="bg-gray-800 text-white border-gray-700"
            />
          </div>
          <div>
            <Label htmlFor="invoiceNumber">Invoice Number</Label>
            <Input
              id="invoiceNumber"
              name="invoiceNumber"
              value={formData.invoiceNumber}
              onChange={handleChange}
              required
              className="bg-gray-800 text-white border-gray-700"
            />
          </div>
          <div>
            <Label htmlFor="invoiceDate">Invoice Date</Label>
            <Input
              id="invoiceDate"
              name="invoiceDate"
              type="date"
              value={formData.invoiceDate}
              onChange={handleChange}
              required
              className="bg-gray-800 text-white border-gray-700"
            />
          </div>
          <div>
            <Label htmlFor="invoiceAmount">Invoice Amount</Label>
            <Input
              id="invoiceAmount"
              name="invoiceAmount"
              type="number"
              value={formData.invoiceAmount}
              onChange={handleChange}
              required
              className="bg-gray-800 text-white border-gray-700"
            />
          </div>
          <div>
            <Label htmlFor="cctvModel">CCTV Model</Label>
            <Input
              id="cctvModel"
              name="cctvModel"
              value={formData.cctvModel}
              onChange={handleChange}
              required
              className="bg-gray-800 text-white border-gray-700"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Bank Details</h2>
          <div>
            <Label htmlFor="bankName">Bank Name</Label>
            <Input
              id="bankName"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
              required
              className="bg-gray-800 text-white border-gray-700"
            />
          </div>
          <div>
            <Label htmlFor="accountNumber">Account Number</Label>
            <Input
              id="accountNumber"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              required
              className="bg-gray-800 text-white border-gray-700"
            />
          </div>
          <div>
            <Label htmlFor="ifscCode">IFSC Code</Label>
            <Input
              id="ifscCode"
              name="ifscCode"
              value={formData.ifscCode}
              onChange={handleChange}
              required
              className="bg-gray-800 text-white border-gray-700"
            />
          </div>
          <div>
            <Label htmlFor="accountHolderName">Account Holder Name</Label>
            <Input
              id="accountHolderName"
              name="accountHolderName"
              value={formData.accountHolderName}
              onChange={handleChange}
              required
              className="bg-gray-800 text-white border-gray-700"
            />
          </div>
        </div>

        <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
          Submit Claim
        </Button>
      </form>
    </div>
  );
};

export default SubsidyClaimForm;