import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/authentication";
import { SERVER_API_URL } from "../../core/config.mjs";
import axios from "axios";
import AccountMenu from "../../components/cards/AccountMenu";
import ProfileForm from "../../components/forms/user/ProfileForm";
import PetProfileForm from "../../components/forms/user/PetProfileForm";

const UserManagementPage = () => {
  const { state } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState();

  const getUserProfileData = async () => {
    const userId = state.user.id;

    try {
      const response = await axios.get(
        `${SERVER_API_URL}/user/profile/${userId}`
      );

      const userProfileData = response.data.data;
      setUserData({
        user_id: userId,
        first_name: userProfileData.firstname || "",
        last_name: userProfileData.lastname || "",
        id_number: userProfileData.id_number || "",
        email: userProfileData.email || "",
        date_of_birth: userProfileData.date_of_birth || "",
        image: userProfileData.image || "",
        phone_number: userProfileData.phone_number || "",
      });
    } catch (error) {
      console.error("Error fetching user profile data:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserProfileData();
  }, [state.user.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching pet profile data: {error.message}</div>;
  }

  return (
    <section className="flex flex-col bg-[#F6F6F9] md:gap-8 md:py-10 md:px-20 md:min-h-[calc(100dvh-72px)] md:min-w-[956px] md:flex-row">
      <AccountMenu />
      {userData && (
        <ProfileForm setUserData={setUserData} userData={userData} />
      )}
    </section>
  );
};

export default UserManagementPage;
