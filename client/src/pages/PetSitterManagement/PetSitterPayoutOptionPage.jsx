import React, { useEffect, useState } from "react";
import axios from "axios";
import PayoutOption from "../../components/petSitterManagement/payoutOption/PayoutOption";
import Sidebar from "../../components/petSitterManagement/payoutOption/PayoutOptionSidebar";
import Navbar from "../../components/petSitterManagement/petSitterProfileForm/PetSitterNavbar";
import { SERVER_API_URL } from "../../core/config.mjs";

const PetSitterPayoutOptionPage = () => {
  const [payoutData, setPayoutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPayoutData = async () => {
      try {
        const response = await axios.get(`${SERVER_API_URL}/petsitter/payout-option`);
        setPayoutData(response.data);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          // Handle the case where no records are found (404)
          setPayoutData({
            total_amount: "0.00",
            bank_account: {
              bank: "",
              account_number: "",
            },
            bookings: [],
          });
        } else {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPayoutData();
  }, []);

  return (
    <div className="flex bg-primarygray-100">
      <Sidebar />
      <div className="flex flex-col gap-[8px] min-w-[1024px] w-full">
        <Navbar />
        <main>
          <div>
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>Error: {error.message}</div>
            ) : (
              <PayoutOption payoutData={payoutData} />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PetSitterPayoutOptionPage;
