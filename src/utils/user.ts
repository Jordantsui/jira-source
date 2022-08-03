import { User } from "screens/project-list/search-panel";
import { useHttp } from "utils/http";
import { useAsync } from "utils/use-async";
import { useEffect } from "react";
import { cleanObject } from "utils/index";

export const useUsers = (param?: Partial<User>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<User[]>();
  // useAsync 封装了异步请求、loading、error 等

  useEffect(() => {
    run(client("users", { data: cleanObject(param || {}) }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param]);

  return result;
};