import Header from "~/components/Header";
import { Form } from "react-router";
import {
  type BaseSyntheticEvent,
  type FormEventHandler,
  useEffect,
  useMemo,
  useState,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faClose,
  faEnvelope,
  faEye,
  faEyeSlash,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { z } from "zod";
import type { Route } from "../+types/root";
import useCountries from "~/hooks/useCountries";
import _ from "lodash";
import type { Country } from "~/context/Countries";
import PhoneInput from "react-phone-number-input/input";

type FormType = "signup" | "login";

export async function action({ request }: Route.ActionArgs) {
  let formData = await request.formData();
  console.log(formData);
  return "submit";
}

export default function Account({
  formType = "login",
}: {
  formType?: FormType;
}) {
  return (
    <>
      <Header />
      <main>{formType === "signup" ? <Signup /> : <Login />}</main>
    </>
  );
}

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [show, setShow] = useState(false);

  const handleInput = (ev: BaseSyntheticEvent) => {
    setData((prevState) => ({
      ...prevState,
      [ev.target.name]: ev.target.value,
    }));
  };

  return (
    <Form method={"post"} className={"form"}>
      <div>
        <h1>Log into your account</h1>
        <span>Get your own dashboard for whatever</span>
      </div>

      <div>
        <label htmlFor={"email"}>Email</label>
        <input
          type="email"
          name={"email"}
          value={data.email}
          id={"email"}
          autoFocus
          required
          onInput={handleInput}
        />
      </div>

      <div>
        <label htmlFor={"password"}>Password</label>
        <input
          type={show ? "text" : "password"}
          name={"password"}
          value={data.password}
          id={"password"}
          required
          onInput={handleInput}
        />
        <button type={"button"} onClick={() => setShow(!show)}>
          <FontAwesomeIcon icon={show ? faEyeSlash : faEye} />
        </button>
      </div>

      <button>
        <span>Submit</span>
      </button>
    </Form>
  );
}

const Data = z
  .object({
    name: z
      .string({ required_error: "Full name required" })
      .trim()
      .nonempty({ message: "Full name is required" }),
    email: z
      .string({ required_error: "Email is required" })
      .trim()
      .email({ message: "Invalid email" })
      .nonempty({ message: "provide an email" }),
    password: z
      .string({ required_error: "provide a password" })
      .trim()
      .nonempty({ message: "Enter your password" })
      .min(8, { message: "Minimum character is 8" }),
    repassword: z
      .string({ required_error: "Retype password" })
      .trim()
      .nonempty({ message: "Retype your password" })
      .min(8, { message: "Minimum character is 8" }),
    phone: z
      .string({ required_error: "Phone number required" })
      .trim()
      .nonempty({ message: "provide a phone number" }),
  })
  .required({
    name: true,
    email: true,
    password: true,
    repassword: true,
    phone: true,
  });

function Signup() {
  const [data, setData] = useState<z.infer<typeof Data>>({
    name: "",
    email: "",
    password: "",
    phone: "",
    repassword: "",
  });

  const [show, setShow] = useState(false);
  const [err, setErr] = useState({ open: false, message: "" });
  const countries = useCountries();
  const [code, setCode] = useState<Country>(countries[0]);
  const [open, setOpen] = useState(false);
  const sortedCountry = useMemo(
    () => countries.sort((a, b) => (a.name < b.name ? -1 : 1)),
    [countries],
  );

  const handleInput = (ev: BaseSyntheticEvent) => {
    setData((prevState) => ({
      ...prevState,
      [ev.target.name]: ev.target.value,
    }));
  };

  const submitData: FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();
    const parsedData = Data.safeParse({ ...data });
    if (!parsedData.success) {
      console.dir(parsedData.error);
    } else {
      console.log(parsedData);
      console.log("All successfully registered");
    }
  };

  useEffect(() => {
    setCode(sortedCountry[0]);
  }, [sortedCountry]);

  return (
    <Form method={"post"} onSubmit={submitData} className={"form"}>
      <div>
        <h1>Create an account</h1>
        <span>Get your own dashboard for whatever</span>
      </div>

      <div>
        <label htmlFor={"name"}>Full Name</label>
        <input
          type="text"
          name={"name"}
          id={"name"}
          value={data.name}
          autoFocus
          required
          onInput={handleInput}
        />
        <FontAwesomeIcon icon={faUser} className={"icon_logo"} />
      </div>

      <div>
        <label htmlFor={"email"}>Email</label>
        <input
          type="email"
          name={"email"}
          id={"email"}
          value={data.email}
          required
          onInput={handleInput}
        />
        <FontAwesomeIcon icon={faEnvelope} className={"icon_logo"} />
      </div>

      <div>
        <label htmlFor={"phone"}>Phone Number</label>
        <div className={"phone"}>
          <button type={"button"} onClick={() => setOpen(!open)}>
            <img src={code.icon} alt={code.iso2} />
            <span> +{code.phonecode}</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>

          <PhoneInput
            placeholder="Enter phone number"
            country={code.iso2 as any}
            international
            smartCaret
            required
            name={"phone"}
            useNationalFormatForDefaultCountryValue
            id={"phone"}
            value={data.phone}
            onChange={(tel) => {
              setData((prevState) => ({
                ...prevState,
                phone: tel ?? "",
              }));
            }}
          />
        </div>
        <FontAwesomeIcon icon={faPhone} className={"icon_logo"} />
      </div>

      <div>
        <label htmlFor={"password"}>Password</label>
        <input
          type={show ? "text" : "password"}
          name={"password"}
          id={"password"}
          value={data.password}
          required
          onInput={handleInput}
        />

        <button type={"button"} onClick={() => setShow(!show)}>
          <FontAwesomeIcon icon={show ? faEyeSlash : faEye} />
        </button>
      </div>

      <div>
        <label htmlFor={"repassword"}>Retype Password</label>
        <input
          type={show ? "text" : "password"}
          name={"repassword"}
          id={"repassword"}
          value={data.repassword}
          required
          onInput={handleInput}
        />

        <button type={"button"} onClick={() => setShow(!show)}>
          <FontAwesomeIcon icon={show ? faEyeSlash : faEye} />
        </button>
      </div>

      <button>
        <span>Submit</span>
      </button>

      {open && (
        <div id={"countries"}>
          <h2>
            Choose options{" "}
            <button type={"button"} onClick={() => setOpen(false)}>
              <FontAwesomeIcon icon={faClose} />
            </button>
          </h2>
          <div className={"country"}>
            {_.map(sortedCountry, (country, key) => (
              <button
                className={country == code ? "selected" : undefined}
                type={"button"}
                key={key}
                onClick={() => {
                  setCode(country);
                  setOpen(false);
                }}
              >
                <img src={country.icon} alt={country.iso2} />
                <b> {country.name}</b>
                <span className={"code"}>(+{country.phonecode})</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </Form>
  );
}
