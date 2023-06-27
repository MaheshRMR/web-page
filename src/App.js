import "./App.css";
//import "../public/logo.png"
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import ProductList from "./components/ProductList";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Home from "./components/Home";
import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";
import { styled } from '@mui/material/styles';
import { alignProperty } from "@mui/material/styles/cssUtils";
function App() {

  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });
  

  const navigate = useNavigate();
  return (
    <div className="App">

          APP
          <span className="nav-buttons">
          <span sx={{ mr: 2 , mt:1 , mb:1 , ml:2 }}>
          <img src=""/>
          </span>
          {/* <BootstrapButton 
            sx={{ mr: 2 , mt:1 , mb:1 }}
            variant="contained" 
            BootstrapButton>
           Bootstrap
          </BootstrapButton> */}
          <BootstrapButton
            sx={{ mr: 2 , mt:1 , mb:1}}
            variant="contained"
            BootstrapButton
            onClick={() => navigate("/Home")}
            // color="success"
          >
            Home
          </BootstrapButton>
          <BootstrapButton
            sx={{ mr: 2 , mt:1 , mb:1}}
            variant="contained"
            BootstrapButton
            onClick={() => navigate("/ProductList")}
            // color="success"
          >
            Product List
          </BootstrapButton>
          <BootstrapButton
            sx={{ mr: 2 , mt:1 , mb:1}}
            variant="contained"
            BootstrapButton
            onClick={() => navigate("/CreateProduct")}
            // color="success"
          >
            Create Product
          </BootstrapButton>
          <BootstrapButton
            sx={{ mr: 2 , mt:1 , mb:1}}
            variant="contained"
            BootstrapButton
            onClick={() => navigate("/ProductList/Edit/:prodid")}
            // color="success"
          >
            Edit Product
          </BootstrapButton></span>
          
        
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/CreateProduct" element={<CreateProduct />} />
        <Route path="/ProductList/Edit/:prodid" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
