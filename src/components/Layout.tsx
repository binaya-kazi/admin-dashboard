'use client'

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Drawer,
  List,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import { useEffect, useState } from 'react';

type NavLink = {
  name: string;
  href: string;
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const drawerWidth = 240;

  const navLinks: Array<NavLink> = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Users', href: '/users' },
    { name: 'Reports', href: '/reports' },
    { name: 'About', href: '/about' },
  ];

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Render children only if the component has mounted
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <List>
          {navLinks.map((link) => (
            <ListItemButton href={link.href} key={link.href}>
              <ListItemText primary={link.name} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        {mounted && children} {/* Only render children after mounting */}
      </Box>
    </Box>
  );
}
