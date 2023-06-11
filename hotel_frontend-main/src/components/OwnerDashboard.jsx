import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import OwnerNavbar from './OwnerNavbar';
import Wrapper from './Wrapper';
import Promotion from './Promotion';
import ServicePage from '../pages/ServicePage';
import Owner from './Owner';

const OwnerDashboard = () => {
  return (
    <div>
      <ButtonGroup>
        <Button tag={Link} to="/listOfRoom">
          Rooms
        </Button>
        <Button tag={Link} to="/listOfBooking">
          Bookings
        </Button>
        <Button tag={Link} to="/listOfStaff">
          Staff
        </Button>
        <Button tag={Link} to="/listOfGuest">
          Guest
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default OwnerDashboard;
