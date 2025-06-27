"use client";
import React, { useState } from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";

export default function BookingSection() {
    const [formData, setFormData] = useState({
        destination: "",
        paxNumber: "",
        checkinDate: "",
        checkoutDate: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data submitted:", formData);
    };

    return (
        <section className="py-16 bg-blue-100">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">
                        Plan your travel now
                    </h2>

                    <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        <div className="space-y-6">
                            <div>
                                <label
                                    htmlFor="destination"
                                    className="block text-sm font-medium text-white mb-1"
                                >
                                    Search Destination*
                                </label>
                                <input
                                    type="text"
                                    id="destination"
                                    name="destination"
                                    placeholder="Enter Destination"
                                    value={formData.destination}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-white rounded-lg bg-white text-black focus:ring-2 focus:ring-white"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="paxNumber"
                                    className="block text-sm font-medium text-white mb-1"
                                >
                                    Pax Number*
                                </label>
                                <input
                                    type="number"
                                    id="paxNumber"
                                    name="paxNumber"
                                    placeholder="No. of People"
                                    value={formData.paxNumber}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-white rounded-lg bg-white text-black focus:ring-2 focus:ring-white"
                                    required
                                    min="1"
                                />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label
                                    htmlFor="checkinDate"
                                    className="block text-sm font-medium text-white mb-1"
                                >
                                    Checkin Date*
                                </label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        id="checkinDate"
                                        name="checkinDate"
                                        value={formData.checkinDate}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-white rounded-lg bg-white text-black appearance-none"
                                        required
                                    />
                                    <CalendarIcon className="w-5 h-5 text-blue absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="checkoutDate"
                                    className="block text-sm font-medium text-white mb-1"
                                >
                                    Checkout Date*
                                </label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        id="checkoutDate"
                                        name="checkoutDate"
                                        value={formData.checkoutDate}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-white rounded-lg bg-white text-black focus:ring-2 focus:ring-white"
                                        required
                                    />
                                    <CalendarIcon className="w-5 h-5 text-blue absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-2">
                            <button
                                type="submit"
                                className="w-full bg-blue hover:bg-blue-100 text-white font-bold py-4 px-6 rounded-full transition-colors duration-300 shadow-md"
                            >
                                SEARCH
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
