import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
  
  const BarStyling = {width:"20rem", background:"#F2F1F9", border:"none", padding:"0.5rem", display: "block", "text-align": "center", border: "3px solid green", margin: "auto",
  width: "50%", border: "3px solid green", padding: "10px", top:"10"};
  
  return (<>
  <div>

    <input 
    inputStyle={{backgroundColor: 'white'}}
    containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5}}
    placeholderTextColor={'#g5g5g5'}
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"Search Packages"}
     onChange={(e) => setKeyword(e.target)}
    />
    </div>
    </>
  );
}


export default SearchBar

