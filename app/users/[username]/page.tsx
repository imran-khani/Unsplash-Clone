import { getUser } from "@/libs/unsplash";
import { FC } from "react";

interface userProps {
  params: {
    username: string;
  };
}

const User: FC<userProps> = async ({ params }) => {
  const user = await getUser(params.username);
  console.log(user)
  return (
    <div>
     {
        user.name
     }
    </div>
  );
};

export default User;
