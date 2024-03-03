import { cleanup, render, screen } from '@testing-library/react';
import {
  afterEach, describe, expect, it,
} from 'vitest';
import { Message } from '.';

describe('Component props', () => {
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

describe('Component UI', () => {
  afterEach(cleanup);

  it('should have blue background color for incoming message', () => {
    render(<Message type="common" value="Hello World" hour="12:00" isIncomingMessage />);

    const messageElement = screen.getByTestId('message-content');

    expect(messageElement).toHaveProperty('className', 'bg-[#2C80FF] rounded-lg w-fit mt-3');
  });

  it('should have gray background color for incoming message', () => {
    render(<Message type="common" value="Hello World" hour="12:00" isIncomingMessage={false} />);

    const messageElement = screen.getByTestId('message-content');

    expect(messageElement).toHaveProperty('className', 'bg-[#4C4C4C] float-right rounded-lg w-fit mt-3');
  });
});

describe('Component logic', () => {
  afterEach(cleanup);

  it('should render the hour of the message', () => {
    render(<Message type="common" value="Hello World" hour="12:00" isIncomingMessage={false} />);

    const messageHourElement = screen.getByText('12:00');

    expect(messageHourElement).toBeDefined();
  });

  it('should render the value of the message', () => {
    render(<Message type="common" value="Hello World" hour="12:00" isIncomingMessage={false} />);

    const messageValueElement = screen.getByText('Hello World');

    expect(messageValueElement).toBeDefined();
  });
});
