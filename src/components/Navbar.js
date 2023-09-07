import React, { useContext, useState } from 'react';
import { MyContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';

import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';

const Navbar = () => {
  const [showNavColor, setShowNavColor] = useState(false);

  const { title } = useContext(MyContext);
  console.warn(title);
  const ab = useNavigate()
  return (
    <div className='App' >
      <>


        <MDBNavbar expand='lg' dark bgColor='primary'>
          <MDBContainer fluid>
            <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
            <MDBNavbarToggler
              type='button'
              data-target='#navbarColor02'
              aria-controls='navbarColor02'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShowNavColor(!showNavColor)}
            >
              <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
            <MDBCollapse show={showNavColor} navbar>
              <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                <MDBNavbarItem className='active'>
                  <MDBNavbarLink aria-current='page' href='#'>
                    Home
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='#'>Blog</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='#'>Adding Blogs</MDBNavbarLink>
                </MDBNavbarItem>

              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </>
      <br />
      <br />
      <MDBBtn onClick={() => ab('/blogAdd')} type="button" className='addbtn'>ADD BLOG</MDBBtn>
      <br />
      <br />
      <div className='bgn'> {title.map((t) =>
        < button className='txt' onClick={() => ab(`/viewblog/${t.id}`)}><h3 key={t.id} className='txt'>{t.title}</h3></button>)}</div>
    </div>
  );
};

export default Navbar;
