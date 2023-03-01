import * as React from 'react';
import { useStyletron } from 'baseui';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { Button } from 'baseui/button';
import { HeadingSmall } from 'baseui/typography';
import { StyledLink } from 'baseui/link';

export default function Register() {
  const [css] = useStyletron();
  const [value, setValue] = React.useState({
    firstName: '',
    lastName: '',
    Email: '',
    Password: '',
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [isValid, setIsValid] = React.useState(false);
  const [signUp, setSignUp] = React.useState(false);

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.Email && value.Password) {
      setIsValid(true);
    }
  };

  const handleReset = () => {
    setSignUp(!signUp);
    setValue({ firstName: '', lastName: '', Email: '', Password: '' });
  };

  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        width: '100vw',
        height: '100vh',
        background:
          'linear-gradient(to right top, #8080f6, #a277eb, #bd6ddd, #d264cd, #e35bba)',
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
      <div
        className={css({
          padding: '40px',
          margin: '10px',
          border: '2px solid white',
          borderRadius: '10px',
          '@media screen and (max-width:800px)': {
            padding: '20px',
          },
        })}
      >
        <HeadingSmall
          className={css({
            textAlign: 'center',
            padding: '20px',
          })}
        >
          {signUp ? 'Sign up' : 'Sign In'}
        </HeadingSmall>

        {signUp && (
          <FormControl label={() => 'First Name'}>
            <Input
              name="firstName"
              value={value.firstName}
              onChange={handleChange}
              type="Name"
              placeholder="First Name"
            />
          </FormControl>
        )}
        {signUp && (
          <FormControl label={() => 'Last Name'}>
            <Input
              name="lastName"
              value={value.lastName}
              onChange={handleChange}
              type="Name"
              placeholder="Last Name"
            />
          </FormControl>
        )}
        <FormControl label={() => 'Email'}>
          <Input
            name="Email"
            value={value.Email}
            onChange={handleChange}
            type="email"
            placeholder="Email ID"
          />
        </FormControl>
        {submitted && !value.Email ? (
          <p
            className={css({
              color: 'red',
              fontSize: '15px',
              paddingBottom: '12px',
            })}
          >
            please enter email
          </p>
        ) : null}
        <FormControl label="password">
          <Input
            name="Password"
            value={value.Password}
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </FormControl>
        {submitted && !value.Password ? (
          <p
            className={css({
              color: 'red',
              fontSize: '15px',
              paddingBottom: '12px',
            })}
          >
            please enter password
          </p>
        ) : null}
        <Button
          overrides={{
            BaseButton: {
              style: {
                background: 'blue',
                width: '100%',
                marginTop: '10px',
                ':hover': {
                  background: 'blue',
                },
              },
            },
          }}
          onClick={handleSubmit}
          type="submit"
        >
          {signUp ? 'Create an account' : 'Login'}
        </Button>
        <span
          className={css({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '20px',
          })}
        >
          {signUp ? 'Already have an account?' : "Don't have an account?"}
          <a
            className={css({
              paddingLeft: '2px',
              color: 'blue',
              textDecoration: 'underline',
            })}
            onClick={handleReset}
          >
            {signUp ? 'SignIn' : 'SignUp'}
          </a>
        </span>
      </div>
    </div>
  );
}
