import { useLocation, useParams, /* ...other hooks */ } from 'react-router-dom';

const withRouter = WrappedComponent => props => {
  const params= useParams();
  const location=useLocation()
  // ...other hooks
  return (
    <WrappedComponent
      {...props}
      {...{location, /* other hook props */ }}
    />
  );
};

export default withRouter;