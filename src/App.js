import React from "react";


// import Card from "./components/Product-card";
// import Products from "./products.json";
// import Card2 from "./components/Card2";
// import ReactBootstrap from "./components/reactBootstrap";
// import State from "./state"
// import HooksuseState from "./components/conditional-rendering/Main"
// import CounterApp from "./components/assingment-2-counter-app/counter-App";
// import FormHandling from "./components/form-handling/Form";
// import FormHandling2 from "./components/form-handling/form-handling2";
// import ChildComponent from "./components/Data-ParentToChild/ChildComponent";
// import Home from "./components/Todo-App/Home";
// import Toggle from "./components/Toggle/Toggle";
// import FAQS from "./components/FAQ/FAQS.jsx";
// import UseEffectExample from "./components/Hooks/useEffect/useEffectExample";
// import DataFetch from "./components/Hooks/UseEffect/DataFetch"
import CustomHooksExaDataFetch from "./components/Hooks/CustomHooks/CustomHooksExaDataFetch";


function App() {
  // let items = [];
  // items = Products.map((item, index) => (
  //   <Card
  //     key={index}
  //     productTitle={item.productTitle}
  //     productDesc={item.productDesc}
  //     productAmount={item.productAmount}
  //     imgSrc={item.productImg}
  //   />
  // ));
  /* //! passing data from child to parent component */

  // const passingDataPtoC = (childDataParameter) => {
  //   console.log(childDataParameter)
  // }


  //! Todo-App component data

  //!! Plan

  //!!! App.js ==> Components ==> Home.js(todo = ["item1", "item2"]) ==> Todos ==> Todo

  //! Components ===> NewTodo(client side)


  

  return (
    <div>
      {/* <h1 className="headingStyle">Products</h1>
      {items}
      <Card2 name='card2'/>
      < ReactBootstrap />
      <State  /> */}
      {/* <State /> */}
      {/* <HooksuseState /> */}
      {/* <Host /> */}
      {/* <CounterApp /> */}
      {/* <FormHandling /> */}
      {/* <FormHandling2 /> */}


      {/* //! passing data from child to parent component */}

      {/* <ChildComponent parentData="I am parent data visit to child compunent.. please welcome me" childData={passingDataPtoC} /> */}

     {/* //! Todo-App component data!!! */}

      {/* <Home /> */}

      {/* //! Toggle */}

      {/* <Toggle /> */}

      {/* <FAQS /> */}

      {/*//! UseEffect */}

    
      {/* <UseEffectExample /> */}

      {/* <DataFetch /> */}

      <CustomHooksExaDataFetch />
    </div>
  );
}

export default App;






