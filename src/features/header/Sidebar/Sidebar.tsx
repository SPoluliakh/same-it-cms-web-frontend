import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import { useMedia } from 'src/common/hooks';
import { BurgerMenu, HeaderPhone } from 'src/common/icons';
import { useMenuSidebar } from './hooks';
import { SidebarDrawer, SidebarMenu } from './components';

export const Sidebar = () => {
  const { isOpen, onClose, onOpen } = useMenuSidebar();
  const { isMdUp } = useMedia();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {!isMdUp && (
        <a href="tel:+380932393211">
          <HeaderPhone />
        </a>
      )}
      <IconButton
        sx={{
          color: 'primary.lightText',
          height: '50px',
          width: '50px',
          ml: { xs: '24px', md: '0' },
        }}
        onClick={onOpen}
      >
        <BurgerMenu />
      </IconButton>
      <SidebarDrawer isOpen={isOpen} onClose={onClose}>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '100vw',
          }}
          role="presentation"
        >
          <SidebarMenu onClickItemLink={onClose} />
        </Box>
      </SidebarDrawer>
    </Box>
  );
};
