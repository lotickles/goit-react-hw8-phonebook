// import React from 'react';

// export const HomePage = () => {
//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Welcome to Phonebook App! Please register or login to continue.</h1>
//     </div>
//   );
// };

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Welcome to Phonebook App! Please register or login to continue{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
};

export default HomePage;
