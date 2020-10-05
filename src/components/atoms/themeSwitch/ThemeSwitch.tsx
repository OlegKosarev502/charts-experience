import React, { useMemo } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core';

import { container } from 'ioc.config';
import {
  IThemeService,
  themeServiceToken,
} from 'services/theme/theme.interfaces';
import { ThemeNames } from 'services/theme/theme.interfaces';

const StyledModeSelector = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(3, max-content);
  align-items: center;
  gap: 8px;
`;

const StyledSwitch = withStyles({
  track: {
    opacity: '1 !important',
    backgroundColor: 'rgb(0, 191, 170) !important',
  },
  thumb: {
    backgroundColor: 'rgb(255, 255, 255)',
  },
})(Switch);

const ThemeSwitch: React.FC = () => {
  const themeService = useMemo(
    () => container.get<IThemeService>(themeServiceToken),
    []
  );
  const isChecked = themeService.themeName === ThemeNames.Dark;

  return (
    <StyledModeSelector>
      <Typography>Light mode</Typography>
      <StyledSwitch
        checked={isChecked}
        onChange={themeService.changeTheme}
        color="primary"
      />
      <Typography>Dark mode</Typography>
    </StyledModeSelector>
  );
};

export default ThemeSwitch;
