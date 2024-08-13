import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperation';
import css from 'components/LoginForm/LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input className={css.loginFormInput} type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input className={css.loginFormInput} type="password" name="password" />
      </label>
      <button className={css.loginBtn} type="submit">
        Log In
      </button>
    </form>
  );
};
