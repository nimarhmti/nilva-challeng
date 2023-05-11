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
export const useFetch = ({ url, queryParams }: Props) => {
  const [value, setValue] = useState<initialStatus>({
    data: null,
    isLoading: false,
    error: null,
  });
  useEffect(() => {
    let didCancel = false;
    async function fetchData() {
      try {
        // const response = await api.get(url + queryParams);
        // if (!didCancel) setValue((preState) => {...preState});
      } catch {}
    }
  }, [queryParams, url]);

  return <div>useFetch</div>;
};
