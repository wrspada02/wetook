import { useCallback, useState } from 'react';
import { ChatPanel } from '../screens/chat-panel';
import { AboutContact } from '../screens/about-contact';
import { Contact } from '../screens/contact';

export function Home() {
  const [isOpenAboutContact, setIsOpenAboutContact] = useState<boolean>(false);

  const handleAboutContact = useCallback(() => {
    setIsOpenAboutContact(!isOpenAboutContact);
  }, [isOpenAboutContact]);

  return (
    <main className="bg-primary mobile:px-5 desktop:flex fullscreen:flex overflow-hidden max-h-screen h-screen mobile:h-auto mobile:min-h-screen mobile:max-h-max">
      <aside className="desktop:px-3 desktop:min-w-[350px] fullscreen:px-5 fullscreen:min-w-[400px] mobile:border-none border-r-[0.5px] border-[#FCFCFC] overflow-y-auto scrollbar">
        <Contact />
      </aside>
      {document.documentElement.clientWidth > 1024 && (
        <>
          <section className="mobile:hidden tablet:hidden flex-1">
            <ChatPanel
              onClickAboutContact={handleAboutContact}
              chat={[{
                day: 'Today',
                messages: [{
                  hour: '09:32am', isIncomingMessage: true, messageContent: 'Hello World', messageType: 'audio',
                }],
              }, {
                day: 'Today',
                messages: [{
                  hour: '09:32am', isIncomingMessage: false, messageContent: 'Hello World', messageType: 'audio',
                }],
              }]}
            />
          </section>
          {isOpenAboutContact && (
            <aside>
              <AboutContact />
            </aside>
          )}
        </>
      )}
    </main>
  );
}
