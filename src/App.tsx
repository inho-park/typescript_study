import { useEffect, useState } from 'react';
import { ListItem } from "./components/ListItem";
import axios from "axios";
import type { Users } from "./types/user";


export const App = () => {
  // 얻은 사용자 정보
  const [users, setUsers] = useState<Users[]>([]);

  // 화면에 표시될 때 사용자 정보 얻기
  useEffect(() => {
    axios.get<Users[]>("https://localhost:8080")
        .then((res) => {setUsers(res.data)})
  }, []);

  return (
      <div>
        {users.map(user => (
          <ListItem
              id={user.id}
              name={user.name}
              age={user.age}
              personalColor={user.personalColor}
              hobbies={user.hobbies}
          />
        ))};
      </div>
  );
};