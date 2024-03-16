import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './screens/Home';
import { ChatPanel } from './screens/chat-panel';
import { AboutContact } from './screens/about-contact';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/chat/:chatId',
      element: <ChatPanel openCallModal={} chat={[]} onClickAboutContact={() => {}} />,
    },
    {
      path: '/about-contact/:userId',
      element: <AboutContact />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
