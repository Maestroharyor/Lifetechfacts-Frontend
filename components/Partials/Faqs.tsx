import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import {MdKeyboardArrowDown} from "react-icons/md";
// import ExpandMoreIcon from "@material-ui/core/icons-material/ExpandMore";

type Props = {};

interface faqs{
    question: string,
    body: string
}

const faqslist:faqs[] = [
    {
        question:"How much does the training cost?",
        body:"₦2,000 only. This is approximately $5. Pretty Cheap right?"
    },
    {
        question:"What are the things I would need to participate?",
        body:"You'll need a laptop, internet connection and the willingness to learn through collaboration and mentorship."
    },
    {
        question:"Is it very beginner friendly?",
        body:"Yes. You don't need any previous coding knowledge. But if you do, then that's also great!"
    },
    {
        question:"What happens if i join and I’m not active?",
        body:"Participants who join the program and stop engaging will be given the chance to catch up. I will also be there to mentor and help you."
    },

]

function Faqs({}: Props) {
  return (
    <div>
        {faqslist.map(faq => (
          <Accordion className="dark:bg-dark-background dark:text-white" key={faq.question}>
          <AccordionSummary
            expandIcon={<MdKeyboardArrowDown className="dark:text-white" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="dark:bg-dark-background dark:text-white"
          >
            <Typography className="text-2xl font-bold">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {faq.body}
            </Typography>
          </AccordionDetails>
        </Accordion>  
        ))}
    </div>
  );
}

export default Faqs;
