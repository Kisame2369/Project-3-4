import { Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import css from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  return (
    <header>
      <Formik
        initialValues={{ topic: '' }}
        onSubmit={(values, actions) => {
          if (!values.topic.trim()) {
            toast.error('Please enter a search term');
            return;
          }
          
          onSearch(values.topic.trim());
          actions.resetForm();
        }}
      >
        <Form>
          <Field
            type="text"
            name="topic"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={css.input}
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
}
 