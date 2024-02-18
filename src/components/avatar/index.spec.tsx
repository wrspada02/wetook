import { cleanup, render, screen } from '@testing-library/react';
import {
  afterEach,
  describe, expect, it,
} from 'vitest';
import { Avatar } from '.';

describe('Props avatar test', () => {
  afterEach(cleanup);

  it('should render group component if passed props as true', () => {
    render(<Avatar isGroup isHeaderAvatar isColumnStyle />);

    const groupAvatarElement = screen.getByTestId('group-avatar');

    expect(groupAvatarElement).toBeDefined();
  });

  it('should not render group component if passed props as false', () => {
    render(<Avatar isGroup={false} isHeaderAvatar isColumnStyle />);

    const groupAvatarElement = screen.queryByTestId('group-avatar');

    expect(groupAvatarElement).toBeNull();
  });
});
