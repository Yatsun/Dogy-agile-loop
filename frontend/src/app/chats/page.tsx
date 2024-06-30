import { Button } from "@/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/ui/avatar";
import { Restuarants } from "../Restaurants/page";

export default function Component() {
  return (
    <div className="flex flex-row min-h-screen">
      <div>
        <header className="bg-primary text-primary-foreground px-4 py-3 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2">
            <BotIcon className="w-6 h-6" />
            <span className="text-lg font-semibold">caLUDE AI</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hover:bg-primary/20">
              <SettingsIcon className="w-5 h-5" />
              <span className="sr-only">Settings</span>
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/20">
              <ReplyIcon className="w-5 h-5" />
              <span className="sr-only">Feedback</span>
            </Button>
          </div>
        </header>
        <main className="flex-1 bg-background text-foreground p-4 md:p-6 overflow-auto">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="flex items-start gap-4">
              <Avatar className="w-8 h-8 shrink-0">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="bg-muted rounded-lg p-3 max-w-[75%]">
                <p>Hello, how can I assist you today?</p>
              </div>
            </div>
            <div className="flex items-start gap-4 flex-row-reverse">
              <Avatar className="w-8 h-8 shrink-0">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-[75%]">
                <p>
                  Hi there! I'm an AI assistant created by caLUDE. How can I
                  help you today?
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Avatar className="w-8 h-8 shrink-0">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="bg-muted rounded-lg p-3 max-w-[75%]">
                <p>
                  I'm looking for some information on the latest advancements in
                  AI technology. Can you tell me more about that?
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 flex-row-reverse">
              <Avatar className="w-8 h-8 shrink-0">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-[75%]">
                <p>
                  Absolutely! AI technology has been advancing rapidly in recent
                  years. Some of the key advancements include improvements in
                  natural language processing, computer vision, and machine
                  learning algorithms. This has enabled AI systems to better
                  understand and interact with humans, as well as tackle
                  increasingly complex tasks. Many industries are starting to
                  adopt AI to automate processes, improve decision-making, and
                  drive innovation. Let me know if you'd like me to go into more
                  detail on any specific areas of AI advancements.
                </p>
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-muted text-muted-foreground px-4 py-3 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hover:bg-muted/20">
              <HandHelpingIcon className="w-5 h-5" />
              <span className="sr-only">Help</span>
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-muted/20">
              <ReplyIcon className="w-5 h-5" />
              <span className="sr-only">Feedback</span>
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hover:bg-muted/20">
              <SettingsIcon className="w-5 h-5" />
              <span className="sr-only">Settings</span>
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-muted/20">
              <ExpandIcon className="w-5 h-5" />
              <span className="sr-only">More</span>
            </Button>
          </div>
        </footer>
      </div>
      <div>
        <Restuarants />
      </div>
    </div>
  );
}

function BotIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}

function ExpandIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
      <path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
      <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
      <path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
    </svg>
  );
}

function HandHelpingIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" />
      <path d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
      <path d="m2 13 6 6" />
    </svg>
  );
}

function ReplyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 17 4 12 9 7" />
      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
    </svg>
  );
}

function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
