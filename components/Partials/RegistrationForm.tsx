import { useState, ChangeEvent, FC, FormEvent } from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { message, Spin } from "antd";
import { usePaystackPayment,  } from "react-paystack";
import axios from "axios";
import { baseUrl } from "../../server/index";

type Props = {};

interface formData {
  fullname: string;
  email: string;
  phoneNumber: string;
  ageGroup: string;
  course: string;
  gender: string;
  paymentStatus: boolean | string;
}

type PaystackProps = {
  reference: string;
  email: string;
  amount: number;
  publicKey: string | undefined;
};

const RegistrationForm: FC = (props: Props) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [gender, setGender] = useState("");
  const [course] = useState("Frontend web development");
  const [paymentStatus, setPaymentStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);

  const config: PaystackProps = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: 200000,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY === undefined ? "" : process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
  };

  // you can call this function anything
  const onSuccess = (reference: any) => {
    message.loading("Updating information to server", 4);
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    setPaymentStatus(true);

    const formData = {
      fullname,
      email,
      phoneNumber,
      ageGroup,
      course,
      gender,
      paymentStatus: "true",
    };

    setLoading(true);
    axios
      .post(`${baseUrl}/mails/course-register`, formData)
      .then((response) => {
        // console.log(response)
        message.success(
          "Congratulations! You are now enrolled in the program",
          6
        );
        message.success("Check your email for confirmation", 4);
        setRegistered(true);
        setLoading(false);
      })
      .catch((error) => {
        // console.log({error})
        message.error(
          error.response.error ||
            "An error occured. Please contact and let us know about this"
        );
        setLoading(false);
      });
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
    message.error("Registration not yet completed");
    message.error("Payment Modal Closed");

    setTimeout(() => {
      message.info("Complete payment to finish your registration", 10);
    }, 4000);
  };

  const initializePayment = usePaystackPayment(config);

  const registerForm = (e: FormEvent) => {
    e.preventDefault();
    initializePayment(onSuccess, onClose);
  };
  return (
    <>
      {!registered && (
        <div>
          <div className="text-center">
            <p className="text-gray-700 dark:text-warning mb-2">
              Ready to get Started?
            </p>
            <h3 className="text-primary dark:text-white font-bold text-5xl mb-10">
              Register Now
            </h3>
          </div>
          <form className="flex flex-col gap-7 pb-20" onSubmit={registerForm}>
            <TextField
              id="standard-basic"
              label="Full name"
              variant="standard"
              required
              onChange={(e) => setFullname(e.target.value)}
            />
            <TextField
              type="email"
              id="standard-basic"
              label="Email Address"
              variant="standard"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              type="tel"
              id="standard-basic"
              label="Phone Number (plus country code)"
              variant="standard"
              required
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <div>
              <FormControl variant="standard" fullWidth required>
                <InputLabel id="demo-simple-select-standard-label">
                  Age group
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={ageGroup}
                  onChange={(e: ChangeEvent<{ value: unknown }>) =>
                    setAgeGroup(e.target.value as string)
                  }
                  label="Age"
                >
                  <MenuItem value={"15-25"}>15 - 25</MenuItem>
                  <MenuItem value={"25-35"}>25 - 35</MenuItem>
                  <MenuItem value={"35-45"}>35 - 45</MenuItem>
                  <MenuItem value={"45+"}>45+</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl variant="standard" fullWidth required>
                <InputLabel id="demo-simple-select-standard-label">
                  Gender
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={gender}
                  onChange={(e: ChangeEvent<{ value: unknown }>) =>
                    setGender(e.target.value as string)
                  }
                  label="Age"
                >
                  <MenuItem value={"male"}>Male</MenuItem>
                  <MenuItem value={"female"}>Female</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl
                variant="standard"
                disabled
                fullWidth
                className="text-white"
              >
                <InputLabel id="demo-simple-select-standard-label">
                  Course - Front-end Development
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Age"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                </Select>
              </FormControl>
            </div>

            <div>
              <input
                type="submit"
                value="Register"
                className="bg-primary text-white w-full text-center py-2 px-10 rounded-full text-lg font-bold hover:bg-primary-hov cursor-pointer duration-300 ease-in-out transition"
              />
            </div>
          </form>
        </div>
      )}

      {registered && (
        <div className="text-center">
          <p className="text-gray-700 dark:text-warning mb-2">
            Congratulations
          </p>
          <h3 className="text-primary dark:text-white font-bold text-5xl mb-10">
            You are now enrolled in our program
          </h3>
        </div>
      )}

      {loading && (
        <div className="fixed top-0 left-0 w-full h-full bg-white dark:bg-dark z-[500] flex flex-col items-center justify-center gap-5 px-5">
          <SpinComponent />
          <p className="text-2xl dark:text-white font-bold text-center">
            Updating information to server...
          </p>
        </div>
      )}
    </>
  );
};

export default RegistrationForm;

const SpinComponent = () => <Spin size="large" />;
