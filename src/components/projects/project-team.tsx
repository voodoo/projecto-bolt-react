import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface User {
  id: string;
  name: string;
  avatar: string;
}

interface AvatarGroupProps {
  users: User[];
}

export function AvatarGroup({ users }: AvatarGroupProps) {
  return (
    <div className="flex -space-x-2">
      {users.map((user) => (
        <Avatar key={user.id} className="border-2 border-background">
          <AvatarImage src={user.avatar} alt={user.name} />
        </Avatar>
      ))}
    </div>
  );
}