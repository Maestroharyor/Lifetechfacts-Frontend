import { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type Props = {};

const RegistrationForm = (props: Props) => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <>
      <form className="flex flex-col gap-7 pb-20">
        <TextField
          id="standard-basic"
          label="Full name"
          variant="standard"
          required
        />
        <TextField
          type="email"
          id="standard-basic"
          label="Email Address"
          variant="standard"
          required
        />
        <TextField
          type="tel"
          id="standard-basic"
          label="Phone Number (plus country code)"
          variant="standard"
          required
        />
        <div>
          <FormControl variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-standard-label">Age group</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl variant="standard" disabled fullWidth className="text-white">
            <InputLabel id="demo-simple-select-standard-label">Course - Front-end Development</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div>
          <input type="submit" value="Register" className="bg-primary text-white w-full text-center py-2 px-10 rounded-full text-lg font-bold hover:bg-primary-hov cursor-pointer duration-300 ease-in-out transition"/>
        </div>
      </form>
    </>
  );
};

export default RegistrationForm;
