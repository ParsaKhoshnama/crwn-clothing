import { useLocation, useParams,useNavigate /* ...other hooks */ } from 'react-router-dom';

const withRouter = WrappedComponent => props => {
  const params= useParams();
  const location=useLocation()
  const navigate = useNavigate()
  // ...other hooks
  return (
    <WrappedComponent
      {...props}
      {...{location,navigate,params /* other hook props */ }}
    />
  );
};

export default withRouter;