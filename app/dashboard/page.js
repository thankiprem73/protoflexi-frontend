"use client";

import { useEffect, useState } from "react";
import { API } from "../../lib/api";

export default function DashboardPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/orders");
        setOrders(res.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum, o) => sum + (o.total || 0), 0);
  const pending = orders.filter(o => o.status !== "Shipped").length;

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Dashboard
        </h1>
        <p className="text-gray-500 mt-1">
          Overview of your PCB orders & activity
        </p>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white rounded-2xl shadow-sm p-6 border">
          <p className="text-gray-500 text-sm">Total Orders</p>
          <h2 className="text-3xl font-bold mt-2">{totalOrders}</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 border">
          <p className="text-gray-500 text-sm">Pending Orders</p>
          <h2 className="text-3xl font-bold mt-2">{pending}</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 border">
          <p className="text-gray-500 text-sm">Revenue</p>
          <h2 className="text-3xl font-bold mt-2">
            ${totalRevenue.toFixed(2)}
          </h2>
        </div>

      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* ORDERS TABLE */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border p-6">

          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Recent Orders</h3>
          </div>

          {loading ? (
            <p className="text-gray-500">Loading...</p>
          ) : (
            <div className="space-y-3">

              {orders.slice(0, 6).map((o) => (
                <div
                  key={o.id}
                  className="flex justify-between items-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition"
                >

                  <div>
                    <p className="font-medium text-gray-900">{o.id}</p>
                    <p className="text-sm text-gray-500">{o.status}</p>
                  </div>

                  <div className="text-right">
                    <p className="font-semibold">${o.total}</p>
                    <p className="text-xs text-gray-400">
                      {o.date || "Recently"}
                    </p>
                  </div>

                </div>
              ))}

            </div>
          )}
        </div>

        {/* ACTIVITY PANEL */}
        <div className="bg-white rounded-2xl shadow-sm border p-6">

          <h3 className="text-lg font-semibold mb-4">
            Activity
          </h3>

          <div className="space-y-4">

            <div className="p-3 bg-green-50 rounded-lg">
              <p className="text-sm font-medium text-green-700">
                Order system active
              </p>
              <p className="text-xs text-green-600">
                Backend connected
              </p>
            </div>

            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-sm font-medium text-blue-700">
                Upload system ready
              </p>
              <p className="text-xs text-blue-600">
                BOM processing enabled
              </p>
            </div>

            <div className="p-3 bg-yellow-50 rounded-lg">
              <p className="text-sm font-medium text-yellow-700">
                Payments pending setup
              </p>
              <p className="text-xs text-yellow-600">
                Stripe integration ready
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
