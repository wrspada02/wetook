import { Search } from '@mui/icons-material';
import TuneIcon from '@mui/icons-material/Tune';
import { Input, InputAdornment, Tooltip } from '@mui/material';
import { NestedList } from '../../components/nested-list';
import { Avatar } from '../../components/avatar';

export function Contact() {
  return (
    <>
      <header className="flex items-center justify-between pt-10">
        <h1 className="text-white text-xl font-bold">Contact</h1>
        <button
          type="button"
          aria-label="Configuration Button to adjust your system"
        >
          <Tooltip title="Configuration">
            <TuneIcon style={{ color: 'white' }} />
          </Tooltip>
        </button>
      </header>
      <form action="get">
        <Input
          className="!text-white !placeholder-white w-full my-5 p-1 bg-[#3F3F3F] rounded-md"
          placeholder="Search username..."
          startAdornment={(
            <InputAdornment position="start">
              <Search style={{ color: '#737373' }} />
            </InputAdornment>
          )}
        />
      </form>
      <NestedList
        titleHeader="Contact"
        isThereAddIconButton
        items={[
          <Avatar isGroup={false} isHeaderAvatar={false} />,
          <Avatar isGroup={false} isHeaderAvatar={false} />,
          <Avatar isGroup={false} isHeaderAvatar={false} />,
          <Avatar isGroup={false} isHeaderAvatar={false} />,
          <Avatar isGroup={false} isHeaderAvatar={false} />,
          <Avatar isGroup={false} isHeaderAvatar={false} />,
        ]}
      />
      <NestedList
        titleHeader="Group"
        isThereAddIconButton={false}
        items={[
          <Avatar isGroup isHeaderAvatar={false} />,
          <Avatar isGroup isHeaderAvatar={false} />,
          <Avatar isGroup isHeaderAvatar={false} />,
          <Avatar isGroup isHeaderAvatar={false} />,
          <Avatar isGroup isHeaderAvatar={false} />,
          <Avatar isGroup isHeaderAvatar={false} />,
        ]}
      />
    </>
  );
}
