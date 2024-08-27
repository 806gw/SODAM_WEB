import { useState } from "react";
import axiosInstance from "../../api/axios";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const BuyerSignUp = async (
    memberId,
    memberPassword,
    memberEmail,
    memberName,
    memberPhoneNum,
    memberAuthCode,
    memberAddress
  ) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.post("/auth/sign_up", {
        memberId,
        memberPassword,
        memberEmail,
        memberName,
        memberPhoneNum,
        memberAuthCode,
        memberAddress,
      });
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const SellerSignUp = async (
    memberId,
    memberPassword,
    memberEmail,
    memberName,
    openDate,
    sellerNum,
    phoneNum,
    farmName,
    farmAdress,
    account,
    num
  ) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.post("/auth/sign_up/seller", {
        memberId,
        memberPassword,
        memberEmail,
        memberName,
        openDate,
        sellerNum,
        phoneNum,
        farmName,
        farmAdress,
        account,
        num,
      });
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const login = async (memberId, memberPassword) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.post("/auth/sign_in", {
        memberId,
        memberPassword,
      });
      setData(response.data);
      return response;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { BuyerSignUp, SellerSignUp, login, loading, error, data };
};

export default useAuth;
