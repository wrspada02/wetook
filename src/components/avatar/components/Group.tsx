import { Badge } from '@mui/material';
import AvatarLib from '@mui/material/Avatar';

export function Group() {
  return (
    <Badge
      overlap="circular"
      data-testid="group-avatar"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      badgeContent={(
        <AvatarLib alt="Group profile picture" className="!w-5 !h-5 !text-xs">
          CS
        </AvatarLib>
      )}
    >
      <AvatarLib alt="Profile user picture">PS</AvatarLib>
    </Badge>
  );
}
