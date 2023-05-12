import React, { useEffect, useState } from "react";
import { api } from "../config/axios";
interface Props {
  url: string;
  queryParams: string;
}

interface initialStatus {
  data: any;
  isLoading: boolean;
  error: any;
}
export const useFetch = () => {
  const [value, setValue] = useState<initialStatus>({
    data: null,
    isLoading: false,
    error: null,
  });
  useEffect(() => {
    let didCancel = false;
    async function fetchData() {
      try {
        setValue((preState) => ({ ...preState, isLoading: true }));
        const fetchRequest = await api.get(
          "/api/football/fixtures/?date=2023-05-12"
        );
        const response = await fetchRequest.data.all;
        setValue((preState) => ({ ...preState, data: response }));
      } catch (err) {
        setValue((preState) => ({ ...preState, error: err }));
      } finally {
        setValue((preState) => ({ ...preState, isLoading: false }));
      }
    }
    fetchData();
  }, []);

  return { ...value };
};
