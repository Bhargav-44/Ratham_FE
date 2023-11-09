import { createChatBotMessage } from "react-chatbot-kit";
import Got from "../Got";
import Slots from "../Slots";
import Countdown from "../Countdown";
const config = {
  initialMessages: [
    createChatBotMessage(`Hello, Welcome to student info system!`, {
      widget: "gotIt",
    }),
  ],
  botName: "RathamTechnologies",
  widgets: [
    { widgetName: "gotIt", widgetFunc: (props) => <Got {...props} /> },
    { widgetName: "slots", widgetFunc: (props) => <Slots {...props} /> },
    {widgetName: "count", widgetFunc:(props) => <Countdown {...props}/>}
  ],
  state: {
    name: "",
    age: "",
  },
};

export default config;
