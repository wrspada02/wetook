import {
  cleanup, fireEvent, render, screen,
} from '@testing-library/react';
import {
  afterEach,
  describe, expect, it,
} from 'vitest';
import { Avatar } from '.';

describe('Component props', () => {
  afterEach(cleanup);

  it('should render group component if props isGroup is true', () => {
    render(<Avatar isGroup isHeaderAvatar isColumnStyle />);

    const groupAvatarElement = screen.getByTestId('group-avatar');

    expect(groupAvatarElement).toBeDefined();
  });

  it('should not render group component if props isGroup is false', () => {
    render(<Avatar isGroup={false} isHeaderAvatar isColumnStyle />);

    const groupAvatarElement = screen.queryByTestId('group-avatar');

    expect(groupAvatarElement).toBeNull();
  });

  it('should render message counter neither menu option button if props isHeaderAvatar is false', () => {
    render(<Avatar isGroup isHeaderAvatar={false} isColumnStyle />);

    const messageCounterElement = screen.getByTestId('message-counter');
    const menuOptionButtonElement = screen.getByTestId('menu-option-button');

    expect(messageCounterElement).toBeDefined();
    expect(menuOptionButtonElement).toBeDefined();
  });

  it('should not render message counter neither menu option button if props isHeaderAvatar is true', () => {
    render(<Avatar isGroup isHeaderAvatar isColumnStyle />);

    const messageCounterElement = screen.queryByTestId('message-counter');
    const menuOptionButtonElement = screen.queryByTestId('menu-option-button');

    expect(messageCounterElement).toBeNull();
    expect(menuOptionButtonElement).toBeNull();
  });
});

describe('Component UI', () => {
  afterEach(cleanup);

  it('should have flex-col class if props isColumnStyle is true', () => {
    render(<Avatar isGroup isHeaderAvatar isColumnStyle />);

    const avatarContentElement = screen.getByTestId('avatar-content');

    expect(avatarContentElement).toHaveProperty('className', 'flex-col flex gap-x-2 w-full');
  });

  it('should not have flex-col class if props isColumnStyle is false', () => {
    render(<Avatar isGroup isHeaderAvatar isColumnStyle={false} />);

    const avatarContentElement = screen.getByTestId('avatar-content');

    expect(avatarContentElement).not.toHaveProperty('className', 'flex-col flex gap-x-2 w-full');
  });
});

describe('User actions', () => {
  afterEach(cleanup);

  it('should open the menu options whenever the menu option button is clicked', () => {
    render(<Avatar isGroup isHeaderAvatar={false} isColumnStyle={false} />);

    const menuOptionButtonElement = screen.getByTestId('avatar-menu-option-button');

    fireEvent.click(menuOptionButtonElement);

    const avatarActionsElement = screen.getByTestId('avatar-menu-option-list');

    expect(avatarActionsElement).toBeDefined();
  });

  it('should close the menu options whenever the menu option is visible and click outside the menu option box', () => {
    render(<Avatar isGroup isHeaderAvatar={false} isColumnStyle={false} />);

    const menuOptionButtonElement = screen.getByTestId('avatar-menu-option-button');

    fireEvent.click(menuOptionButtonElement);

    const avatarActionsElement = screen.getByTestId('avatar-menu-option-list');

    expect(avatarActionsElement).toBeDefined();

    fireEvent.click(document.body);

    const avatarActionsElementAfterClick = screen.queryByTestId('avatar-menu-option-list');

    expect(avatarActionsElementAfterClick).toBeNull();
  });
});
