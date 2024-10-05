import './Contacts.style.css';

// eslint-disable-next-line react/prop-types
export const Contacts = ({ phone }) => {
  return (
    <p className='header__contacts dotted'>{phone}</p>
  )
}