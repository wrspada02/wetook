import { cleanup, render, screen } from '@testing-library/react';
import {
  afterEach, describe, expect, it,
} from 'vitest';
import { Message } from '.';

describe('Components props', () => {
  afterEach(cleanup);

  it('should render audio message component', () => {
    render(<Message type="audio" value="00:00" isIncomingMessage={false} hour="12:00" />);

    const audioMessageElement = screen.getByTestId('message-audio');

    expect(audioMessageElement).toBeDefined();
  });

  it('should render audio message component', () => {
    render(<Message type="call" value="Test" hour="12:00" isIncomingMessage={false} />);

    const audioMessageElement = screen.getByTestId('message-call');

    expect(audioMessageElement).toBeDefined();
  });

  it('should render common message component', () => {
    render(<Message type="common" value="Hello World" hour="12:00" isIncomingMessage={false} />);

    const commonMessageElement = screen.getByTestId('message-common');

    expect(commonMessageElement).toBeDefined();
  });

  it('should render file message component', () => {
    render(<Message type="file" value="Hello World" hour="12:00" isIncomingMessage={false} />);

    const fileMessageElement = screen.getByTestId('message-file');

    expect(fileMessageElement).toBeDefined();
  });

  it('should render file message component', () => {
    render(<Message type="location" value="Hello World" hour="12:00" isIncomingMessage={false} />);

    const locationMessageElement = screen.getByTestId('message-location');

    expect(locationMessageElement).toBeDefined();
  });

  it('should render photos message component', () => {
    render(<Message type="photos" value={['Hello World', 'Hello World']} hour="12:00" isIncomingMessage={false} />);

    const photoMessageElement = screen.getByTestId('message-photos');

    expect(photoMessageElement).toBeDefined();
  });
});

describe('Components UI', () => {
  afterEach(cleanup);
});

/* describe('User actions', () => {
  afterEach(cleanup);
}); */
