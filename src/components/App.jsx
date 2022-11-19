
export const App = (p) => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
      }}
    >
    {p.children}
    </div>
  );
};
